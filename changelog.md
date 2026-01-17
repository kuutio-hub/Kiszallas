# Változási Napló

## v3.2.33 - Díjtételek Kezelőjének Finomhangolása
*Dátum: 2024-06-18*

### Fejlesztések
- **Minden Díjtétel Szerkeszthető:** A `rates.json`-ben minden díjtétel átkerült a felülírható kategóriába, ezzel biztosítva, hogy az összes tétel megjelenik és módosítható a díjtételek szerkesztőjében.
- **Rendezettebb Elrendezés:** A díjtételek szerkesztőjében a címkék és beviteli mezők mostantól rendezetten, két oszlopban jelennek meg a jobb átláthatóságért.
- **Vizuális Elválasztás:** A személyi díjakon belül a szerelői és mérnöki kategóriák egy finom elválasztóval különülnek el.

## v3.2.32 - Kritikus HTML Struktúra Javítás
*Dátum: 2024-06-18*

### Javítások
- **Oldal Elrendezésének Végleges Helyreállítása:** Kijavítva egy kritikus hiba, amely miatt a HTML fájl végére hibásan extra tartalom került, ami az oldal elrendezésének szétesését okozta. A hiba forrása azonosítva és a javítási folyamat megerősítve a jövőbeli előfordulás megelőzése érdekében.

## v3.2.31 - Díjtételek Átláthatóságának Javítása
*Dátum: 2024-06-18*

### Fejlesztések
- **Díjtételek Új Csoportosítása:** A díjtételek szerkesztő felülete a felhasználói visszajelzések alapján új, logikusabb csoportokba (Személyi díjak, Kiszállási díjak, Eszközök és ellátás) lett rendezve, javítva ezzel az áttekinthetőséget.
- **Láthatósági Hiba Javítva:** Az átszervezés során véglegesen javításra került a hiba, ami miatt nem minden díjtétel jelent meg a listában.
- **Felület Tisztítása:** A díjtételek szerkesztőjének címe letisztultabb lett a jobb felhasználói élmény érdekében.

## v3.2.30 - UI és Súgó Bővítés
*Dátum: 2024-06-18*

### Fejlesztések
- **Díjtételek Logikai Csoportosítása:** A "Díjtételek Módosítása" ablakban a tételek mostantól logikus csoportokba (Személyi, Utazási, Eszköz) vannak rendezve a könnyebb átláthatóság érdekében.
- **Részletes Súgó (Wiki):** A Súgó tartalma jelentősen kibővült. Részletesebb leírások és gyakorlati tippek segítik a felhasználókat az összes funkció megértésében és hatékony használatában.

## v3.2.29 - Egyszerűsített Díjtétel-kezelés
*Dátum: 2024-06-18*

### Fejlesztések
- **Egységesített Díjtétel Kezelés:** Megszűnt a "fix" és "módosítható" díjtételek közti megkülönböztetés a felhasználói felületen. Mostantól az "Árlisták" gomb alatt **minden díjtétel szabadon módosítható** az aktuális munkamenet erejéig.
- **Nincs Mentés:** A díjtételek módosításai nem mentődnek el, az oldal újratöltésével visszaállnak az eredeti értékekre. Ez egy egyszerűbb, hibamentesebb működést biztosít.

### Javítások
- **Láthatósági Hiba Javítva:** Az új, egységesített nézetnek köszönhetően a korábbi hiba, ami miatt a fix díjtételek nem jelentek meg a szerkesztőben, véglegesen megoldódott.

## v3.2.28 - Kritikus Adatmegjelenítési Javítások
*Dátum: 2024-06-18*

### Javítások
- **Árlistakezelő Javítása:** Az "Árlisták Kezelése" ablakban a fix (nem módosítható) díjtételek egy hiba miatt nem jelentek meg. A hiba javításra került, mostantól minden tétel korrekten látható.
- **Árfolyam Formázási Hiba:** Kijavítva egy hiba, amely miatt az automatikusan lekért EUR/HUF árfolyam hibásan, extrém magas értékként jelent meg. A formázási logika javításával az árfolyam most már helyesen jelenik meg.

## v3.2.27 - HTML Struktúra Javítása
*Dátum: 2024-06-17*

### Javítások
- **Oldal Elrendezésének Helyreállítása:** Eltávolításra került egy hibásan a HTML fájl végére került, extra szöveges tartalom, amely az oldal szétesését okozta.

... (korábbi verziók)