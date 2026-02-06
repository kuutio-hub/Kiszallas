
# Változási Napló

## v4.0.0 - Új Generációs Felület: "Document View"
*Dátum: 2024-06-20*

- **ARCHITEKTURÁLIS VÁLTOZÁS:** Az alkalmazás teljes felhasználói felülete és belső renderelési logikája újra lett írva. A korábbi, panelekre és különálló eredménytáblára épülő modellt egyetlen, nagy, dokumentum-szerű nézet váltotta fel.
- **Új Funkció - Integrált Adatbevitel:** Minden beviteli mező (pl. létszám, napok száma, távolság) mostantól közvetlenül a központi kalkulációs táblázatban található, a számított eredmények mellett. Ez rendkívül gyors és intuitív adatkezelést tesz lehetővé.
- **Új Funkció - Valós Idejű EUR Oszlop:** A kalkulációs táblázat egy új, "Összesen (EUR)" oszloppal bővült, amely a megadott árfolyam alapján azonnal mutatja az egyes tételek és a végösszeg értékét euróban.
- **Megszűnt Elemek:** A lenyitható `<details>` panelek és a különálló jobb oldali eredménytáblázat megszüntetésre került az új, egységes nézet javára.
- **UI Fejlesztés - Rögzített Vezérlősáv:** A globális beállítások (árlista, pénznem, kedvezmény) és a főbb műveletek (nyomtatás, export, stb.) egy képernyő tetején rögzített, mindig elérhető sávba kerültek a jobb használhatóság érdekében.

## v3.3.44 - XLS Export Funkció
*Dátum: 2024-06-20*

- **Új Funkció:** Az alkalmazás mostantól képes a teljes kalkulációt egy részletes, többlapos XLS fájlba exportálni.
- **UI Bővítés:** Egy új "Export XLS" gomb került az akciósávba a nyomtatási vezérlők mellé.
- **Részletes Export:** A generált XLS fájl több munkalapot tartalmaz:
    - `Összesítés`: Vezetői összefoglaló a projekt főbb adataival és a végeredménnyel.
    - `Részletes Kalkuláció`: A képernyőn látható kalkulációs táblázat pontos mása.
    - `Bemeneti Adatok`: Az összes felhasznált bemeneti paraméter és díjtétel listája.
    - `Egyéb Költségek`: A manuálisan hozzáadott tételek részletes listája.
- **Dokumentáció:** A Súgó (Használati Útmutató) frissült az új exportálási funkció leírásával.

... (korábbi verziók)
