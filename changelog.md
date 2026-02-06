
# Változási Napló

## v3.3.46 - Dinamikus, Függvény-alapú Excel Export
*Dátum: 2024-06-20*

- **Funkció Átalakítás:** Az XLS export egy teljesen új, dinamikus `.xlsx` formátumú fájlt generál, amely két, egymással összekapcsolt munkalapot tartalmaz.
- **Új "Díjtételek" Munkalap:** Egy külön munkalap jött létre, amely kizárólag a kalkulációhoz használt díjtételeket és szorzókat tartalmazza.
- **Új "Kalkuláció" Munkalap:** A fő munkalap mostantól **Excel függvényeket használ** a számításokhoz. A cellák a "Díjtételek" munkalapon lévő értékekre hivatkoznak, így a letöltött fájlban egy díjtétel módosítása az egész kalkulációt dinamikusan újraszámolja.
- **Formázás:** A generált fájlban a pénzügyi értékek egységesen "Ft" formátumot kapnak.
- **Cél:** A módosítás célja egy olyan export létrehozása, amely a letöltés után is könnyen módosítható és tovább használható anélkül, hogy az összefüggések elvesznének.

## v3.3.45 - XLS Export Újrastrukturálása
*Dátum: 2024-06-20*

- **Funkció Átalakítás:** A felhasználói visszajelzés alapján az XLS export funkció teljesen át lett alakítva.
- **Új Struktúra:** A korábbi, többlapos export helyett a rendszer mostantól egy **egyetlen, részletes munkalapot** generál.
- **Tartalom:** Ez az egy munkalap tartalmaz mindent, egy logikus, fentről lefelé haladó sorrendben:
    1. Projekt fejléc adatok.
    2. Globális beállítások (árlista, árfolyam, kedvezmény).
    3. Az összes alkalmazott díjtétel és **az összes szorzó/haszonkulcs** listázva.
    4. Az összes beviteli paraméter.
    5. A teljes, részletes kalkulációs táblázat.
    6. A végső összesítések.
- **Felhasználói Felület:** Az alkalmazás fő felhasználói felülete **nem változott**, a fejlesztés kizárólag a generált XLS fájl tartalmát és formátumát érintette.

... (korábbi verziók)
