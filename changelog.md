# Változási Napló

## v2.0.3 - Logikai finomítások és UX fejlesztések
*Dátum: 2024-05-22*

### Új funkciók és fejlesztések
- **PDF Bővítés:** A generált PDF dokumentum mostantól tartalmazza a "Feladat leírása" mezőt, így teljesebb körű ajánlatot biztosít.
- **"Mentés" Gomb:** Az "Egyéb költségek" szekció kapott egy "Mentés" gombot, ami vizuális visszajelzést ad a felhasználónak a változtatások rögzítéséről.
- **Árfolyam címke:** Az árfolyam beviteli mező mellett mostantól egy "Ft/EUR" címke jelzi egyértelműen a mértékegységet.

### Javítások
- **Kiszállási díj logika:** A kiszállási díj számítási logikája felülvizsgálatra került és helyesnek bizonyult.
- **Projekt tisztítása:** A felesleges `index.tsx` és `templates.json` fájlok véglegesen eltávolításra kerültek.

## v2.0.2 - Hibajavítások
*Dátum: 2024-05-22*

### Javítások
- **Copyright év javítása:** A láblécben a copyright év hibásan jelent meg bizonyos esetekben. A hiba javítva, mostantól a helyes, 2024-es évszám látható.

## v2.0.1 - Verziókövetés bevezetése
*Dátum: 2024-05-22*

### Új funkciók
- **Verziószám a láblécben:** Az alkalmazás láblécében mostantól megjelenik az aktuális verziószám.
- **Változási Napló:** Létrehozásra került a `changelog.md` fájl a változások követésére.

## v2.0.0 - A PDF Forradalom: Stabil és ékezetbiztos generálás
*Dátum: 2024-05-22*

### Főbb változások
- **Új PDF generáló motor:** `html2pdf.js`-re váltás a megbízhatóbb, szövegalapú PDF-ekért.
- **Teljeskörű Unicode (ékezet) támogatás:** A `DejaVuSans` betűtípus beágyazásával.
- **Professzionális PDF sablon:** Új, strukturált sablon bevezetése.
- **Egyszerűsített letöltés:** Közvetlen letöltés az előnézet helyett.

## v1.x - Alapverzió
*Dátum: 2024 előtt*

### Jellemzők
- A kalkulátor alapvető logikájának implementálása.
- Árlisták kezelése.
- Dinamikus beviteli mezők.
- Kísérleti, kép-alapú PDF generálás.