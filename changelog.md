
# Változási Napló

## v2.12.0 - UI/UX Nagy-frissítés: Új Dizájn és Funkciók
*Dátum: 2024-05-28*

### Főbb változások és fejlesztések
- **Újratervezett Világos Mód:** A világos téma teljesen megújult. Elhagyva a korábbi "Seahawks" stílust, egy professzionális, letisztult és magas kontrasztú dizájnt kapott, ami jelentősen javítja az olvashatóságot és a felhasználói élményt.
- **Egységes Vizuális Stílus:** Az összes interaktív elem (gombok, beviteli mezők, legördülő listák) egységes `hover` és `focus` ("glow") effektet kapott. Ez modern és reszponzív érzetet kölcsönöz az egész alkalmazásnak, mind sötét, mind világos módban.
- **Intelligens Nyomtatási Vezérlők:** A korábbi egyszerű gomb helyett egy új vezérlőpanel került bevezetésre, ahol a felhasználó először kiválaszthatja a nyomtatni kívánt riport részletességét (**Egyszerűsített**, **Részletes**, **Teljes (belső)**), majd a "Nyomtatás" gombra kattintva indíthatja a folyamatot.
- **Görgethető Eredménytáblázat:** A jobb oldali kalkulációs táblázat mostantól dinamikus magasságú. Hosszabb kalkuláció esetén a tételek listája görgethetővé válik, miközben a táblázat fejléce és a végösszegeket tartalmazó lábléce **mindig látható marad**, ami sokkal átláthatóbbá teszi az eredményeket.
- **Árlisták Nyomtatása:** Az "Árlisták kezelése" ablak egy új "Nyomtatás" gombbal bővült, amely a böngésző nyomtatási funkcióját használva lehetővé teszi a kiválasztott árlista gyors és egyszerű mentését vagy nyomtatását.
- **Logikusabb Felületi Elrendezés:** A "Munkavégzés helye (Belföld/Külföld)" opció átkerült a "Szerelők" szekcióból az "Alapadatok" közé, a "Munkavégzés helyszíne" mellé, így az adatok megadása logikusabb sorrendben történhet.
- **Verziószám a Belépőképernyőn:** A belépőoldal is megkapta a láblécet, amely megjeleníti az aktuális verziószámot és a copyright információt.

## v2.11.0 - Egyszerűsített PDF Export és Dokumentáció Visszaállítása
*Dátum: 2024-05-28*

### Főbb változások és fejlesztések
- **PDF Export Egyszerűsítése:** A PDF exportálás radikálisan leegyszerűsödött egyetlen **"Nyomtatás / PDF Mentés"** gombra, amely a böngésző beépített, megbízható nyomtatási funkcióját hívja meg.
- **Kritikus Fájlok Visszaállítása:** Visszaállításra került a `LOGIC.md` és a `checkpoint.txt` fájl.
- **Kódkarbantartás:** A felesleges `html2pdf.js` könyvtár eltávolításra került.
- **Checkpoint Rögzítése:** A `checkpoint.txt` frissült az új mérföldkővel.

## v2.10.0 - Hibrid PDF Export és Oldalkezelési Garancia
*Dátum: 2024-05-28*
- **Garantált A4 Oldalméret:** A direkt PDF export javítása a "féloldalas PDF" hiba ellen.
- **Új "Nyomtatási nézet" Opció:** A böngésző nyomtatási motorjának használata alternatívaként.

## v2.9.0 - PDF Finomhangolás és UI Javítások
*Dátum: 2024-05-28*
- **Egységes PDF Lábléc:** Az "Árlista kivonat" is megkapta a dinamikus láblécet.
- **Javított Vízjel, Átláthatóbb Kedvezmény, Dinamikus Copyright Év.**

## v2.8.0 - Professzionális PDF Lábléc és Oldalkezelés
*Dátum: 2024-05-28*
- **Dinamikus PDF Lábléc:** Minden generált PDF dokumentum egységes, professzionális láblécet kapott verziószámmal és oldalszámozással.
- **Teljes Oldal Garancia:** A lábléc bevezetése megoldja a "féloldalas" PDF-ek problémáját.

## v2.7.0 - PDF Export Bővítése és UI Finomhangolás
*Dátum: 2024-05-28*
- **Jelszó Frissítés:** `Kalkulator_2026`.
- **Háromszintű PDF Export:** `Egyszerű`, `Bővített`, `Részletes (Belső)`.
- **Árlista PDF Export, Modernizált Dizájn, Százalékos Pontosság.**

## v2.5.0 - Felhasználói Felület Modernizálása és Biztonsági Funkciók
*Dátum: 2024-05-28*
- **Professzionális Beléptetés, Védett Árlisták, Fejlettebb Mentési Folyamat, Modern Gombok, Sablon alapú létrehozás.**

## v2.4.1 - Logikai Javítás
*Dátum: 2024-05-22*
- **Szerelésvezetői Logika Pontosítása:** Kritikus hiba javítása a hétvégi napok átfedésének kezelésében.

## v2.4.0 - Kalkulációs Logika és Felhasználói Felület Finomhangolása
*Dátum: 2024-05-22*
- **Új Szerelésvezetői Logika, Átláthatóbb Árfolyamgrafikon, Stabil, Forint Alapú Árlistakezelés.**

## v2.1.0 - v2.3.1 - Funkcionális Bővítések és Finomítások
*Dátum: 2024-05-22*
- Sok apróbb fejlesztés.

## v2.0.0 - A PDF Forradalom: Stabil és ékezetbiztos generálás
*Dátum: 2024-05-22*
- `html2pdf.js` bevezetése, Unicode támogatás.

## v1.x - Alapverzió
*Dátum: 2024 előtt*
- Kalkulátor alaplogika, árlistakezelés.
