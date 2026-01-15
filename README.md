# Költségkalkulátor v3.0.0

## 1. Projekt Bemutatása

A **Költségkalkulátor** egy teljes körű, modern, egyoldalas webalkalmazás (SPA), amelyet helyszíni szerelési projektek költségeinek precíz és gyors kiszámítására terveztek. Az alkalmazás lehetővé teszi a munkaerővel, utazással, szállással, eszközbérléssel és egyéb tételekkel kapcsolatos költségek részletes modellezését, majd professzionális, nyomtatható ajánlatok generálását.

Az alkalmazás nulláról épült fel, kizárólag statikus webtechnológiák (HTML, CSS, JavaScript) felhasználásával, biztosítva a maximális hordozhatóságot és a build-folyamat nélküli, egyszerű telepíthetőséget.

## 2. Főbb Funkciók

- **Jelszóval Védett Hozzáférés:** Az alkalmazás egy egyszerű, beégetett jelszóval védett a jogosulatlan hozzáférés megakadályozására.
- **Reszponzív Dizájn és Témák:** A felület teljes mértékben reszponzív, és két vizuális téma között váltogathat a felhasználó: egy alapértelmezett "Industrial Seahawks" sötét mód és egy letisztult, professzionális világos mód.
- **Valós Idejű Kalkuláció:** Minden beviteli mező módosításakor az eredménymező azonnal, valós időben frissül, azonnali visszajelzést adva a felhasználónak.
- **Árlista Kezelés (CRUD):**
    - **Létrehozás:** Új árlisták hozhatók létre üresen vagy egy meglévő sablon alapján.
    - **Szerkesztés:** Meglévő árlisták összes díjtétele szerkeszthető egy dedikált felugró ablakban.
    - **Védelem:** Az alapértelmezett, gyári árlisták nem szerkeszthetők. A felhasználó által létrehozott listák "védett" állapotba kapcsolhatók, ami megakadályozza a véletlen módosítást. A védelem feloldása admin jelszóhoz kötött.
    - **Törlés:** Az árlisták jelszavas megerősítés után törölhetők, megelőzve az adatvesztést.
- **Pénzügyi Funkciók:**
    - **Több Pénznem:** Támogatja a HUF és EUR alapú számítást.
    - **Dinamikus Árfolyamkezelés:** Automatikusan lekéri a historikus EUR/HUF árfolyamokat egy külső API-ról, és lehetővé teszi a manuális felülírást.
    - **Árfolyam Grafikon:** Interaktív, nagyítható grafikonon jeleníti meg az árfolyam-előzményeket.
- **Professzionális Nyomtatás:**
    - **Több Részletességi Szint:** Három különböző nyomtatási nézet generálható: egyszerűsített (csak végösszeg), részletes (teljes költségbontás) és belső használatú (önköltségi árakkal).
    - **Nyomtatási Előnézet:** A dokumentum egy beágyazott `iframe`-ben jelenik meg a nyomtatás előtt, lehetővé téve az ellenőrzést.
    - **PDF Generálás:** A böngésző "Mentés PDF-ként" funkciójával kiváló minőségű, professzionális PDF dokumentumok hozhatók létre.
- **Felhasználóbarát Felület (UX):**
    - Lenyitható/becsukható adatbeviteli panelek a jobb átláthatóságért.
    - Dinamikusan bővíthető "Egyéb költségek" lista.
    - Vizuális visszajelzések (fókusz-effektek, mentés animációk) a gördülékeny használatért.

## 3. Technológiai Háttér

- **Nyelv:** HTML5, CSS3, ES6+ JavaScript (module).
- **Keretrendszer/UI Könyvtár:** Nincs. Az alkalmazás "Vanilla JS" alapokon nyugszik.
- **Külső Függőségek (CDN-ről):**
    - `Chart.js` & `chartjs-adapter-date-fns`: Az árfolyam grafikon megjelenítéséhez.
    - `DejaVuSans.ttf`: Egységes és megbízható betűtípus a generált nyomtatási nézetekben, biztosítva a platformfüggetlen megjelenést.
- **Adattárolás:**
    - **Árlisták:** A `rates.json` fájlból származó alapértelmezett árlisták minden indításkor szinkronizálódnak, biztosítva a naprakészséget, míg a felhasználó által létrehozott egyedi listák és a módosítások a böngésző `localStorage`-ában perzisztensen tárolódnak.
    - **Árfolyamadatok:** A `frankfurter.app` API-ról letöltött adatok a `localStorage`-ban kerülnek gyorsítótárazásra a felesleges hálózati kérések elkerülése érdekében.

## 4. Fájlstruktúra

Az alkalmazás a következő fájlokból áll:

- `index.html`: A fő alkalmazásfájl, amely tartalmazza a teljes HTML struktúrát, a CSS stíluslapokat (`<style>`) és a JavaScript logikát (`<script type="module">`).
- `rates.json`: Az alapértelmezett, induló árlistákat tartalmazó JSON adatfájl.
- `changelog.md`: Részletes verziótörténet, amely dokumentálja az összes fejlesztést és módosítást.
- `LOGIC.md`: A számítási motor komplex üzleti logikájának részletes leírása, példákkal illusztrálva.
- `checkpoint.txt`: A fejlesztési mérföldköveket jelölő szöveges fájl, amely egy-egy stabil verziót rögzít.
- `prompt.md`: Egy rendkívül részletes "mester prompt", amely alapján az alkalmazás egy AI kódgenerátorral teljes mértékben újragenerálható.
- `README.md`: Ez a dokumentum.

## 5. Használatbavétel

Az alkalmazás futtatásához nincs szükség telepítésre vagy build-folyamatra.

1.  Klónozd a repository-t, vagy töltsd le a fájlokat egy tetszőleges mappába.
2.  Nyisd meg az `index.html` fájlt egy modern webböngészőben (pl. Chrome, Firefox, Edge).
3.  Add meg a belépési jelszót: `Kalkulator_2026`
4.  Az alkalmazás betöltődik és használatra kész.