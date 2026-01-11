
# Mester Prompt: Költségkalkulátor Webalkalmazás Újragenerálása

## 1. Projekt Áttekintés

**Feladat:** Hozz létre egy teljes, reszponzív, modern, ipari jellegű webalkalmazást "Költségkalkulátor" néven. Az alkalmazás célja egy projekt helyszíni szerelési költségeinek kiszámítása, beleértve a munkaerőt (mérnökök, szerelésvezetők, szerelők), utazást, szállást, eszközbérlést és egyéb egyedi díjakat.

**Főbb Jellemzők:**
- **Jelszóval védett belépés:** Az alkalmazás egy egyszerű, beégetett jelszóval védett.
- **Dinamikus kalkuláció:** A felhasználói bevitel alapján valós időben frissülő költségbontás.
- **Árlista Kezelés:** Több árlista (csomag) létrehozása, szerkesztése, védelme és törlése.
- **Pénznem és Árfolyam Kezelés:** HUF és EUR közötti váltás, MNB árfolyamok lekérdezése és grafikonos megjelenítése.
- **Nyomtatási Funkció:** Részletes, egyszerűsített és belső használatú PDF ajánlatok generálása nyomtatási előnézettel.
- **Modern UI/UX:** Reszponzív, kétmódú (sötét/világos) "Industrial Seahawks" dizájn téma.

## 2. Technikai Előírások és Megkötések

- **Technológiai Stack:** Kizárólag HTML, CSS és JavaScript használható.
- **Nincs Build Lépés:** Tilos TypeScript, TSX, JSX, Vite, Webpack vagy bármilyen más build-elést igénylő eszköz használata. A kódnak közvetlenül, statikus fájlkiszolgálóról (pl. GitHub Pages) kell futnia.
- **Fájlszerkezet:** Az alkalmazás egyetlen `index.html` fájlból áll, amely a teljes CSS és JavaScript kódot is tartalmazza. A külső adatokat `.json` fájlok biztosítják.
- **Függőségek:** Kizárólag CDN-ről betöltött könyvtárak engedélyezettek:
    - **Chart.js:** Grafikonok megjelenítéséhez.
    - **chartjs-adapter-date-fns:** Dátumkezelés a Chart.js számára.
    - **DejaVuSans Font:** A PDF-kompatibilis, egységes karakterkészlet érdekében.

## 3. Létrehozandó Fájlok Struktúrája

Hozd létre a következő fájlokat a megadott tartalommal:

1.  `index.html`: A fő alkalmazásfájl.
2.  `rates.json`: Az alapértelmezett árlistákat tartalmazó adatfájl.
3.  `changelog.md`: A verziótörténetet leíró dokumentáció.
4.  `LOGIC.md`: A számítási motor üzleti logikáját részletező dokumentáció.
5.  `checkpoint.txt`: A fejlesztési mérföldkövet rögzítő szöveges fájl.
6.  `metadata.json`: Az alkalmazás metaadatait tartalmazó konfigurációs fájl.
7.  `prompt.md`: Ez a fájl.

## 4. Vizuális Dizájn és Felhasználói Élmény (UI/UX)

### 4.1. Téma: "Industrial Seahawks"

- **Alapkoncepció:** Modern, letisztult, ipari jellegű dizájn, amelyet a Seattle Seahawks sportcsapat színei ihlettek. Professzionális és funkcionális megjelenés.
- **Két Mód:**
    - **Sötét Mód (Alapértelmezett):** Sötét szürke és tengerészkék háttér, élénk zöld ("action green") kiemelésekkel.
    - **Világos Mód:** Professzionális, világos szürke és fehér háttér, klasszikus kék kiemelésekkel.

### 4.2. Színpaletta (CSS Változók)

| Változó Név         | Sötét Mód Szín      | Világos Mód Szín    | Leírás                                   |
| ------------------- | ------------------- | ------------------- | ---------------------------------------- |
| `--bg-primary`      | `#1a202c`           | `#f8f9fa`           | Fő háttérszín                            |
| `--bg-secondary`    | `#2d3748`           | `#ffffff`           | Panelek, kártyák, modálok háttérszíne     |
| `--bg-tertiary`     | `#4a5568`           | `#e9ecef`           | Fejlécek, címkék, gombok alap háttérszíne |
| `--text-primary`    | `#edf2f7`           | `#212529`           | Fő szövegszín                            |
| `--text-secondary`  | `#a0aec0`           | `#6c757d`           | Másodlagos szöveg (címkék, feliratok)    |
| `--text-on-accent`  | `#000000`           | `#ffffff`           | Kiemelt gombokon lévő szöveg             |
| `--border-color`    | `#4a5568`           | `#dee2e6`           | Szegélyek színe                          |
| `--accent-primary`  | `#69BE28` (zöld)   | `#0d6efd` (kék)    | Elsődleges kiemelő szín (fókusz, aktív)  |
| `--accent-secondary`| `mix(#69BE28, black)` | `mix(#0d6efd, black)` | Kiemelt gombok hover állapota           |
| `--danger-primary`  | `#9B2C2C`           | `#dc3545`           | Törlés, figyelmeztetés színe             |
| `--success-primary` | `#69BE28` (zöld)   | `#198754`           | Mentés, sikeres művelet színe            |
| `--glow-color`      | `mix(#69BE28, transparent)` | `mix(#0d6efd, transparent)` | Fókuszált elemek ragyogásának színe    |

