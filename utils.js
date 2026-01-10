// Rövidítés a document.getElementById-ra.
export const D = (id) => document.getElementById(id);

// Pénznem formázása (pl. 1000 -> "1.000.- Ft").
export const formatCustomCurrency = (val, currency = 'Ft') => {
    const num = parseFloat(val) || 0;
    const str = Math.round(num).toString();
    const formatted = str.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return `${formatted}.- ${currency}`;
};

// Formázott pénznem string visszaalakítása számmá.
export const parseCurrency = (v) => parseFloat(String(v).replace(/[^0-9,-]/g, '').replace(',', '.')) || 0;

// Ár átváltása az aktív pénznemre.
export const convertPrice = (huf, curr) => curr === 'EUR' ? huf / (parseFloat(D('exchange-rate-manual').value) || 1) : huf;

// Általános adatbetöltő függvény: először a localStorage-ből próbál tölteni, ha ott nincs, akkor fetch-eli a megadott fájlból.
export const loadData = async (key, file) => {
    try {
        const data = localStorage.getItem(key);
        if (data) return JSON.parse(data);
        const response = await fetch(file);
        const jsonData = await response.json();
        localStorage.setItem(key, JSON.stringify(jsonData));
        return jsonData;
    } catch (e) {
        console.error(`Hiba: ${key} betöltése`, e);
        return [];
    }
};

// Árfolyamok frissítése a Frankfurter API-ról. Csak a hiányzó napokat tölti le.
export const updateAndFetchExchangeRates = async () => {
    let rates = JSON.parse(localStorage.getItem('exchangeRates')) || {};
    const dates = Object.keys(rates);
    const lastDate = dates.length > 0 ? dates.sort().pop() : '2000-01-01';
    const today = new Date().toISOString().split('T')[0];
    if (lastDate >= today) return rates;

    try {
        const startDate = new Date(lastDate);
        startDate.setDate(startDate.getDate() + 1);
        const response = await fetch(`https://api.frankfurter.app/${startDate.toISOString().split('T')[0]}..${today}?to=HUF`);
        const newRatesData = await response.json();
        rates = { ...rates, ...newRatesData.rates };
        localStorage.setItem('exchangeRates', JSON.stringify(rates));
        return rates;
    } catch (e) {
        console.error("Hiba árfolyam frissítésekor:", e);
    }
    return rates;
};
