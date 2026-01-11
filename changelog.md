
# Változási Napló

## v2.10.0 - Hibrid PDF Export és Oldalkezelési Garancia
*Dátum: 2024-05-28*

### Új funkciók és fejlesztések
- **Garantált A4 Oldalméret:** A direkt PDF export (`Egyszerű`, `Bővített`, `Részletes`) mostantól egy belső `min-height` beállítással garantálja, hogy a kimeneti dokumentum mindig teljes A4-es oldal legyen, még rövid tartalom esetén is. Ezzel a "féloldalas PDF" hiba véglegesen javításra került.
- **Új "Nyomtatási nézet" Opció:** A PDF Export menü egy új, negyedik opcióval bővült. Ez a funkció a böngésző beépített, rendkívül megbízható nyomtatási motorját használja.
  - **Tökéletes Előnézet:** Megnyitja a kalkulációt egy új ablakban, ami nyomtatás előtti előnézetként szolgál.
  - **Megbízható Mentés:** Automatikusan elindítja a nyomtatási párbeszédablakot, ahol a felhasználó a "Mentés PDF-ként" opciót választva hozhatja létre a dokumentumot.
  - **Biztonsági Tartalék:** Kiváló alternatívát nyújt, ha a direkt generálással bármilyen probléma merülne fel, és tökéletesen kezeli a többoldalas tartalmakat.
- **Karbantartás:** A projektből törlésre kerültek a feleslegessé vált `LOGIC.md` és `checkpoint.txt` fájlok.

## v2.9.0 - PDF Finomhangolás és UI Javítások
*Dátum: 2024-05-28*

### Új funkciók és fejlesztések
- **Egységes PDF Lábléc:** Az "Árlista kivonat" PDF export is megkapta a professzionális, dinamikus láblécet (verziószám, oldalszám), biztosítva a konzisztens megjelenést és a teljes A4-es oldalméretet.
- **Javított Vízjel:** A "BELSŐ HASZNÁLATRA" vízjel mérete optimalizálva lett, így már minden esetben garantáltan teljes egészében látható a generált PDF oldalakon.
- **Átláthatóbb Kedvezmény Kijelzés:** A kalkulációs táblázat láblécében a kedvezmény mostantól külön sorban, negatív előjellel, összegszerűen is megjelenik a végösszeg levonása előtt, egyértelműsítve a számítást.
- **Dinamikus Copyright Év:** Az alkalmazás láblécében a copyright évszám mostantól automatikusan frissül az aktuális évre.
- **Árlista PDF Igazítása:** Az "Árlista kivonat" PDF tartalmának felső margója csökkentve lett, így a dokumentum a lap tetejétől indul, professzionálisabb megjelenést kölcsönözve.


## v2.8.0 - Professzionális PDF Lábléc és Oldalkezelés
*Dátum: 2024-05-28*

### Új funkciók és fejlesztések
- **Dinamikus PDF Lábléc:** Minden generált PDF dokumentum (Egyszerű, Bővített, Részletes) egy egységes, professzionális láblécet kapott.
- **Tartalom:** A lábléc tartalmazza a "Költségkalkulátor" nevet, az alkalmazás aktuális verziószámát és a dinamikus oldalszámozást (pl. "Oldal 1 / 2").
- **Teljes Oldal Garancia:** A lábléc bevezetése megoldja azt a problémát, hogy a rövidebb tartalmú kalkulációk ne generáljanak teljes A4-es oldalt. Mostantól minden exportált dokumentum garantáltan szabványos oldalméretű lesz.

## v2.7.1 - Checkpoint
*Dátum: 2024-05-28*

### Változások
- **Checkpoint Létrehozása:** Technikai verzióugrás egy stabil állapot rögzítésére a nagyobb PDF-fejlesztések előtt.
- **Karbantartás:** Felesleges, üres `index.tsx` fájl törlése a projektből.

## v2.7.0 - PDF Export Bővítése és UI Finomhangolás
*Dátum: 2024-05-28*

### Új funkciók és fejlesztések
- **Jelszó Frissítés:** Az adminisztrátori jelszó `Kalkulator_2026`-ra változott (nagy 'K' betűvel).
- **Háromszintű PDF Export:** A két PDF gomb helyett egyetlen, lenyíló menüvel ellátott "PDF Export" gomb került bevezetésre, három opcióval:
    1.  **Egyszerű:** Csak a költségnemeket és mennyiségeket tartalmazza.
    2.  **Bővített:** Részletes nézet egységárakkal és összesítésekkel, de az önköltségi tételek nélkül (ideális partnereknek).
    3.  **Részletes (Belső):** Minden adatot tartalmaz, beleértve az önköltséget is, és egy "BELSŐ HASZNÁLATRA" vízjellel van ellátva.
