# Változási Napló

## v2.0.2 - Hibajavítások
*Dátum: 2024-05-22*

### Javítások
- **Copyright év javítása:** A láblécben a copyright év hibásan jelent meg bizonyos esetekben. A hiba javítva, mostantól a helyes, 2024-es évszám látható.
- **Projekt tisztítása:** Eltávolításra kerültek a felesleges, üres `index.tsx` és `templates.json` fájlok.

## v2.0.1 - Verziókövetés bevezetése
*Dátum: 2024-05-22*

### Új funkciók
- **Verziószám a láblécben:** Az alkalmazás láblécében mostantól megjelenik az aktuális verziószám, hogy a felhasználók mindig tisztában legyenek a használt verzióval.
- **Változási Napló:** Létrehozásra került ez a `changelog.md` fájl, amely dokumentálja a főbb változásokat, új funkciókat és hibajavításokat a verziók között.

## v2.0.0 - A PDF Forradalom: Stabil és ékezetbiztos generálás
*Dátum: 2024-05-22*

### Főbb változások
- **Új PDF generáló motor:** A korábbi, `html2canvas`-re épülő, kép-alapú PDF generálás teljes cseréje `html2pdf.js`-re. Az új motor közvetlenül HTML-ből dolgozik, ami megbízhatóbb és professzionálisabb kimenetet eredményez.
- **Teljeskörű Unicode (ékezet) támogatás:** A `DejaVuSans` betűtípus beágyazásával minden magyar ékezetes karakter (pl. á, é, í, ó, ö, ő, ú, ü, ű) hibátlanul jelenik meg a generált PDF dokumentumokban.
- **Professzionális PDF sablon:** Új, letisztult és strukturált PDF sablon került bevezetésre, amely tartalmazza a szükséges metaadatokat (ajánlatszám, projekt, megrendelő), egy tételes táblázatot, végösszeg-számítást (kedvezménnyel együtt), valamint egy aláírási blokkot.
- **Egyszerűsített letöltés:** A PDF előnézeti ablak (modal) eltávolításra került. A generálás mostantól egy gombnyomásra, közvetlenül a böngészőben indítja el a PDF letöltését.

### Eltávolított funkciók
- A régi, megbízhatatlan, kép-alapú PDF generáló funkció és a hozzá tartozó előnézeti ablak.

## v1.x - Alapverzió
*Dátum: 2024 előtt*

### Jellemzők
- A kalkulátor alapvető logikájának implementálása.
- Árlisták kezelése (`rates.json` és a szerkesztő felület).
- Dinamikus beviteli mezők a különböző költségtípusokhoz.
- Kísérleti PDF generálás `jsPDF` és `html2canvas` segítségével, amelynek ismert problémái voltak az ékezetes karakterek kezelésével.