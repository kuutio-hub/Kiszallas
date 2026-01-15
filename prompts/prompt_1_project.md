# Projekt Prompt (Prompt_1) - Költségkalkulátor Alkalmazás

## 1. Projekt Célja és Áttekintése

**Alkalmazás Neve:** Költségkalkulátor
**Cél:** Egy teljes körű, egyoldalas webalkalmazás (SPA) létrehozása, amely képes precízen kiszámítani egy helyszíni szerelési projekt összes költségét. Az alkalmazásnak kezelnie kell a munkaerő, utazás, szállás, eszközök és egyéb tételek költségeit, majd ezek alapján professzionális, nyomtatható ajánlatokat kell generálnia.

## 2. Funkcionális Követelmények

### 2.1. Hitelesítés
- **Beléptetés:** Az alkalmazás egyetlen, jelszóval védett belépési oldallal indul.
- **Jelszó:** A jelszó egy JavaScript konstansban (`ADMIN_PASSWORD`) van rögzítve.

### 2.2. Adatbevitel és Kalkuláció
- **Dinamikus Űrlapok:** A beviteli mezők (pl. létszám, napok száma, távolság) egy `INPUT_CONFIG` JavaScript objektum alapján dinamikusan generálódnak.
- **Valós Idejű Számítás:** Bármely beviteli mező értékének megváltozása azonnal kiváltja az újraszámítási és megjelenítési folyamatot (`calculateAndDisplay()`).
- **Összesítő Panel:** Egy információs panel (`#calculation-summary-header`) valós időben összefoglalja a legfontosabb bemeneti adatokat (pl. feladat leírása, résztvevők, helyszín).

### 2.3. Üzleti Logika (`calculateCosts()` funkció)
A számítási motor logikájának szigorúan meg kell felelnie a `LOGIC.md` dokumentációban leírtaknak. A főbb logikai elemek:
- **Pénznemkezelés:** A belső számítások mindig HUF-ban történnek. Az EUR-ra való átváltás csak a megjelenítéskor, a felhasználó által megadott árfolyamon történik.
- **Személyi Költségek Hierarchiája:** A díjak prioritási sorrendje: Mérnök > Szerelésvezető > Szerelő.
- **Szerelésvezetői Díj Logikája:** Szerelésvezetői díj csak azokon a napokon számolható el, amikor szerelők mérnöki felügyelet nélkül dolgoznak. A rendszernek ezt dinamikusan kell kiszámolnia a szerelői és mérnöki munkanapok különbségéből.
- **Önköltséges Tételek:** Bizonyos tételek (pl. szállás, emelőgép) és a dinamikusan hozzáadott "egyéb költségek" rendelkeznek önköltségi árral és egy továbbértékesítési szorzóval/haszonkulccsal. A kalkulációnak mindkét értéket kezelnie kell.
- **Kedvezmény:** A végösszegből egy százalékos kedvezmény levonásának lehetőségét biztosítani kell.

### 2.4. Árlista Kezelés (CRUD)
- **Perzisztencia:** Az alapértelmezett, "gyári" árlisták a `rates.json`-ből töltődnek be minden indításkor (ez az "igazság forrása"). A felhasználó által létrehozott egyedi árlisták a böngésző `localStorage`-ában tárolódnak, és összefésülésre kerülnek a gyári listákkal.
- **Kezelőfelület:** Egy dedikált modális ablakban (`#rate-modal`) történik.
- **Funkciók:**
    - **Létrehozás (Create):** Új árlista létrehozása üresen vagy egy meglévő sablon alapján.
    - **Olvasás (Read):** Az árlisták egy legördülő menüből választhatók ki a fő felületen és a szerkesztőben is.
    - **Módosítás (Update):** Csak a felhasználó által létrehozott árlisták neve és díjtételei szerkeszthetők.
    - **Törlés (Delete):** A felhasználói árlisták törlése adminisztrátori jelszóval történő megerősítés után. Az utolsó árlista nem törölhető.
- **Védelem:** A `rates.json`-ből származó árlisták alapértelmezetten, feloldhatatlanul védettek (`isDefault: true` jelölővel). Nem szerkeszthetők és nem törölhetők. A felhasználók továbbra is létrehozhatnak egyedi árlistákat, amelyekre a korábbi, kapcsolható "Védett" állapot (`isProtected`) érvényesíthető.

### 2.5. Pénzügyi Funkciók
- **Több Pénznem:** A felhasználónak lehetősége van HUF és EUR között váltani.
- **Árfolyamkezelés:**
    - **Automatikus Lekérés:** Az alkalmazás induláskor lekéri a historikus EUR/HUF árfolyamokat a `frankfurter.app` API-ról.
    - **Gyorsítótárazás:** A lekért árfolyamok a `localStorage`-ban tárolódnak a felesleges hálózati kérések elkerülése érdekében.
    - **Manuális Felülírás:** A felhasználó manuálisan felülírhatja az aktuális árfolyamot.
    - **Grafikon:** Egy modális ablakban interaktív, nagyítható grafikon jeleníti meg az árfolyam-előzményeket (`Chart.js` segítségével).

### 2.6. Nyomtatás és PDF Generálás
- **Részletességi Szintek:** A felhasználó három nyomtatási nézet közül választhat:
    1.  **Egyszerűsített:** Csak a tételek nevei és a nettó végösszeg.
    2.  **Részletes:** Teljes költségbontás (mennyiség, egység, egységár, összesen).
    3.  **Belső használatú:** Mint a részletes, de tartalmazza az önköltségi oszlopot és egy "BELSŐ HASZNÁLATRA" vízjelet.
- **Nyomtatási Előnézet:** A generált dokumentum egy `<iframe>`-ben, egy modális ablakban jelenik meg ellenőrzésre.
- **PDF Létrehozás:** A tényleges PDF generálás a böngésző beépített "Nyomtatás" funkciójával és a "Mentés PDF-ként" opcióval történik, a professzionális minőség érdekében.

### 2.7. Felhasználói Interakciók
- **Dinamikus "Egyéb Költségek":** A felhasználó tetszőleges számú egyedi költségtételt adhat hozzá a kalkulációhoz. Minden tételhez megadható leírás, mennyiség, egység, egységár (önköltség), és beállítható, hogy önköltséges tételként (egyedi haszonkulccsal) vagy normál tételként szerepeljen.
- **Lenyitható Panelek:** Az adatbeviteli szekciók (`<details>` elemek) lenyithatók és becsukhatók a jobb átláthatóság érdekében.
- **Vizuális Visszajelzések:** A mentési műveletek, a kedvezmény alkalmazása vizuális visszajelzést adnak (pl. gomb szövegének ideiglenes megváltozása, "flash" animáció).
- **Adatbevitel Gyorsítása:** Fókusz esetén a numerikus és szöveges beviteli mezők tartalma automatikusan kijelölődik.

## 3. Adatstruktúrák
- **`state` Objektum:** Egy központi JavaScript objektum, amely tárolja az alkalmazás teljes állapotát: `rates` (árlisták), `otherCosts` (egyéb költségek), `exchangeRates` (árfolyamok), `activeRatePackage` (aktív árlista), `calculationResults` (az utolsó számítás eredménye), `activeCurrency` (aktív pénznem).
- **`rates.json` / `state.rates` Struktúra:** Egy tömb, amely objektumokat tartalmaz. Minden objektum egy árlistát reprezentál a következő kulcsokkal: `id`, `name`, `isProtected`, `isDefault`, `rates` (egy objektum, ami a konkrét díjtételeket tartalmazza).