### 4.3. Elrendezés és Reszponzivitás

- **Fő Struktúra:** Egy `1800px` maximális szélességű konténerben helyezkedik el.
- **Fejléc:** Flexbox alapú, reszponzív (`flex-wrap`), amely tartalmazza az árlista- és pénznemválasztót, árfolyam beviteli mezőt és a vezérlőgombokat.
- **Fő Rács (`main-grid`):**
    - **Mobil (1024px alatt):** Egysávos elrendezés, a beviteli panelek a kalkulációs táblázat felett helyezkednek el.
    - **Asztali (1024px felett):** Kétsávos rács (`1fr 1.5fr`), a beviteli panelek bal oldalon, a kalkulációs táblázat a jobb oldalon.
- **Kártyák (`details.card`):** A beviteli szekciók `<details>` elemek, amelyek lenyithatók/becsukhatók. Modern, letisztult stílusúak, árnyékkal. A `summary` elem tartalmazza a címet és egy animált (forgó) nyíl ikont.

### 4.4. Komponensek Stílusa

- **Beviteli Mezők (`input`, `select`):** Egységes magasság, padding, lekerekített sarkok. Fókusz állapotban élénk `box-shadow` ragyogást (`--glow-color`) kapnak. A pénznem beviteli mezők jobbra igazítottak.
- **Gombok (`.btn`):** Lekerekített sarkok, árnyék. `hover` állapotban enyhén megemelkednek (`transform: translateY(-2px)`) és ragyognak. Külön stílus a `.btn-danger` és `.btn-success` gomboknak.
- **Modális Ablakok (`.modal`):** Teljes képernyős, áttetsző fekete háttér felett középre igazított, lekerekített tartalomdoboz. Animációval (`fade-in`) jelennek meg.
- **Táblázatok:** Letisztult, szegélyezett táblázatok. A fejléc és lábléc sötétebb háttérszínt kap. Világos módban a páratlan sorok enyhén színezettek.

## 5. Részletes Funkcionális Logika

### 5.1. Inicializálás és Hitelesítés

1.  **Betöltés:** A `#landing-page` jelenik meg, amely egy jelszóbekérő űrlapot tartalmaz.
2.  **Jelszó Ellenőrzés:** A `password-form` elküldésekor a beírt jelszó összehasonlításra kerül egy beégetett konstanssal (`ADMIN_PASSWORD`).
3.  **Sikeres Belépés:** Helyes jelszó esetén a `#landing-page` elrejtőzik, a `#app-container` megjelenik, és lefut az `initializeApp()` funkció.
4.  **Sikertelen Belépés:** Hibaüzenet (`alert`), a jelszómező kiürül.

### 5.2. `initializeApp()` Folyamat

1.  **Adatok Betöltése:**
    - Az `rates.json` fájl betöltése `fetch` segítségével. Ha a `localStorage`-ban már létezik 'rates' kulcs, azt használja. Az eredmény a `state.rates`-be kerül.
    - Az MNB árfolyamadatok lekérdezése a `frankfurter.app` API-ról, a `localStorage`-ban tárolt utolsó dátumtól napjainkig. Az eredmény a `state.exchangeRates`-be kerül.
2.  **UI Felépítése:**
    - A `renderInputs()` legenerálja az összes beviteli mezőt a `INPUT_CONFIG` objektum alapján.
    - Az árlista választó (`#rate-package-select`) feltöltése a `state.rates` alapján.
    - Az árfolyam mező (`#exchange-rate-manual`) feltöltése a legfrissebb EUR/HUF árfolyammal.
3.  **Eseménykezelők Regisztrálása:**
    - Az `input` esemény az `#app-container`-en belül bárhol meghívja a `calculateAndDisplay()` funkciót.
    - `click` eseménykezelők a gombokra (`#reset-btn`, `#manage-rates-btn`, `#print-btn`, stb.).
    - `change` eseménykezelők a választókra (`#rate-package-select`, `#currency-select`).
4.  **Első Számítás:** A `calculateAndDisplay()` lefut az alapértelmezett adatokkal.

### 5.3. A Számítási Motor (`calculateCosts()`)

**Ez a logika a `LOGIC.md` fájlban leírtaknak PONTOSAN kell, hogy megfeleljen!**

