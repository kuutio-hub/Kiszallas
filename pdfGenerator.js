import { state } from './state.js';
import { getInputs } from './ui.js';
import { D, formatCustomCurrency, convertPrice, loadPdfFont } from './utils.js';

const { jsPDF } = window.jspdf;

// PDF előnézet generálása az aktuális adatokkal és a kiválasztott nézettel.
export async function previewPdf() {
    try {
        const doc = new jsPDF();
        await loadPdfFont(doc); // Egyedi betűtípus betöltése a helyes ékezetekhez

        const i = getInputs();
        const res = state.calculationResults;
        const c = state.activeCurrency;
        const currencySymbol = c === 'EUR' ? '€' : 'Ft';
        const discount = parseFloat(D('discount-input').value) || 0;
        const totalBeforeDiscount = convertPrice(res.totalHuf, c);
        const finalTotal = totalBeforeDiscount * (1 - (discount / 100));

        // --- PDF Fejléc ---
        doc.setFont('Roboto', 'bold');
        doc.setFontSize(28);
        doc.setTextColor(45, 55, 72);
        doc.text('Kiszállás', 14, 22);

        doc.setFont('Roboto', 'normal');
        doc.setFontSize(9);
        doc.setTextColor(100, 116, 139);
        doc.text(`Ajánlatszám: ${i.offer_number || '-'}`, 14, 30);
        doc.text(`Dátum: ${i.calculation_date ? new Date(i.calculation_date).toLocaleDateString('hu-HU') : '-'}`, 14, 35);

        const pageWidth = doc.internal.pageSize.width;
        const rightMargin = 14;
        const rightX = pageWidth - rightMargin;
        let rightY = 22;
        doc.setFontSize(10);
        doc.setTextColor(45, 55, 72);

        const addRightMeta = (label, value) => {
            doc.setFont('Roboto', 'bold');
            doc.text(label, rightX, rightY, { align: 'right' });
            doc.setFont('Roboto', 'normal');
            const labelWidth = doc.getTextWidth(label);
            doc.text(value || '-', rightX - labelWidth - 2, rightY, { align: 'right' });
            rightY += 6;
        };
        addRightMeta('Megrendelő:', i.customer);
        addRightMeta('Projekt:', i.project_name);
        addRightMeta('Helyszín:', i.work_location);

        doc.setTextColor(0, 0, 0);
        let tableStartY = Math.max(35, rightY) + 4;
        const summary = `${i.feladat || 'Feladat'} | ${i.szerelo_fo + i.mernok_fo} Fő | ${i.szerelo_munkanap} Nap (napi ${i.szerelo_munkaora} óra, ebből ${i.szerelo_hetvegi_nap} hétvége)`;
        doc.setDrawColor(180);
        doc.setLineWidth(0.2);
        doc.line(14, tableStartY, pageWidth - 14, tableStartY);
        doc.setFontSize(9);
        doc.setFont('Roboto', 'bold');
        doc.text(summary, pageWidth / 2, tableStartY + 5, { align: 'center' });
        doc.line(14, tableStartY + 9, pageWidth - 14, tableStartY + 9);
        tableStartY += 13;

        // --- Nézet specifikus tartalom ---
        if (state.pdfViewMode === 'detailed') {
            let head = [['Költségnem', 'Menny.', 'Egys.', 'Egységár']];
            if (discount > 0) head[0].push('Kedv. Egységár');
            if (res.hasCostItems) head[0].push('Önköltség');
            head[0].push('Összesen');

            const body = res.breakdown.map(item => {
                const unit = convertPrice(item.unitPriceHuf, c);
                const discUnit = unit * (1 - (discount / 100));
                const totalCost = convertPrice(item.totalCostHuf, c);
                const total = convertPrice(item.totalHuf, c);
                const discTotal = total * (1 - (discount / 100));
                let row = [item.label, item.quantity.toLocaleString('hu-HU'), item.unit, formatCustomCurrency(unit, currencySymbol)];
                if (discount > 0) row.push(formatCustomCurrency(discUnit, currencySymbol));
                if (res.hasCostItems) row.push(item.isCostItem ? formatCustomCurrency(totalCost, currencySymbol) : '-');
                row.push(formatCustomCurrency(discount > 0 ? discTotal : total, currencySymbol));
                return row;
            });

            const colStyles = {};
            head[0].forEach((h, index) => {
                if (h === 'Költségnem') colStyles[index] = { halign: 'left' };
                else if (h === 'Egys.') colStyles[index] = { halign: 'center' };
                else colStyles[index] = { halign: 'right' };
            });

            doc.autoTable({
                head, body, startY: tableStartY,
                headStyles: { fillColor: [45, 55, 72], font: 'Roboto', fontStyle: 'bold' },
                styles: { cellPadding: 2, fontSize: 8, font: 'Roboto', fontStyle: 'normal' },
                columnStyles: colStyles
            });
            tableStartY = doc.autoTable.previous.finalY;
        } else {
            tableStartY += 10;
            doc.setFontSize(11);
            const addSummaryLine = (label, value, isBold = false) => {
                doc.setFont('Roboto', isBold ? 'bold' : 'normal');
                doc.text(label, 14, tableStartY);
                doc.text(value, pageWidth - 14, tableStartY, { align: 'right' });
                tableStartY += 8;
            };
            addSummaryLine('Nettó összeg:', formatCustomCurrency(totalBeforeDiscount, currencySymbol));
            if (discount > 0) {
                addSummaryLine(`Engedmény (${discount}%):`, `- ${formatCustomCurrency(totalBeforeDiscount - finalTotal, currencySymbol)}`);
            }
            doc.setFontSize(12);
            addSummaryLine('Végösszeg:', formatCustomCurrency(finalTotal, currencySymbol), true);
        }

        doc.setFontSize(12);
        doc.setFont('Roboto', 'bold');
        doc.text(`Végösszeg: ${formatCustomCurrency(finalTotal, currencySymbol)}`, pageWidth - 14, tableStartY + 15, { align: 'right' });

        return doc;
    } catch (e) {
        console.error("PDF generálási hiba:", e);
        alert("Hiba történt a PDF generálása közben.");
        return null;
    }
}
