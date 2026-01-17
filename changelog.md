# Változási Napló

## v3.2.41 - Azonnali Kalkuláció és Egységes Lábléc
*Dátum: 2024-06-19*

### Visszaállítás és Fejlesztések
- **"Egyéb Költségek" Logika Visszaállítása:** A felhasználói visszajelzés alapján az "Egyéb költségek" tételei mostantól a beírás pillanatában, azonnal bekerülnek a kalkulációba, a korábbi, mentéshez kötött viselkedés helyett. A mentés gomb mostantól csak a tétel vizuális "mentett" állapotát állítja be.
- **Egységes Nyomtatási Lábléc:** A nyomtatott árlisták láblécének stílusa és elhelyezése teljes mértékben egységesítve lett a fő kalkulációs nyomtatvány láblécével, biztosítva a professzionális és konzisztens megjelenést minden generált dokumentumon.

## v3.2.40 - Letisztult Árlista Nyomtatás
*Dátum: 2024-06-19*

### Fejlesztések
- **Haszonkulcsok Elrejtése:** A nyomtatható árlistából eltávolításra kerültek a belső használatú haszonkulcsokat (`_szorzo`) tartalmazó sorok. Ez egy tisztább, kizárólag a végfelhasználói árakat tartalmazó dokumentumot eredményez.
- **Konzisztens Lábléc:** A professzionális, nyomtatás-specifikus lábléc az árlista nyomtatásakor is konzisztensen működik.

## v3.2.39 - Professzionális Nyomtatási Lábléc
*Dátum: 2024-06-19*

### Fejlesztések
- **Dinamikus Lábléc:** Minden nyomtatott oldal aljára egy új, professzionális lábléc került, amely tartalmazza az aktuális évet, a copyright jelzést, az alkalmazás nevét és a verziószámot.
- **Nyomtatás-specifikus Megjelenés:** A lábléc és a "Belső használatra" vízjel mostantól intelligensen, csak a tényleges nyomtatáskor jelenik meg, az előnézeti `iframe`-ben nem, ezzel tisztább előnézeti képet biztosítva.

## v3.2.38 - Felhasználói Felület Finomhangolása
*Dátum: 2024-06-19*

### Fejlesztések
- **Ellenőrzött Implementáció:** A korábbi kérések (pl. PDF fejléc "nincs megadva" szövege, árlista beviteli mezőinek stílusa) sikeresen implementálva és ellenőrizve lettek.
- **Szimmetrikusabb Elrendezés:** Az árlista szerkesztő felületén a jobb oldali térköz megnövelésre került a letisztultabb, szellősebb megjelenés érdekében.
- **Általános Ellenőrzés:** A landing page és az alkalmazás általános működése ellenőrizve, hibát nem tartalmaz.

## v3.2.37 - Továbbfejlesztett Dizájn és Nyomtatási Kép
*Dátum: 2024-06-18*

### Fejlesztések
- **PDF Fejléc Finomhangolása:** A nyomtatott dokumentum fejlécében az üresen hagyott mezők helyett a "-" jel helyett mostantól a "nincs megadva" szöveg jelenik meg.
- **Árlista Szerkesztő Stílusa:** A díjtételek beviteli mezői szürke hátteret kaptak a jobb vizuális elkülönülés érdekében.
- **Szellősebb Elrendezés:** Az árlista szerkesztő jobb szélén megnövelt térköz biztosít egy letisztultabb, szimmetrikusabb megjelenést.

... (korábbi verziók)