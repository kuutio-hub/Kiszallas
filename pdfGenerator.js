import { state } from './state.js';
import { getInputs } from './ui.js';
import { D, formatCustomCurrency, convertPrice } from './utils.js';

// PDF dokumentum definíciót hoz létre a pdfmake számára az aktuális adatok alapján.
export function createPdfDefinition() {
    try {
        const i = getInputs();
        const res = state.calculationResults;
        const c = state.activeCurrency;
        const currencySymbol = c === 'EUR' ? '€' : 'Ft';
        const discount = parseFloat(D('discount-input').value) || 0;
        const totalBeforeDiscount = convertPrice(res.totalHuf, c);
        const finalTotal = totalBeforeDiscount * (1 - (discount / 100));

        const summary = `${i.feladat || 'Feladat leírása'} | ${i.szerelo_fo + i.mernok_fo} Fő | ${i.szerelo_munkanap} Nap (napi ${i.szerelo_munkaora} óra, ebből ${i.szerelo_hetvegi_nap} hétvége)`;

        const docDefinition = {
            pageSize: 'A4',
            pageMargins: [40, 50, 40, 50],
            content: [
                // --- Fejléc ---
                {
                    columns: [
                        { text: 'Költségkalkuláció', style: 'header' },
                        {
                            stack: [
                                { text: `Ajánlatszám: ${i.offer_number || '-'}`, style: 'meta' },
                                { text: `Dátum: ${i.calculation_date ? new Date(i.calculation_date).toLocaleDateString('hu-HU') : '-'}`, style: 'meta' },
                            ],
                            width: 'auto'
                        }
                    ],
                    marginBottom: 20
                },
                {
                    columns: [
                        {
                            stack: [
                                { text: 'Megrendelő', style: 'label' },
                                { text: i.customer || '-', style: 'value' }
                            ]
                        },
                        {
                            stack: [
                                { text: 'Projekt', style: 'label' },
                                { text: i.project_name || '-', style: 'value' }
                            ]
                        },
                        {
                            stack: [
                                { text: 'Helyszín', style: 'label' },
                                { text: i.work_location || '-', style: 'value' }
                            ]
                        }
                    ],
                    columnGap: 20,
                    marginBottom: 15
                },
                // --- Összefoglaló ---
                {
                    table: {
                        widths: ['*'],
                        body: [[{ text: summary, style: 'summary', alignment: 'center' }]]
                    },
                    layout: {
                        hLineWidth: (i, node) => (i === 0 || i === node.table.body.length) ? 1 : 0,
                        vLineWidth: () => 0,
                        hLineColor: () => '#cccccc',
                        paddingTop: () => 8,
                        paddingBottom: () => 8,
                    },
                    marginBottom: 20
                }
            ],
            styles: {
                header: { fontSize: 24, bold: true, color: '#1a202c' },
                meta: { fontSize: 9, color: '#4a5568' },
                label: { fontSize: 9, bold: true, color: '#4a5568' },
                value: { fontSize: 10, color: '#1a202c' },
                summary: { fontSize: 10, bold: true, color: '#1a202c' },
                tableHeader: { bold: true, fontSize: 9, color: 'white', fillColor: '#2d3748' },
                totalLabel: { bold: true, fontSize: 10 },
                finalTotal: { bold: true, fontSize: 12, color: '#002244' }
            },
            defaultStyle: {
                font: 'Roboto',
                fontSize: 9
            }
        };

        // --- Tartalom nézet szerint ---
        if (state.pdfViewMode === 'detailed') {
            const tableHeader = [
                { text: 'Költségnem', style: 'tableHeader' },
                { text: 'Menny.', style: 'tableHeader', alignment: 'right' },
                { text: 'Egys.', style: 'tableHeader', alignment: 'center' },
                { text: 'Egységár', style: 'tableHeader', alignment: 'right' }
            ];
            if (discount > 0) tableHeader.push({ text: 'Kedv. Egységár', style: 'tableHeader', alignment: 'right' });
            if (res.hasCostItems) tableHeader.push({ text: 'Önköltség', style: 'tableHeader', alignment: 'right' });
            tableHeader.push({ text: 'Összesen', style: 'tableHeader', alignment: 'right' });

            const tableBody = res.breakdown.map(item => {
                const unit = convertPrice(item.unitPriceHuf, c);
                const discUnit = unit * (1 - (discount / 100));
                const totalCost = convertPrice(item.totalCostHuf, c);
                const total = convertPrice(item.totalHuf, c);
                const discTotal = total * (1 - (discount / 100));

                const row = [
                    item.label,
                    { text: item.quantity.toLocaleString('hu-HU'), alignment: 'right' },
                    { text: item.unit, alignment: 'center' },
                    { text: formatCustomCurrency(unit, currencySymbol), alignment: 'right' }
                ];
                if (discount > 0) row.push({ text: formatCustomCurrency(discUnit, currencySymbol), alignment: 'right' });
                if (res.hasCostItems) row.push({ text: item.isCostItem ? formatCustomCurrency(totalCost, currencySymbol) : '-', alignment: 'right' });
                row.push({ text: formatCustomCurrency(discount > 0 ? discTotal : total, currencySymbol), alignment: 'right' });
                return row;
            });
            
            const widths = ['*', 'auto', 'auto', 'auto'];
            if (discount > 0) widths.push('auto');
            if (res.hasCostItems) widths.push('auto');
            widths.push('auto');

            docDefinition.content.push({
                table: {
                    headerRows: 1,
                    widths: widths,
                    body: [tableHeader, ...tableBody]
                },
                layout: 'lightHorizontalLines'
            });
            
            // Összesítések
            const colSpan = widths.length - 1;
            const totalsTableBody = [];
            if (res.hasCostItems) {
                totalsTableBody.push([
                    { text: `Önköltség összesen (${c})`, colSpan: colSpan, alignment: 'right', style: 'totalLabel' },
                    { text: formatCustomCurrency(convertPrice(res.totalCostHuf, c), currencySymbol), alignment: 'right', style: 'totalLabel' }
                ]);
            }
            totalsTableBody.push([
                { text: `Végösszeg (${c})`, colSpan: colSpan, alignment: 'right', style: 'totalLabel' },
                { text: formatCustomCurrency(totalBeforeDiscount, currencySymbol), alignment: 'right', style: 'totalLabel' }
            ]);
            if (discount > 0) {
                 totalsTableBody.push([
                    { text: `Kedvezményes végösszeg (${discount}%)`, colSpan: colSpan, alignment: 'right', style: 'finalTotal' },
                    { text: formatCustomCurrency(finalTotal, currencySymbol), alignment: 'right', style: 'finalTotal' }
                ]);
            }
            
            docDefinition.content.push({
                table: { widths: ['*', 'auto'], body: totalsTableBody },
                layout: 'noBorders',
                marginTop: 10
            });

        } else { // Egyszerűsített nézet
            const simpleBody = [
                [{ text: 'Nettó összeg:', style: 'totalLabel' }, { text: formatCustomCurrency(totalBeforeDiscount, currencySymbol), alignment: 'right', style: 'totalLabel' }]
            ];
            if (discount > 0) {
                simpleBody.push([{ text: `Engedmény (${discount}%):` }, { text: `- ${formatCustomCurrency(totalBeforeDiscount - finalTotal, currencySymbol)}`, alignment: 'right' }]);
            }
            simpleBody.push([{ text: 'Végösszeg:', style: 'finalTotal' }, { text: formatCustomCurrency(finalTotal, currencySymbol), alignment: 'right', style: 'finalTotal' }]);
            
            docDefinition.content.push({
                table: {
                    widths: ['*', 'auto'],
                    body: simpleBody
                },
                layout: 'noBorders',
                marginTop: 20
            });
        }

        return docDefinition;

    } catch (e) {
        console.error("PDF definíció létrehozási hiba:", e);
        alert("Hiba történt a PDF előkészítése közben.");
        return null;
    }
}
