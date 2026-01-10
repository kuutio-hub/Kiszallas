# Változási Napló

## v2.0.5 - PDF Pontosítások
*Dátum: 2024-05-22*

### Fejlesztések
- **Részletesebb PDF adatösszesítő:** A PDF fejlécében található adatösszesítő mostantól pontosan, szerepkörökre bontva (pl. szerelő, mérnök, mérnök szerelésvezetőként) jeleníti meg a projektben résztvevő személyeket és a rájuk vonatkozó napok számát.
- **Egyértelműbb címkék:** A kalkulációban és a PDF-ben is pontosításra kerültek a címkék, hogy egyértelmű legyen, ha egy mérnök látja el a szerelésvezetői feladatokat.

## v2.0.4 - Bővített PDF export és UX finomítások
*Dátum: 2024-05-22*

### Új funkciók és fejlesztések
- **Egyszerűsített PDF export:** Új "Egyszerűsített PDF" gomb került hozzáadásra, amely egy olyan változatot generál, ahol a tételek egységárai és soronkénti összegei rejtve vannak, de a végösszeg látható marad. A meglévő gomb "Részletes PDF"-re lett átnevezve.
- **Dinamikus adatösszesítő PDF-ben:** Mindkét PDF típus fejlécébe bekerült egy automatikusan generált összesítő a főbb adatokról (létszám, napok száma), ami gyors áttekintést nyújt a projektről.
- **Önköltség kimutatása a PDF-ben:** A részletes PDF-ben egy új "Önköltség" oszlop és egy "Önköltség összesen" sor jelenik meg, amennyiben a kalkuláció tartalmaz ilyen tételeket.
- **PDF végösszeg egyértelműsítése:** A PDF dokumentumok láblécében a "Végösszeg" felirat "Nettó végösszeg"-re lett cserélve a pontosabb terminológia érdekében.

## v2.0.3 - Logikai finomítások és UX fejlesztések
*Dátum: 2024-05-22*

### Új funkciók és fejlesztések
- **PDF Bővítés:** A generált PDF dokumentum mostantól tartalmazza a "Feladat leírása" mezőt.
- **"Mentés" Gomb:** Az "Egyéb költségek" szekció kapott egy "Mentés" gombot vizuális visszajelzéssel.
- **Árfolyam címke:** Az árfolyam mező mellett "Ft/EUR" címke jelzi a mértékegységet.

### Javítások
- **Kiszállási díj logika:** A kiszállási díj számítási logikája felülvizsgálatra került és helyesnek bizonyult.
- **Projekt tisztítása:** A felesleges `index.tsx` és `templates.json` fájlok véglegesen eltávolításra kerültek.

## v2.0.2 - Hibajavítások
*Dátum: 2024-05-22*

### Javítások
- **Copyright év javítása:** A láblécben a hibás copyright év javítva lett 2024-re.

## v2.0.1 - Verziókövetés bevezetése
*Dátum: 2024-05-22*

### Új funkciók
- **Verziószám a láblécben:** Megjelenik az aktuális verziószám.
- **Változási Napló:** Létrehozásra került a `changelog.md` fájl.

## v2.0.0 - A PDF Forradalom: Stabil és ékezetbiztos generálás
*Dátum: 2024-05-22*

### Főbb változások
- **Új PDF generáló motor:** `html2pdf.js`-re váltás.
- **Teljeskörű Unicode (ékezet) támogatás.**
- **Professzionális PDF sablon.**
- **Egyszerűsített letöltés.**

## v1.x - Alapverzió
*Dátum: 2024 előtt*

### Jellemzők
- A kalkulátor alapvető logikájának implementálása.
- Árlisták kezelése.
- Dinamikus beviteli mezők.
- Kísérleti, kép-alapú PDF generálás.