- **Árlista PDF Export:** Az "Árlisták kezelése" ablakban megjelent egy "PDF Export" gomb, amellyel a kiválasztott árlista egy letisztult, nyomtatható formátumban exportálható.
- **Modernizált Dizájn és Interaktivitás:**
    - **Hover Effektek:** Minden gomb és interaktív elem egységes, "Seahawks" stílusú hover effektet kapott (finom ragyogás, keret), ami javítja a vizuális visszajelzést.
    - **Reszponzív Mezők:** A beviteli mezők maximális szélességet kaptak, így nagy képernyőkön is esztétikusak maradnak.
- **Kontrasztosabb Világos Mód:** A világos téma színhasználata finomhangolásra került a jobb olvashatóság és a magasabb kontraszt érdekében.
- **Százalékos Pontosság:** Az árlistákban a szorzók (pl. szállás, eszköz) mostantól két tizedesjegy pontossággal is megadhatók (pl. 12,25%).

## v2.5.0 - Felhasználói Felület Modernizálása és Biztonsági Funkciók
*Dátum: 2024-05-28*

### Új funkciók és fejlesztések
- **Professzionális Beléptetés:** Az alkalmazás indításkor egy letisztult, dedikált képernyőn kéri a jelszót, felváltva a korábbi böngésző-alapú `prompt` ablakot.
- **Védett Árlisták:** Az árlistakezelőben bevezetésre került egy "Védett" kapcsoló. Az aktiválásával az árlista írásvédetté válik, megelőzve a véletlen módosításokat. A védelem feloldásához admin jelszó szükséges, amelyet egy biztonságos dialógusablakban lehet megadni.
- **Fejlettebb Mentési Folyamat:** Az árlisták mentésekor egy új, biztonságos megerősítő ablak jelenik meg. A felülíráshoz admin jelszó megadása szükséges, illetve lehetőség van a "Mentés másként..." opció választására, ami növeli az adatbiztonságot.
- **Modern, Interaktív Gombok:** Az egész alkalmazásban a gombok egy új, modernebb dizájnt kaptak. Az egérkurzor föléjük mozgatásakor finoman megemelkednek és egy "glow" (ragyogás) effektet kapnak, ami javítja a felhasználói élményt és az interaktivitást.
- **Új Árlista Létrehozása Sablonból:** Az "Új" árlista létrehozásakor mostantól lehetőség van egy meglévő árlistát sablonként használni, vagy teljesen üres árlistát indítani.

## v2.4.1 - Logikai Javítás
*Dátum: 2024-05-22*

### Javítások
- **Szerelésvezetői Logika Pontosítása:** Kijavításra került egy kritikus hiba a szerelésvezetői díj számításában, amely helytelenül kezelte a mérnökök és szerelők hétvégi napjainak átfedését. A kalkulációs motor most már precízen, a felügyelet nélküli napok alapján számolja a szerelésvezetői órákat, így a kalkuláció minden esetben a valós helyzetet tükrözi.

## v2.4.0 - Kalkulációs Logika és Felhasználói Felület Finomhangolása
*Dátum: 2024-05-22*

### Főbb változások
- **Új Szerelésvezetői Logika:** A személyi költségek számítása teljesen megújult, hogy pontosabban kövesse a valós üzleti logikát.
- **Átláthatóbb Árfolyamgrafikon:** Az árfolyamgrafikon szűrője egy letisztultabb, gyorsgombokkal ellátott felületet kapott.
- **Stabil, Forint Alapú Árlistakezelés:** Az árlistakezelő funkció logikája megerősítésre került, hogy garantáltan és kizárólag Forint alapon működjön.

## v2.1.0 - v2.3.1 - Funkcionális Bővítések és Finomítások
*Dátum: 2024-05-22*
- **Sok apróbb fejlesztés:** Többek között biztonságosabb mentés, reset gomb, valós idejű kedvezményszámítás, új "Készítő" mező, dinamikus PDF fájlnevek, "Egység" mező hozzáadása, UI finomítások és logikai pontosítások.

## v2.0.0 - A PDF Forradalom: Stabil és ékezetbiztos generálás
*Dátum: 2024-05-22*

### Főbb változások
- **Új PDF generáló motor:** `html2pdf.js`-re váltás.
- **Teljeskörű Unicode (ékezet) támogatás.**
- **Professzionális PDF sablon.**

## v1.x - Alapverzió
*Dátum: 2024 előtt*
- Kalkulátor alaplogika, árlistakezelés, dinamikus beviteli mezők.