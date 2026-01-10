# Változási Napló

## v2.6.0 - Biztonsági és Funkcionális Bővítések, UI Finomhangolás
*Dátum: 2024-05-23*

### Új funkciók és fejlesztések
- **Jelszóval Védett Landing Page:** Az alkalmazás egy belépési képernyővel indul, a teljes kalkulátor csak a helyes jelszó megadása után érhető el, védve az üzleti adatokat.
- **Fejlettebb Árlista Létrehozás:** Új árlista létrehozásakor a felhasználó választhat, hogy egy meglévő árlistát használ sablonként, vagy egy teljesen üres listával indul.
- **Általános Reszponzivitás Javítása:** Az alkalmazás elrendezése finomhangolásra került, a beviteli mezők (pl. Engedmény) már nem nyúlnak el feleslegesen nagy képernyőn, így a felület rendezettebb lett.
- **Kompakt Árlista Szerkesztő:** Az árlistakezelő felületének dizájnja tovább javult, a címkék színe és a mezők elrendezése esztétikusabb lett.
- **Címkék Pontosítása:** Több elnevezés is frissült a felhasználói visszajelzés alapján (`Eszközök` -> `Emelőgép`, `Szállás önköltség` -> `Szállás költség`, `továbbértékesítés` -> `ár szorzó`, stb.).
- **Felesleges Fájlok Törlése:** A projektből törlésre kerültek a már nem használt `index.tsx`, `templates.json` és `exchange_rates.json` fájlok.

### Javítások
- **PDF Kerekítési Hiba:** Az árlista PDF exportjában a százalékos értékek (pl. ár szorzó) mostantól helyesen, kerekítve jelennek meg.

## v2.5.0 - Árlista Menedzsment Bővítése és Hibajavítások
*Dátum: 2024-05-23*

### Új funkciók és fejlesztések
- **Védett Árlisták:** Az árlistakezelőben bevezetésre került egy "Védett" kapcsoló, amellyel a véglegesített árlisták írásvédetté tehetők, megelőzve a véletlen módosításokat.
- **Árlista PDF Export:** Új "PDF Export" gombbal bővült az árlistakezelő, amellyel egy kattintással letisztult, nyomtatható kivonat készíthető a kiválasztott árlistáról.
- **Kompakt Árlista Szerkesztő:** Az árlistakezelő felülete egy kompaktabb, reszponzív elrendezést kapott, ahol a címkék és a beviteli mezők egy sorban helyezkednek el, javítva az átláthatóságot.
- **Logikai Szabályok Dokumentálása:** Létrehozásra került egy új `VALIDATION_RULES.md` fájl, amely a jövőben bevezethető logikai ellenőrzésekre tesz javaslatokat.

### Javítások
- **PDF Generálási Hiba:** Javítva lett egy hiba, amely miatt a kalkulációból generált PDF-ek tartalma esetenként nem megfelelően, a lapról "lecsúszva" jelent meg.

## v2.4.1 - Logikai Javítás
*Dátum: 2024-05-22*

### Javítások
- **Szerelésvezetői Logika Pontosítása:** Kijavításra került egy kritikus hiba a szerelésvezetői díj számításában, amely helytelenül kezelte a mérnökök és szerelők hétvégi napjainak átfedését. A kalkulációs motor most már precízen, a felügyelet nélküli napok alapján számolja a szerelésvezetői órákat, így a kalkuláció minden esetben a valós helyzetet tükrözi.

## v2.4.0 - Kalkulációs Logika és Felhasználói Felület Finomhangolása
*Dátum: 2024-05-22*

### Főbb változások
- **Új Szerelésvezetői Logika:** A személyi költségek számítása teljesen megújult, hogy pontosabban kövesse a valós üzleti logikát.
- **Átláthatóbb Árfolyamgrafikon:** Az árfolyamgrafikon szűrője egy letisztultabb, gyorsgombokkal ellátott felületet kapott.
- **Stabil, Forint Alapú Árlistakezelés:** Az árlistakezelő funkció logikája megerősítésre került, hogy garantáltan Forint alapon működjön.

## v2.3.1 - Felhasználói Kényelem és Biztonsági Funkciók
*Dátum: 2024-05-22*

### Új funkciók és fejlesztések
- **Biztonságos Árlista Mentés:** "Felülírás" és "Mentés másként" opciók.
- **Reset Gomb:** Új "Visszaállítás" gomb a fejlécben.
- **Azonnali Kedvezmény Számítás:** Valós idejű frissítés gépelés közben.

## v2.3.0 - Logikai Pontosítás és Funkcióbővítés
*Dátum: 2024-05-22*

### Új funkciók és fejlesztések
- **Szerelési Vezető Logika Pontosítása.**
- **"Készítő" Mező:** Opcionális "Készítő" mező a PDF láblécéhez.
- **Dinamikus PDF Fájlnév.**

## v2.2.0 - Funkcionális Bővítések és Finomítások
*Dátum: 2024-05-22*

### Új funkciók és fejlesztések
- **'Egység' Mező Egyéb Költségeknél.**
- **Automatikus Kijelölés Fókuszkor.**
- **Feltételes Árfolyamváltó az árlistakezelőben.**

## v2.1.0 - Felhasználói Élmény és Logikai Finomítások
*Dátum: 2024-05-22*

### Fejlesztések és Javítások
- **Jelszó Frissítve:** `kalkulator2026`.
- **Kedvezménykezelés Javítva:** Levonás a végösszegből.
- **UI Konzisztencia Javítások.**
- **Felesleges Fájlok Törlése.**

## v2.0.9 - Pontosság és Egyszerűsítés
*Dátum: 2024-05-22*

### Fejlesztések és Javítások
- **EUR Pontosság:** Két tizedesjegy használata.
- **Egyszerűsített Összesítő.**
- **Önköltség Számítás Javítása.**

## v2.0.8 - Jelszavas Védelem
*Dátum: 2024-05-22*

### Új funkciók
- **Jelszó az árlistákhoz.**

## v2.0.0 - A PDF Forradalom
*Dátum: 2024-05-22*

### Főbb változások
- **Új PDF generáló motor:** `html2pdf.js`.
- **Teljeskörű Unicode támogatás.**

## v1.x - Alapverzió
*Dátum: 2024 előtt*
- Kalkulátor alaplogika, kísérleti PDF generálás.