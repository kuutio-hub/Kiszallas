# Projekt Prompt (Prompt_1) - Költségkalkulátor Alkalmazás

## 1. Projekt Célja és Áttekintése

**Alkalmazás Neve:** Költségkalkulátor
**Cél:** Egy teljes körű, egyoldalas webalkalmazás (SPA) létrehozása, amely képes precízen kiszámítani egy helyszíni szerelési projekt összes költségét. Az alkalmazásnak kezelnie kell a munkaerő, utazás, szállás, eszközök és egyéb tételek költségeit, majd ezek alapján professzionális, nyomtatható ajánlatokat kell generálnia.

## 2. Funkcionális Követelmények

### 2.1. Hitelesítés
- **Beléptetés:** Az alkalmazás egyetlen, jelszóval védett belépési oldallal indul.
- **Jelszó:** A jelszó egy JavaScript konstansban (`ADMIN_PASSWORD`) van rögzítve.

### 2.2. Adatbevitel és Kalkuláció
- **Dinamikus Űrlapok:** A beviteli mezők (pl. létszám, napok száma, távolság) egy külső `input_config.json` fájl alapján dinamikusan generálódnak.
- **Valós Idejű Számítás:** Bármely beviteli mező (beleértve az "Egyéb költségek" tételeit is) értékének megváltozása azonnal, késleltetés és külön mentési művelet nélkül kiváltja az újraszámítási és megjelenítési folyamatot (`calculateAndDisplay()`).
- **Összesítő Panel:** Egy információs panel (`#calculation-summary-header`) valós időben összefoglalja a legfontosabb bemeneti adatokat (pl. feladat leírása, résztvevők, helyszín).

### 2.3. Üzleti Logika (`calculateCosts()` funkció)
A számítási motor logikájának szigorúan meg kell felelnie a `LOGIC.md` dokumentációban leírtaknak. A főbb logikai elemek:
- **Pénznemkezelés:** A belső számítások mindig HUF-ban történnek. Az EUR-ra való átváltás csak a megjelenítéskor, a felhasználó által megadott árfolyamon történik.
- **Személyi Költségek Hierarchiája:** A díjak prioritási sorrendje: Mérnök > Szerelésvezető > Szerelő.
- **Szerelésvezetői Díj Logikája:** Szerelésvezetői díj csak azokon a napokon számolható el, amikor szerelők mérnöki felügyelet nélkül dolgoznak. A rendszernek ezt dinamikusan kell kiszámolnia a szerelői és mérnöki munkanapok különbségéből.
- **Önköltséges Tételek:** Bizonyos tételek (pl. szállás, emelőgép) és a dinamikusan hozzáadott "egyéb költségek" rendelkeznek önköltségi árral és egy továbbértékesítési szorzóval/haszonkulccsal. A kalkulációnak mindkét értéket kezelnie kell.
- **Kedvezmény:** A végösszegből egy százalékos kedvezmény levonásának lehetőségét biztosítani kell.

### 2.4. Árlista Kezelés (Munkamenet-alapú Módosítás)
- **Adatforrás:** Az alkalmazás a rendelkezésre álló árlistákat kizárólag a `rates.json` fájlból tölti be az induláskor. Ez a fájl jelenti az "igazság egyetlen forrását".
- **Kezelőfelület:** Egy dedikált modális ablakban (`#rate-modal`) történik.
- **Funkció:**
    - **Ideiglenes Felülírás:** A felhasználó a modális ablakban kiválaszthat egyet a betöltött árlisták közül, és annak bármely díjtételét **ideiglenesen felülírhatja**.
- **Perzisztencia:** A módosítások azonnal érvénybe lépnek a kalkulációban, de **kizárólag az aktuális munkamenet (böngésző fül) élettartamára vonatkoznak**. Az oldal újratöltésekor vagy bezárásakor a módosítások elvesznek, és a rendszer újra a `rates.json` fájlban lévő eredeti értékeket tölti be. Az alkalmazás nem hoz létre, nem töröl és nem ment tartósan árlistákat a `localStorage`-ba.

### 2.5. Pénzügyi Funkciók
- **Több Pénznem:** A felhasználónak lehetősége van HUF and EUR között váltani.
- **Árfolyamkezelés:**
    - **Automatikus Lekérés:** Az alkalmazás induláskor lekéri a historikus EUR/HUF árfolyamokat a `frankfurter.app` API-ról, hogy a legfrissebb elérhető árfolyamot javasolja.
    - **Gyorsítótárazás:** A lekért árfolyamok a `localStorage`-ban tárolódnak a felesleges hálózati kérések elkerülése érdekében.
    - **Manuális Felülírás:** A felhasználó bármikor manuálisan felülírhatja az aktuális árfolyamot.

### 2.6. Nyomtatás és PDF Generálás
- **Részletességi Szintek:** A felhasználó három nyomtatási nézet közül választhat:
    1.  **Egyszerűsített:** Csak a tételek nevei és a nettó végösszeg.
    2.  **Részletes:** Teljes költségbontás (mennyiség, egység, egységár, összesen).
    3.  **Belső használatú:** Mint a részletes, de tartalmazza az önköltségi oszlopot és egy "BELSŐ HASZNÁLATRA" vízjelet.
- **Nyomtatási Előnézet:** A generált dokumentum egy `<iframe>`-ben, egy modális ablakban jelenik meg ellenőrzésre.
- **PDF Létrehozás:** A tényleges PDF generálás a böngésző beépített "Nyomtatás" funkciójával és a "Mentés PDF-ként" opcióval történik, a professzionális minőség érdekében.
- **Egységes Lábléc:** Minden nyomtatott dokumentumnak (kalkuláció és árlista) azonos stílusú, verziószámot és dátumot tartalmazó lábléccel kell rendelkeznie.

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