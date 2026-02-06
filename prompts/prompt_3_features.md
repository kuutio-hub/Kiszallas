
# Funkcionális Prompt (Prompt_3) - Képességek és Működés

## 1. Core Funkciók

- **Valós Idejű Kalkuláció:** Az alkalmazás lelke a `calculateAndDisplay()` funkció. Ezt minden olyan eseménynek (pl. `input`, `change`) meg kell hívnia, amely a kalkuláció eredményét befolyásolhatja. A számításnak azonnalinak kell lennie, a felhasználói felületnek késleltetés nélkül kell frissülnie.
- **Árlista Kezelés:** A felhasználónak lehetősége van váltani a betöltött árlisták (`rates.json`-ből) között. Az aktív árlista díjtételeit ideiglenesen felülírhatja az "Árlisták" gombbal elérhető modális ablakban. Ezek a változtatások nem perzisztensek, az oldal újratöltésével elvesznek.
- **Pénznemváltás:** A HUF és EUR közötti váltás az "Árfolyam" mezőben megadott érték alapján történik. Az árfolyamot az alkalmazás induláskor megpróbálja automatikusan lekérni a `frankfurter.app` API-ról, de a felhasználó bármikor manuálisan felülírhatja.

## 2. "Egyéb Költségek" Modul

Ez egy kiemelt fontosságú, dinamikus modul.
- **Hozzáadás/Törlés:** A felhasználó tetszőleges számú új költségtételt adhat hozzá, vagy törölhet meglévőket.
- **Mentési Állapot:** Egy tétel csak akkor számít bele a végleges kalkulációba, ha "mentett" állapotban van. Egy új tétel létrehozásakor, vagy egy meglévő módosításakor a tétel "nem mentett" (`isSaved: false`) állapotba kerül. A mentést a sorvégi zöld pipa ikonnal lehet végrehajtani. A "nem mentett" állapotot egy sárga oldalsáv jelzi vizuálisan.
- **Önköltség Logika:** Ha egy tétel "Önköltséges"-re van állítva, a megadott ár (`amount`) önköltségnek minősül, és a rendszer a `multiplier` mezőben megadott százalékos haszonkulcsot adja hozzá az eladási ár képzéséhez.

## 3. Export és Nyomtatás

- **Nyomtatási Nézetek:** A nyomtatási kép és a jobb oldali táblázat részletessége három szinten állítható:
    - **Egyszerű:** Csak a fő kategóriák és végösszegek. Ügyfélnek szánt ajánlatokhoz ideális.
    - **Részletes:** Minden tétel, mennyiséggel, egységárral.
    - **Teljes:** A részletes nézet, kiegészítve az önköltségi oszloppal. Ez belső használatra készült, és a nyomtatási képen egy "BELSŐ HASZNÁLATRA" vízjel jelenik meg.
- **XLS Export:** Az "Export XLS" gomb egy dinamikus, **három munkalapos** `.xlsx` fájlt generál:
    1.  **"Beviteli Adatok":** Egy űrlapszerű lap az összes bemeneti paraméterrel.
    2.  **"Kalkuláció":** A fő, nyomtatványszerű nézet, amely **Excel függvényekkel** hivatkozik a másik két lapra.
    3.  **"Adatok":** Tartalmazza a díjtételeket, szorzókat, és egy cellát az árlista (évszám) kiválasztásához. A "Kalkuláció" lap `VLOOKUP` függvénnyel keresi ki innen a megfelelő díjakat.
    - A cél, hogy a letöltött Excel fájl egy önálló, interaktív kalkulátorként működjön.

## 4. Kiegészítő Funkciók

- **Témaváltó:** Világos és sötét mód közötti váltás, ami a `<body>` elemen egy `light-mode` osztály kapcsolgatásával történik. Az állapotot a `localStorage`-ban kell tárolni.
- **Súgó:** Egy modális ablakban megjelenő, a program használatát segítő rövid leírás.
- **Visszaállítás:** Egy gomb, ami az összes beviteli mezőt törli, és újratölti az oldalt.
- **Utazási Idő Egységváltó:** Az "Utazási idő" címkéjében az "óra" és "perc" szavakra kattintva a beviteli mező értéke és a mértékegység dinamikusan átváltódik. A `state` objektumban kell tárolni az aktuális mértékegységet.