# Változási napló

Ez a dokumentum az alkalmazás verzióinak változásait követi nyomon.

## [v1.9.0] - 2024-10-29
### Módosítva
- **PDF Motor Cseréje `pdfmake`-re:** A teljes PDF generáló modult lecseréltük a `jspdf`-ről a `pdfmake` könyvtárra. Ez a váltás garantálja a tökéletes magyar ékezetkezelést (`ő`, `ű`) és kiküszöböli a helyi környezetben (file protokollon) futtatáskor fellépő hibákat.
- **Base64 Betűtípusok Eltávolítva:** A `utils.js`-ből minden felesleges, Base64 kódolású betűtípust eltávolítottunk. Az alkalmazás mostantól a `pdfmake` saját, CDN-ről betöltött `vfs_fonts.js` rendszerét használja.

### Javítva
- **PDF Összesítő Táblázat Javítása:** A részletes PDF nézetben javítottuk az összesítő sorok `colSpan` logikáját, megelőzve a generálási hibákat.

### Eltávolítva
- **Sablonkezelő Funkció:** A követelmények változása miatt a sablonkezelésre vonatkozó minden elemet (beleértve a `templates.json` fájlt) eltávolítottunk a projektből.

## [v1.8.0] - 2024-10-28
### Javítva
- **PDF Generálás Stabilitása:** A PDF generálás visszaállt egy stabil, beágyazott Base64 betűtípus használatára, hogy minden környezetben (beleértve a helyi `file://` protokollt) megbízhatóan működjön, ezzel javítva a "Nyomtatási kép" és "Árlisták kezelése" gombok elérhetőségét.

## [v1.7.0] - 2024-10-28
### Hozzáadva
- **Dinamikus Betűtípus-betöltés PDF-hez:** A PDF generálás külső `.ttf` fájlokat tölt be futásidőben. (Ez a verzió instabilnak bizonyult helyi futtatáskor).

### Módosítva
- **Kód Refaktorálás - Modularizáció:** A teljes JavaScript kód logikai egységek mentén különálló fájlokba (`main.js`, `ui.js`, `calculation.js`, `state.js`, `config.js`, `utils.js`, `pdfGenerator.js`) lett szervezve.

## [v1.6.4] - 2024-10-27
### Javítva
- **PDF Generálás Visszaállítása:** Visszatérés a `jspdf` beépített 'helvetica' betűtípusához a stabilitás érdekében.

## [v1.0.0] - 2024-10-20
### Első kiadás
- **Alapfunkciók:** Teljesen működőképes kalkulátor a szerelési és kiszállási költségek számítására.
- **Adatkezelés:** Árlisták (`rates.json`) és árfolyamok (`exchange_rates.json` / `localStorage`) kezelése.
- **UI:** Modern, reszponzív, sötét/világos módot támogató felhasználói felület.
- **PDF Generálás:** Egyszerűsített és részletes PDF exportálási lehetőség.
- **Dinamikus elemek:** Árlista-kezelő és árfolyam-grafikon modális ablakok.