1.  **Bemeneti Adatok Gyűjtése:** Az összes űrlapmező értékének beolvasása.
2.  **Költségsorok Generálása:** Egy `breakdown` tömb feltöltése a következő logikával:
    - **Mérnöki Óradíjak:** Külön számolva a hétköznapi és hétvégi órák.
    - **Szerelésvezetői/Szerelői Óradíjak (Kulcsfontosságú logika):**
        - A rendszer kiszámítja a "felügyelet nélküli" szerelői napokat (ahol szerelő dolgozik, de mérnök nem).
        - Ezen napok óraszáma a szerelésvezetői óradíjjal szorzódik.
        - A fennmaradó szerelői órák a normál szerelői óradíjjal szorzódnak.
        - A számítás külön történik hétköznapokra és hétvégékre.
    - **Utazási Költségek:**
        - **Kiszállási díj:** `utazási idő * 2 * kiszállások * létszám * díj`.
        - **Km díj:** `távolság * 2 * (kiszállások * járművek) * díj`.
    - **Ellátási Költségek:**
        - **Kiküldetési díj:** Csak külföldi helyszín esetén, `napok * létszám * díj`.
        - **Szállás:** `éjszakák * létszám * (díj * szorzó)`. Az eredeti díj az önköltség.
    - **Eszköz Költségek:** `mennyiség * napok * (díj * szorzó)`.
    - **Egyéb Költségek:** A dinamikusan hozzáadott tételek egyszerűen hozzáadódnak.
3.  **Visszatérési Érték:** Egy objektum, amely tartalmazza a `breakdown` tömböt, a teljes eladási árat (`totalHuf`), a teljes önköltséget (`totalCostHuf`), és egy jelzőt (`hasCostItems`).

### 5.4. Megjelenítés (`calculateAndDisplay()`)

1.  Meghívja a `calculateCosts()`-t.
2.  Kitörli a `breakdown-head`, `breakdown-body`, `breakdown-foot` tartalmát.
3.  Felépíti a táblázatot a `breakdown` tömb alapján:
    - Az `Önköltség` oszlop csak akkor jelenik meg, ha van ilyen tétel.
    - Minden árat átvált az aktív pénznemre (`HUF` vagy `EUR`).
    - Az árak formázása a `formatCustomCurrency()` függvénnyel történik (ezres tagolás, pénznem jelölés).
4.  Felépíti a táblázat láblécét:
    - Önköltség összesen (ha releváns).
    - Végösszeg (kedvezmény nélkül).
    - Kedvezmény levonása (ha van).
    - Kedvezményes végösszeg (ha van).
5.  Frissíti a `#calculation-summary-header`-t a főbb adatokkal (feladat, létszám, helyszín).

### 5.5. Árlista Kezelő Modál

- **Megnyitás:** Betölti az összes árlistát a `#rate-editor-select`-be.
- **Kiválasztás:** A `populateRateForm()` kitölti az űrlapot a kiválasztott árlista adataival.
- **Védelem:** A "Védett" kapcsoló letiltja/engedélyezi a mezőket. A feloldáshoz admin jelszó kell.
- **Mentés:** Admin jelszóval megerősített felülírás. "Mentés másként" opció is elérhető.
- **Törlés:** Admin jelszóval megerősített törlés. Az utolsó árlista nem törölhető.
- **Új:** Új árlista létrehozása üresen vagy egy meglévő sablon alapján.

### 5.6. Nyomtatás

1.  A "Nyomtatás" gomb megnyitja a `#print-preview-modal`-t.
2.  A kiválasztott részletesség (`simple`, `detailed`, `internal`) alapján a `getPrintableHtml()` legenerál egy teljes HTML dokumentumot.
3.  A generált HTML tartalmazza a nyomtatáshoz optimalizált CSS-t is (DejaVuSans font, világos háttér, oldalszámozás, stb.).
4.  A HTML bekerül egy `<iframe>`-be az előnézethez.
5.  Az előnézeti ablak "Nyomtatás" gombja az `iframe.contentWindow.print()` parancsot hívja meg, ami felhozza a böngésző nyomtatási dialógusát (ahol a "Mentés PDF-ként" opció is elérhető).

## 6. Adatfájlok Tartalma

### 6.1. `rates.json`

Hozd létre a fájlt a megadott, pontos tartalommal. Ez két alapértelmezett árlistát tartalmaz ("2024", "2025"), mindegyik egy `rates` objektummal, amelyben a díjtételek kulcs-érték párokként szerepelnek.

### 6.2. `changelog.md`

Hozd létre a fájlt a megadott tartalommal, amely a verziótörténetet írja le Markdown formátumban.

### 6.3. `LOGIC.md`

Hozd létre a fájlt a megadott tartalommal, amely részletesen, példákkal illusztrálva magyarázza a számítási motort.

### 6.4. `checkpoint.txt`

Hozd létre a fájlt a megadott tartalommal, amely rögzíti a v2.22.2-t, mint stabil kiindulási alapot.

### 6.5. `metadata.json`

Hozd létre a fájlt a megadott tartalommal, amely az alkalmazás nevét és leírását tartalmazza.

## 7. Végső Utasítások

- Az egész alkalmazásnak egyetlen `index.html` fájlban kell lennie, a `<style>` és `<script type="module">` tagekbe ágyazva.
- A kód legyen tiszta, olvasható, jól szervezett és kommentezett, ahol szükséges.
- Ügyelj a reszponzivitásra, a cross-browser kompatibilitásra és az akadálymentesítés alapelveire.
- A kimenetnek a megadott XML formátumban kell lennie, amely tartalmazza az összes létrehozandó/módosítandó fájlt.
