import { state } from './state.js';
import { loadData, updateAndFetchExchangeRates, D } from './utils.js';
import {
    renderInputs,
    calculateAndDisplay,
    updateRatePackagesUI,
    openRateEditor,
    openChartModal,
    setupDynamicList
} from './ui.js';
import { previewPdf } from './pdfGenerator.js';

// Globális változók a PDF dokumentum tárolására
let pdfDoc = null;

// Az alkalmazás inicializálását végző fő függvény.
async function init() {
    // Téma beállítása a localStorage alapján.
    if (localStorage.getItem('theme') === 'light') document.body.classList.add('light-mode');
    
    // Lábléc és dátum beállítása.
    D('copyright-footer').innerHTML = `&copy; ${new Date().getFullYear()} Költségkalkulátor. Minden jog fenntartva. | v1.8.0`;
    D('calculation_date').value = new Date().toISOString().split('T')[0];
    
    // Beviteli mezők generálása.
    renderInputs();

    // Adatok betöltése.
    state.rates = await loadData('rates', 'rates.json');
    state.exchangeRates = await updateAndFetchExchangeRates();

    // UI frissítése a betöltött adatokkal.
    const defaultRatePackage = state.rates.find(p => p.name === "2024") || state.rates[0];
    updateRatePackagesUI(defaultRatePackage ? defaultRatePackage.id : null);
    const dates = Object.keys(state.exchangeRates).sort((a, b) => new Date(b) - new Date(a));
    if (dates.length > 0) D('exchange-rate-manual').value = state.exchangeRates[dates[0]].HUF.toFixed(2);

    // Első kalkuláció futtatása.
    calculateAndDisplay();

    // --- ESEMÉNYKEZELŐK BEÁLLÍTÁSA ---

    D('theme-switcher').onclick = () => {
        document.body.classList.toggle('light-mode');
        localStorage.setItem('theme', document.body.classList.contains('light-mode') ? 'light' : 'dark');
    };
    D('manage-rates-btn').onclick = openRateEditor;
    D('show-chart-btn').onclick = openChartModal;
    
    D('generate-pdf-btn').onclick = () => {
        D('pdf-preview-modal').style.display = 'block';
        pdfDoc = previewPdf();
        if (pdfDoc) {
            D('pdf-preview-iframe').src = pdfDoc.output('datauristring');
        }
    };

    D('pdf-view-toggle').onchange = (e) => {
        state.pdfViewMode = e.target.checked ? 'detailed' : 'simple';
        pdfDoc = previewPdf();
        if (pdfDoc) {
            D('pdf-preview-iframe').src = pdfDoc.output('datauristring');
        }
    };
    
    D('pdf-download-btn').onclick = () => {
        if (pdfDoc) {
            const i = getInputs();
            const f = `Kalkulacio_${i.offer_number || 'ajanlat'}_${i.project_name || 'projekt'}.pdf`;
            pdfDoc.save(f.replace(/[\\s/\\?%*:|"<>]/g, '_'));
        }
    };

    document.querySelectorAll('.modal-close-btn').forEach(b => b.onclick = (e) => e.target.closest('.modal').style.display = 'none');

    // Bemeneti mezők változásának figyelése és automatikus újraszámolás.
    document.querySelector('.inputs-container').oninput = (e) => {
        if (!e.target.closest('#other-costs-list')) calculateAndDisplay();
    };
    D('rate-package-select').onchange = (e) => {
        state.activeRatePackage = state.rates.find(r => r.id === e.target.value);
        calculateAndDisplay();
    };
    D('currency-select').onchange = (e) => {
        state.activeCurrency = e.target.value;
        calculateAndDisplay();
    };

    // UX javító funkciók
    document.querySelector('.inputs-container').addEventListener('focusin', (e) => {
        if (e.target.matches('input, select')) {
            const parentDetails = e.target.closest('details');
            if (parentDetails && !parentDetails.open) {
                document.querySelectorAll('.inputs-container details').forEach(d => d.open = false);
                parentDetails.open = true;
            }
        }
    });
    document.querySelectorAll('.close-details-btn').forEach(btn => btn.onclick = (e) => e.target.closest('details').open = false);
    document.querySelector('.inputs-container').addEventListener('click', e => {
        if (e.target.classList.contains('travel-unit-toggle')) {
            const input = D('utazas_ido_ora');
            const currentUnit = input.dataset.unit || 'óra';
            const isHour = currentUnit === 'óra';
            const val = parseFloat(input.value) || 0;
            input.dataset.unit = isHour ? 'perc' : 'óra';
            input.value = isHour ? (val * 60).toFixed(0) : (val / 60).toFixed(2);
            e.target.innerHTML = isHour ? 'perc' : 'óra';
            calculateAndDisplay();
        }
    });

    // Dinamikus lista inicializálása
    setupDynamicList('other-costs-list', 'otherCosts', 'add-other-cost-btn', [
        { id: 'description', label: 'Tétel neve' },
        { id: 'quantity', label: 'Mennyiség', type: 'number' },
        { id: 'amount', label: 'Egységár', type: 'currency' },
    ]);
    D('save-other-costs-btn').onclick = () => {
        calculateAndDisplay();
        const btn = D('save-other-costs-btn');
        btn.textContent = 'Mentve!';
        btn.style.backgroundColor = 'var(--success-primary)';
        setTimeout(() => {
            btn.textContent = 'Mentés';
            btn.style.backgroundColor = 'var(--accent-primary)';
        }, 2000);
    };
}

// Az alkalmazás indítása, miután a DOM teljesen betöltődött.
document.addEventListener('DOMContentLoaded', init);