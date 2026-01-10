# Változási napló

Ez a dokumentum az alkalmazás verzióinak változásait követi nyomon.

## [v1.7.0] - 2024-10-28
### Hozzáadva
- **Dinamikus Betűtípus-betöltés PDF-hez:** A PDF generálás mostantól külső `.ttf` fájlokat tölt be futásidőben. Ez a robusztus módszer véglegesen megoldja a magyar `ő` és `ű` karakterek helyes megjelenítését anélkül, hogy a kódot nagy Base64 stringek terhelnék.

### Módosítva
- **Kód Refaktorálás - Modularizáció:** A teljes JavaScript kód logikai egységek mentén különálló fájlokba (`main.js`, `ui.js`, `calculation.js`, `state.js`, `config.js`, `utils.js`, `pdfGenerator.js`) lett szervezve. Ez jelentősen javítja a kód olvashatóságát, karbantarthatóságát és skálázhatóságát. Az alkalmazás továbbra is 100%-ban GitHub Pages kompatibilis.

## [v1.6.4] - 2024-10-27
### Javítva
- **PDF Generálás Visszaállítása:** A felhasználói visszajelzés alapján a PDF generálás visszatért a stabil, beépített 'helvetica' betűtípus használatához.
- **Base64 Betűtípusok Eltávolítva:** A hibákat okozó, Base64 kódolású egyedi betűtípusokat teljesen eltávolítottuk a kódból, ezzel megszüntetve a `SyntaxError` hibákat és csökkentve a fájlméretet.

## [v1.6.0 - v1.6.3] - 2024-10-26
### Javítva
- Kísérletek a Base64 kódolású betűtípusok által okozott `SyntaxError` hibák javítására. Ezek a verziók instabilak voltak a hibásan beillesztett karakterláncok miatt.

## [v1.5.0] - 2024-10-25
### Hozzáadva
- **Egyedi betűtípus a PDF-ben:** Kísérlet a magyar ékezetes karakterek (ő, ű) tökéletesebb megjelenítésére a generált PDF dokumentumokban egyedi, Base64 formában beágyazott betűtípus segítségével.

## [v1.4.0] - 2024-10-24
### Módosítva
- **UI Finomítás:** A felhasználói felület több ponton frissült egy letisztultabb, professzionálisabb megjelenés érdekében.
- **Seahawks Színséma:** A kalkulációs táblázat és a fő vezérlőelemek egyedi, "Seahawks" inspirálta (sötétkék-zöld) színsémát kaptak a jobb vizuális elkülönülésért.

## [v1.3.0] - 2024-10-23
### Hozzáadva
- **Utazási idő mértékegység váltó:** Az "Utazási idő" mező mellett megjelent egy kattintható `óra`/`perc` felirat, amivel a felhasználó válthat a két mértékegység között, az érték pedig automatikusan átszámolódik.

## [v1.2.0] - 2024-10-22
### Hozzáadva
- **Automatikus szekció-nyitás:** A beviteli mezőkre kattintva a szülő `details` szekció automatikusan lenyílik, ha csukva volt, javítva a felhasználói élményt.
- **Szekció bezáró gomb:** Minden szekció kapott egy "↑" gombot a gyors bezáráshoz.

## [v1.1.0] - 2024-10-21
### Hozzáadva
- **"Egyéb költségek" szekció:** Új, dinamikusan bővíthető lista került az alkalmazásba, ahol a felhasználók tetszőleges számú, egyedi költségtételt (leírás, mennyiség, egységár) adhatnak a kalkulációhoz.

## [v1.0.0] - 2024-10-20
### Első kiadás
- **Alapfunkciók:** Teljesen működőképes kalkulátor a szerelési és kiszállási költségek számítására.
- **Adatkezelés:** Árlisták (`rates.json`) és árfolyamok (`exchange_rates.json` / `localStorage`) kezelése.
- **UI:** Modern, reszponzív, sötét/világos módot támogató felhasználói felület.
- **PDF Generálás:** Egyszerűsített és részletes PDF exportálási lehetőség.
- **Dinamikus elemek:** Árlista-kezelő és árfolyam-grafikon modális ablakok.