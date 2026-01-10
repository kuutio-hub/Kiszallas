import { state } from './state.js';
import { INPUT_CONFIG, RATE_KEY_LABELS } from './config.js';
import { D, formatCustomCurrency, parseCurrency, convertPrice } from './utils.js';
import { calculateCosts } from './calculation.js';

let chartInstance = null;

// Dinamikusan legenerálja a beviteli mezőket az INPUT_CONFIG alapján.
export function renderInputs() {
    Object.entries(INPUT_CONFIG).forEach(([group, configs]) => {
        const container = D(`${group}-inputs`);
        if (container) {
            container.innerHTML = '';
            configs.forEach(config => {
                const groupEl = document.createElement('div');
                groupEl.className = 'form-group';
                groupEl.innerHTML = `<label for="${config.id}">${config.label}</label>`;
                let inputEl;
                if (config.type === 'select') {
                    inputEl = document.createElement('select');
                    config.options.forEach(opt => inputEl.add(new Option(opt.text, opt.value)));
                } else {
                    inputEl = document.createElement('input');
                    inputEl.type = 'number';
                }
                inputEl.id = config.id;
                if (config.unit) inputEl.dataset.unit = config.unit;
                groupEl.appendChild(inputEl);
                container.appendChild(groupEl);
            });
        }
    });
}

// Összegyűjti az összes beviteli mező aktuális értékét egy objektumba.
export function getInputs() {
    const inputs = {};
    document.querySelectorAll('.inputs-container input, .inputs-container select').forEach(el => {
        if (el.id) {
            inputs[el.id] = (el.type === 'number') ? parseFloat(el.value) || 0 : el.value;
        }
    });
    return inputs;
}

// Kiszámolja és a képernyőn megjeleníti a költségeket.
export function calculateAndDisplay() {
    state.calculationResults = calculateCosts();
    const { breakdown, totalHuf, totalCostHuf, hasCostItems } = state.calculationResults;
    const tbody = D('breakdown-body'), thead = D('breakdown-head'), tfoot = D('breakdown-foot');
    const currency = state.activeCurrency;
    const currencySymbol = currency === 'EUR' ? '€' : 'Ft';
    const discount = parseFloat(D('discount-input').value) || 0;
    const discountMultiplier = 1 - (discount / 100);

    tbody.innerHTML = thead.innerHTML = tfoot.innerHTML = '';

    let headHtml = `<tr><th>Költségnem</th><th>Menny.</th><th>Egys.</th><th>Egységár</th>`;
    if (discount > 0) headHtml += `<th>Kedv. Egységár</th>`;
    if (hasCostItems) headHtml += `<th>Önköltség</th>`;
    headHtml += `<th>Összesen</th></tr>`;
    thead.innerHTML = headHtml;

    breakdown.forEach(item => {
        const row = tbody.insertRow();
        const unitPrice = convertPrice(item.unitPriceHuf, currency);
        const discountedUnitPrice = unitPrice * discountMultiplier;
        const total = convertPrice(item.totalHuf, currency);
        const discountedTotal = total * discountMultiplier;

        let rowHtml = `<td>${item.label}</td><td style="text-align:right;">${item.quantity.toLocaleString('hu-HU')}</td><td style="text-align:center;">${item.unit}</td><td style="text-align:right;">${formatCustomCurrency(unitPrice, currencySymbol)}</td>`;
        if (discount > 0) {
            rowHtml += `<td style="text-align:right;">${formatCustomCurrency(discountedUnitPrice, currencySymbol)}</td>`;
        }
        if (hasCostItems) {
            const totalCost = convertPrice(item.totalCostHuf, currency);
            rowHtml += `<td style="text-align:right;">${item.isCostItem ? formatCustomCurrency(totalCost, currencySymbol) : '-'}</td>`;
        }
        rowHtml += `<td style="text-align:right;">${formatCustomCurrency(discount > 0 ? discountedTotal : total, currencySymbol)}</td>`;
        row.innerHTML = rowHtml;
    });

    const totalFinal = convertPrice(totalHuf, currency);
    const totalCostFinal = convertPrice(totalCostHuf, currency);
    let totalCols = 3 + 1 + (discount > 0 ? 1 : 0) + (hasCostItems ? 1 : 0) + 1;
    const labelColspan = totalCols - 1;

    let footHtml = ``;
    if (hasCostItems) {
        footHtml += `<tr class="cost-total-row" style="border-top: 2px solid var(--border-color);"><td colspan="${labelColspan}" style="text-align:right; font-weight:bold;">Önköltség összesen (${currency})</td><td style="text-align:right; font-weight:bold;">${formatCustomCurrency(totalCostFinal, currencySymbol)}</td></tr>`;
    }
    footHtml += `<tr class="total-row" style="border-top: 1px solid var(--seahawks-green);"><td colspan="${labelColspan}" style="text-align:right; font-weight:bold;">Végösszeg (${currency})</td><td style="text-align:right; font-weight:bold;">${formatCustomCurrency(totalFinal, currencySymbol)}</td></tr>`;
    const discountedTotal = totalFinal * discountMultiplier;
    if (discount > 0) {
        footHtml += `<tr class="discount-row" style="color: var(--success-primary);"><td colspan="${labelColspan}" style="text-align:right; font-weight:bold;">Kedvezményes végösszeg (${discount}%)</td><td style="text-align:right; font-weight:bold;">${formatCustomCurrency(discountedTotal, currencySymbol)}</td></tr>`;
    }
    tfoot.innerHTML = footHtml;
}

