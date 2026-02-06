
# Projekt Prompt (Prompt_1) - Költségkalkulátor Alkalmazás

## 1. Projekt Célja és Áttekintése

**Alkalmazás Neve:** Költségkalkulátor
**Cél:** Egy teljes körű, egyoldalas webalkalmazás (SPA) létrehozása, amely képes precízen kiszámítani egy helyszíni szerelési projekt összes költségét. Az alkalmazásnak kezelnie kell a munkaerő, utazás, szállás, eszközök és egyéb tételek költségeit, majd ezek alapján professzionális, nyomtatható ajánlatokat és részletes XLS exportokat kell generálnia.

## 2. Funkcionális Követelmények

### 2.1. Hitelesítés
- **Beléptetés:** Az alkalmazás egyetlen, jelszóval védett belépési oldallal indul.
- **Jelszó:** A jelszó egy JavaScript konstansban (`ADMIN_PASSWORD`) van rögzítve.

### 2.2. Adatbevitel és Kalkuláció
- **Dinamikus Űrlapok:** A beviteli mezők (pl. létszám, napok száma, távolság) egy külső `input_config.json` fájl alapján dinamikusan generálódnak.
- **Valós Idejű Számítás:** Bármely beviteli mező (beleértve az "Egyéb költségek" tételeit is) értékének megváltozása azonnal, késleltetés és külön mentési művelet nélkül kiváltja az újraszámítási és megjelenítési folyamatot (`calculateAndDisplay()`).
- **Összesítő Panel:** Egy információs panel (`#calculation-summary-header`) valós időben összefoglalja a legfontosabb bemeneti adatokat (pl. feladat leírása, résztveöt.
- **XLS Exportálás:**
    - **Könyvtár:** A funkció a `SheetJS (xlsx.js)` könyvtárat használja, CDN-ről betöltve.
    - **Struktúra:** Az exportált fájl egy **egyetlen, részletes munkalapot** tartalmazó (`.xls`) dokumentum, amely egy logikus, fentről lefelé haladó sorrendben épül fel:
        1.  Projekt fejléc adatok.
        2.  Globális beállítások (árlista, árfolyam, kedvezmény).
        3.  Az összes alkalmazott díjtétel, beleértve a szorzókat/haszonkulcsokat is.
        4.  Az összes beviteli paraméter.
        5.  A teljes, részletes kalkulációs táblázat.
        6.  A végső összesítések.
    - **Dinamikus Fájlnév:** A letöltött fájl neve az ajánlatszámból és a dátumból generálódik.

### 2.7. Felhasználói Interakciók
- **Dinamikus "Egyéb Költségek":** A felhasználó tetszőleges számú egyedi költségtételt adhat hozzá a kalkulációhoz. Minden tételhez megadható leírás, mennyiség, egység, egységár (önköltség), és beállítható, hogy önköltséges tételként (egyedi haszonkulccsal) vagy normál tételként szerepeljen. **A bevitt adatok azonnal, gombnyomás nélkül frissítik a kalkulációt.**
- **Lenyitható Panelek:** Az adatbeviteli szekciók (`<details>` elemek) lenyithatók és becsukhatók a jobb átláthatóság érdekében.
- **Vizuális Visszajelzések:** A mentési műveletek, a kedvezmény alkalmazása vizuális visszajelzést adnak (pl. gomb szövegének ideiglenes megváltozása, "flash" animáció).
- **Adatbevitel Gyorsítása:** Fókusz esetén a numerikus és szöveges beviteli mezők tartalma automatikusan kijelölődik.

## 3. Adatstruktúrák
- **`state` Objektum:** Egy központi JavaScript objektum, amely tárolja az alkalmazás teljes állapotát: `rates` (árlisták), `otherCosts` (egyéb költségek), `exchangeRates` (árfolyamok), `activeRatePackage` (aktív árlista), `calculationResults` (az utolsó számítás eredménye), `activeCurrency` (aktív pénznem), `config` (a betöltött konfigurációs fájlok, pl. `INPUT_CONFIG`, `RATE_KEY_LABELS`).
- **Konfigurációs Fájlok:**
    - `rates.json`: Az alapértelmezett árlistákat tartalmazza.
    - `input_config.json`: Az űrlapok felépítését definiálja.
    - `rate_key_labels.json`: Az árlista díjtételeinek megjelenítendő neveit tartalmazza.
