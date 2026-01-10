# Változási Napló

## v2.0.7 - Felhasználói Felület Finomhangolása
*Dátum: 2024-05-22*

### Fejlesztések
- **Frissítés Gomb:** A fejléc kapott egy új "Frissítés" gombot, amivel manuálisan újraszámoltatható a kalkuláció. Ez hasznos például az árfolyam kézi átírása után.
- **Áthelyezett Összesítő:** A felső menüből el lett távolítva a projekt-összesítő sáv. Helyette a jobb oldali kalkulációs táblázat kapott egy dinamikus fejlécet, ami kontextusban, reszponzívan jeleníti meg a projekt főbb adatait.
- **Projektfájlok Tisztítása:** A felesleges `index.tsx` és `templates.json` fájlok törlésre kerültek a projektből.

## v2.0.6 - PDF Generálás Javítások és Finomítások
*Dátum: 2024-05-22*

### Javítások és Fejlesztések
- **Önköltség Számítás Javítva:** Kijavításra került egy kritikus hiba, ami miatt a PDF-ben az önköltség összesítése helytelen értéket mutatott.
- **Újratervezett PDF Fejléc:** A PDF fejléce egy letisztultabb, professzionálisabb elrendezést kapott.
- **Integrált Adatblokk:** A PDF-ben a feladat leírása és a projektadatok összesítése egy közös információs blokkba került.
- **Feltételes Kedvezmény Sor:** Az "Összesen (kedvezmény nélkül)" sor mostantól csak akkor jelenik meg, ha a kalkuláció tartalmaz kedvezményt.

## v2.0.5 - PDF Pontosítások
*Dátum: 2024-05-22*

### Fejlesztések
- **Részletesebb PDF adatösszesítő:** A PDF fejlécében található adatösszesítő mostantól pontosan, szerepkörökre bontva jeleníti meg a résztvevőket.
- **Egyértelműbb címkék:** A kalkulációban és a PDF-ben is pontosításra kerültek a címkék (pl. mérnök szerelésvezetőként).

## v2.0.4 - Bővített PDF export és UX finomítások
*Dátum: 2024-05-22*

### Új funkciók és fejlesztések
- **Egyszerűsített PDF export:** Új "Egyszerűsített PDF" gomb került hozzáadásra.
- **Dinamikus adatösszesítő PDF-ben:** Mindkét PDF típus kapott egy automatikusan generált összesítőt.
- **Önköltség kimutatása a PDF-ben:** A részletes PDF-ben megjelent az "Önköltség" oszlop és összesítés.
- **PDF végösszeg egyértelműsítése:** A "Végösszeg" felirat "Nettó végösszeg"-re lett cserélve.

## v2.0.3 - Logikai finomítások és UX fejlesztések
*Dátum: 2024-05-22*

### Új funkciók és fejlesztések
- **PDF Bővítés:** A PDF mostantól tartalmazza a "Feladat leírása" mezőt.
- **"Mentés" Gomb:** Az "Egyéb költségek" szekció kapott egy "Mentés" gombot.
- **Árfolyam címke:** Az árfolyam mező mellett "Ft/EUR" címke jelzi a mértékegységet.

### Javítások
- **Projekt tisztítása:** Felesleges fájlok eltávolítva.

## v2.0.2 - Hibajavítások
*Dátum: 2024-05-22*

### Javítások
- **Copyright év javítása:** A láblécben a hibás copyright év javítva lett 2024-re.

## v2.0.1 - Verziókövetés bevezetése
*Dátum: 2024-05-22*

### Új funkciók
- **Verziószám a láblécben.**
- **Változási Napló (`changelog.md`) létrehozása.**

## v2.0.0 - A PDF Forradalom: Stabil és ékezetbiztos generálás
*Dátum: 2024-05-22*

### Főbb változások
- **Új PDF generáló motor:** `html2pdf.js`-re váltás.
- **Teljeskörű Unicode (ékezet) támogatás.**
- **Professzionális PDF sablon.**

## v1.x - Alapverzió
*Dátum: 2024 előtt*

### Jellemzők
- Kalkulátor alaplogika, árlistakezelés, dinamikus beviteli mezők, kísérleti PDF generálás.