// --- MODÁLIS ABLAKOK KEZELÉSE ---

export function openRateEditor() {
    const body = D('rate-modal-body');
    body.innerHTML = `<div style="display:flex;justify-content:space-between;align-items:flex-end;gap:1rem;margin-bottom:1.5rem"><div class="form-group" style="flex-grow:1"><label>Szerkesztendő árlista</label><select id="rate-editor-select"></select></div><button id="new-rate-btn" class="btn">Új</button><button id="delete-rate-btn" class="btn" style="background-color:var(--danger-primary);">Törlés</button></div><form id="rate-editor-form"></form><div style="text-align:right;margin-top:1.5rem;"><button id="save-rate-btn" class="btn" style="background-color:var(--success-primary);color:var(--text-on-accent);">Mentés</button></div>`;
    const select = D('rate-editor-select');
    state.rates.forEach(p => select.add(new Option(p.name, p.id)));
    select.value = state.activeRatePackage.id;
    populateRateForm();
    select.onchange = populateRateForm;
    D('new-rate-btn').onclick = handleNewRatePackage;
    D('delete-rate-btn').onclick = handleDeleteRatePackage;
    D('save-rate-btn').onclick = handleSaveRatePackage;
    D('rate-modal').style.display = 'block';
}

export function populateRateForm() {
    const selectedId = D('rate-editor-select').value;
    const pkg = state.rates.find(r => r.id === selectedId);
    if (!pkg) return;
    const form = D('rate-editor-form');
    form.innerHTML = `<div class="form-group" style="grid-column:1/-1;"><label for="rate-package-name">Árlista neve</label><input type="text" id="rate-package-name" value="${pkg.name}"></div>`;
    const groups = { 'Személyi díjak': ['szerelo_hetkoznap_oradij', 'szerelo_hetvege_oradij', 'szerelesvezeto_hetkoznap_oradij', 'szerelesvezeto_hetvege_oradij', 'mernok_hetkoznap_oradij', 'mernok_hetvege_oradij'], 'Kiszállás és Utazás': ['kiszallasi_dij_szerelo', 'kiszallasi_dij_mernok', 'km_dij'], 'Ellátás': ['kikuldeles_dij_szerelo', 'kikuldeles_dij_mernok', 'szallas_dij', 'szallas_szorzo'], 'Eszközök': ['emelogep_napidij', 'emelogep_szallitas_dij', 'emelogep_szorzo'] };
    Object.entries(groups).forEach(([title, keys]) => {
        let html = `<fieldset><legend>${title}</legend><div class="form-grid">`;
        keys.forEach(key => {
            if (RATE_KEY_LABELS[key]) {
                const isMultiplier = key.includes('_szorzo');
                if (isMultiplier) {
                    const val = ((pkg.rates[key] || 1) - 1) * 100;
                    html += `<div class="form-group"><label for="${key}">${RATE_KEY_LABELS[key]}</label><div class="percent-input-wrapper"><input type="number" step="1" id="${key}" value="${val.toFixed(0)}"><span>%</span></div></div>`;
                } else {
                    const val = pkg.rates[key] || 0;
                    html += `<div class="form-group"><label for="${key}">${RATE_KEY_LABELS[key]}</label><input type="text" id="${key}" class="currency-input" value="${formatCustomCurrency(val)}"></div>`;
                }
            }
        });
        html += '</div></fieldset>';
        form.innerHTML += html;
    });
    form.querySelectorAll('.currency-input').forEach(input => {
        input.onfocus = () => input.select();
        input.onblur = () => { input.value = formatCustomCurrency(parseCurrency(input.value)); };
    });
}

