// Az alkalmazás központi állapotát tároló objektum.
// Tartalmazza a betöltött adatokat (árlisták, árfolyamok), a felhasználói beállításokat és a számítások eredményét.
export let state = {
    rates: [],               // Az összes elérhető árlista (rates.json-ból)
    otherCosts: [],          // A felhasználó által hozzáadott egyéb költségek listája
    exchangeRates: {},       // A letöltött EUR/HUF árfolyamok (dátum-érték párok)
    activeRatePackage: null, // Az aktuálisan kiválasztott árlista objektum
    calculationResults: null,// Az utolsó kalkuláció teljes eredményobjektuma
    activeCurrency: 'HUF',   // Az aktív pénznem (HUF vagy EUR)
    pdfViewMode: 'detailed'  // A PDF nézet típusa ('simple' vagy 'detailed')
};
