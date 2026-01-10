
# Változási Napló

## v2.9.0 - Dokumentáció Szétválasztása és Világos Mód Finomhangolása
*Dátum: 2024-05-24*

### Új funkciók és fejlesztések
- **Dokumentáció Kiszervezése:** Minden, a működési logikát és szabályokat leíró szöveg a felhasználói felületről átkerült a `LOGIC.md` és `VALIDATION_RULES.md` fájlokba, így a felület letisztultabb lett.
- **Világos Mód Vizuális Felújítása:** A világos téma egy teljesen új, kontrasztosabb és esztétikusabb színpalettát kapott.
- **Felesleges Fájlok Törlése:** A projektből törlésre kerültek a már nem használt `index.tsx`, `templates.json` és `exchange_rates.json` fájlok.

### Javítások
- **Láthatósági Hibák Javítása:** A világos módban korábban nem látható elemek (pl. a dátumválasztó naptár ikonja) most már tökéletesen látszanak.

## v2.8.0 - Fokozott Biztonság és Felhasználói Visszajelzések
*Dátum: 2024-05-23*

### Új funkciók és fejlesztések
- **Jelszóval Védett Árlista Feloldás:** Az árlisták "Védett" állapotának feloldása mostantól admin jelszó megadásához kötött.
- **Megerősített Mentési Folyamat:** Az árlisták felülírása jelszót és egy "Megértettem" jelölőnégyzetet igényel.
- **Intuitívabb Gomb-elrendezés:** A megerősítést kérő ablakokban a "Mégse" opció vizuálisan kiemelt lett.

### Javítások
- **Lábléc Javítás:** Kijavításra került egy kritikus hiba, amely miatt a változási napló tartalma hibásan jelent meg az alkalmazás láblécében.

## v2.7.0 - UI Finomhangolás és Professzionalizálás
*Dátum: 2024-05-23*

### Javítások és Fejlesztések
- **Zökkenőmentes PDF Generálás:** A PDF exportálás közbeni vizuális "villanás" ki lett küszöbölve.
- **Optimális Mezőszélességek:** A beviteli mezők maximális szélességet kaptak.
- **Egységes Dizájn az Árlistakezelőben:** A szorzó/százalékos mezők kinézete egységessé vált.

## v2.6.0 - Biztonsági és Funkcionális Bővítések, UI Finomhangolás
*Dátum: 2024-05-23*

### Új funkciók és fejlesztések
- **Jelszóval Védett Landing Page:** Az alkalmazás belépési képernyőt kapott.
- **Fejlettebb Árlista Létrehozás:** Sablonválasztási lehetőség új árlistához.
- **Általános Reszponzivitás Javítása.**
- **Címkék Pontosítása.**

### Javítások
- **PDF Kerekítési Hiba:** A százalékos értékek helyesen jelennek meg az árlista exportban.

## v2.5.0 - Árlista Menedzsment Bővítése és Hibajavítások
*Dátum: 2024-05-23*

### Új funkciók és fejlesztések
- **Védett Árlisták:** Írásvédelem kapcsoló bevezetése.
- **Árlista PDF Export.**
- **Kompakt Árlista Szerkesztő.**

### Javítások
- **PDF Generálási Hiba:** Javítva a tartalom "lecsúszása".

## v2.4.1 - Logikai Javítás
*Dátum: 2024-05-22*

### Javítások
- **Szerelésvezetői Logika Pontosítása** a felügyelet nélküli napok alapján.

## v2.4.0 - Kalkulációs Logika és UI Finomhangolás
*Dátum: 2024-05-22*
- Új szerelésvezetői logika.
- Átláthatóbb árfolyamgrafikon.
- Stabil, forint alapú árlistakezelés.

## v2.3.1 - Felhasználói Kényelem és Biztonsági Funkciók
*Dátum: 2024-05-22*
- Biztonságos árlista mentés: "Felülírás" és "Mentés másként".
- Reset gomb.
- Azonnali kedvezmény számítás.

...és korábbi verziók.