export function handleSaveRatePackage() {
    const selectedId = D('rate-editor-select').value;
    const packageName = D('rate-package-name').value;
    const pkg = state.rates.find(r => r.id === selectedId);
    if (pkg) {
        pkg.name = packageName;
        Object.keys(RATE_KEY_LABELS).forEach(key => {
            const input = D(key);
            if (input) {
                if (key.includes('_szorzo')) {
                    pkg.rates[key] = (parseFloat(input.value) || 0) / 100 + 1;
                } else {
                    pkg.rates[key] = parseCurrency(input.value);
                }
            }
        });
        localStorage.setItem('rates', JSON.stringify(state.rates));
        updateRatePackagesUI(selectedId);
        state.activeRatePackage = state.rates.find(r => r.id === selectedId);
        calculateAndDisplay();
        D('rate-modal').style.display = 'none';
        alert(`"${packageName}" árlista sikeresen mentve!`);
    }
}

export function handleNewRatePackage() {
    const name = prompt("Új árlista neve:", new Date().getFullYear() + 1);
    if (name && name.trim()) {
        const newId = `csomag-${Date.now()}`;
        const newPackage = { id: newId, name, rates: { ...state.activeRatePackage.rates } };
        state.rates.push(newPackage);
        localStorage.setItem('rates', JSON.stringify(state.rates));
        updateRatePackagesUI(newId);
        openRateEditor();
    }
}

export function handleDeleteRatePackage() {
    if (state.rates.length <= 1) return alert("Az utolsó árlista nem törölhető.");
    const id = D('rate-editor-select').value;
    if (confirm(`Biztosan törli a "${state.rates.find(r => r.id === id).name}" árlistát?`)) {
        state.rates = state.rates.filter(r => r.id !== id);
        localStorage.setItem('rates', JSON.stringify(state.rates));
        D('rate-modal').style.display = 'none';
        updateRatePackagesUI();
        calculateAndDisplay();
    }
}

export function updateRatePackagesUI(selectedId = null) {
    const select = D('rate-package-select');
    const currentVal = selectedId || (select ? select.value : null) || (state.rates.length > 0 ? state.rates[0].id : null);
    select.innerHTML = '';
    state.rates.forEach(p => select.add(new Option(p.name, p.id)));
    if (currentVal) select.value = currentVal;
    if (!select.value && state.rates.length > 0) select.value = state.rates[0].id;
    state.activeRatePackage = state.rates.find(r => r.id === select.value);
}

export function openChartModal() {
    D('chart-modal').style.display = 'block';
    const filters = D('chart-filters');
    filters.innerHTML = `<input type="date" id="chart-start-date" class="form-group" title="Kezdődátum"> <input type="date" id="chart-end-date" class="form-group" title="Végdátum"> <input type="date" id="chart-single-date" class="form-group" title="Konkrét nap">`;
    const today = new Date();
    const oneYearAgo = new Date(new Date().setFullYear(today.getFullYear() - 1));
    D('chart-start-date').value = oneYearAgo.toISOString().split('T')[0];
    D('chart-end-date').value = today.toISOString().split('T')[0];

    const drawChart = () => {
        const allDates = Object.keys(state.exchangeRates).sort();
        const startDate = D('chart-start-date').value;
        const endDate = D('chart-end-date').value;
        const filteredDates = allDates.filter(dt => dt >= startDate && dt <= endDate);
        const ctx = D('exchange-rate-chart').getContext('2d');
        const labels = filteredDates.map(dt => new Date(dt));
        const values = filteredDates.map(dt => state.exchangeRates[dt].HUF);
        if (chartInstance) chartInstance.destroy();
        chartInstance = new Chart(ctx, {
            type: 'line',
            data: { datasets: [{ label: 'EUR/HUF', data: values.map((val, idx) => ({ x: labels[idx], y: val })), borderColor: 'rgba(99,179,237,1)', borderWidth: 2, pointRadius: 0, tension: 0.1 }] },
            options: {
                onClick: (e) => {
                    const points = chartInstance.getElementsAtEventForMode(e, 'nearest', { intersect: true }, true);
                    if (points.length) {
                        const rate = chartInstance.data.datasets[0].data[points[0].index].y;
                        D('exchange-rate-manual').value = rate.toFixed(2);
                        calculateAndDisplay();
                        D('chart-modal').style.display = 'none';
                    }
                },
                interaction: { mode: 'index', intersect: false },
                scales: { x: { type: 'time', time: { unit: 'month' }, ticks: { color: document.body.classList.contains('light-mode') ? '#1a202c' : '#edf2f7' } }, y: { ticks: { color: document.body.classList.contains('light-mode') ? '#1a202c' : '#edf2f7' } } },
                plugins: { tooltip: { enabled: true }, legend: { display: false } }
            }
        });
    };
    D('chart-start-date').onchange = drawChart;
    D('chart-end-date').onchange = drawChart;
    D('chart-single-date').onchange = (e) => {
        const rate = state.exchangeRates[e.target.value]?.HUF;
        if (rate) {
            D('exchange-rate-manual').value = rate.toFixed(2);
            calculateAndDisplay();
            D('chart-modal').style.display = 'none';
        }
    };
    drawChart();
}

// --- DINAMIKUS LISTA KEZELÉSE ---
export function setupDynamicList(listId, stateKey, addButtonId, itemFields) {
    const renderList = () => {
        const container = D(listId);
        container.innerHTML = '';
        state[stateKey].forEach((item, index) => {
            const itemEl = document.createElement('div');
            itemEl.className = 'dynamic-item';
            let fieldsHtml = '';
            itemFields.forEach(field => {
                if (field.type === 'currency') {
                    fieldsHtml += `<input type="text" data-index="${index}" class="currency-input" data-field="${field.id}" placeholder="${field.label}" value="${formatCustomCurrency(item[field.id] || 0)}">`;
                } else if (field.type === 'number') {
                    fieldsHtml += `<input type="number" data-index="${index}" data-field="${field.id}" placeholder="${field.label}" value="${item[field.id] || ''}">`;
                } else {
                    fieldsHtml += `<input type="text" data-index="${index}" data-field="${field.id}" placeholder="${field.label}" value="${item[field.id] || ''}">`;
                }
            });
            itemEl.innerHTML = `${fieldsHtml}<button data-index="${index}" class="btn item-delete" style="background:var(--danger-primary);padding:0.4rem;flex-grow:0;">×</button>`;
            container.appendChild(itemEl);
        });
    };
    D(addButtonId).onclick = () => { state[stateKey].push({}); renderList(); };
    D(listId).addEventListener('input', e => {
        const i = e.target.dataset.index;
        if (i !== undefined) {
            const field = e.target.dataset.field;
            const val = e.target.classList.contains('currency-input') ? parseCurrency(e.target.value) : e.target.value;
            state[stateKey][i][field] = e.target.type === 'number' ? parseFloat(val) || 0 : val;
        }
    });
    D(listId).addEventListener('focusout', e => { if (e.target.classList.contains('currency-input')) { e.target.value = formatCustomCurrency(parseCurrency(e.target.value)); } });
    D(listId).addEventListener('click', e => {
        if (e.target.classList.contains('item-delete')) {
            state[stateKey].splice(e.target.dataset.index, 1);
            renderList();
            calculateAndDisplay();
        }
    });
    renderList();
};
