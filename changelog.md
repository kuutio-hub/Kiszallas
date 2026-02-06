
# Változási Napló

## v3.3.47 - Teljesen Dinamikus, Háromlapos Excel Export
*Dátum: 2024-06-21*

- **Funkció Forradalom:** Az XLS export funkciót teljesen újraírtuk. A generált `.xlsx` fájl mostantól egy önálló, interaktív, három munkalapos kalkulátor, amely a webalkalmazás teljes logikáját tartalmazza Excel függvényekkel.
- **Új "Beviteli Adatok" Munkalap:** Egy dedikált, űrlapszerű munkalap az összes bemeneti paraméter (projekt adatok, létszámok, napok, stb.) kezelésére.
- **Új "Adatok" Munkalap:** A kalkulátor "motorja". Tartalmazza az összes díjtételt és szorzót. Egy lenyíló menüből választható árlista (évszám) alapján a táblázat `VLOOKUP` függvénnyel dinamikusan frissíti az aktív díjakat. Az EUR/HUF árfolyam is itt található.
- **Új "Kalkuláció" Munkalap:** A fő, nyomtatványszerű munkalap, amelynek cellái a másik két lapra hivatkoznak. A teljes számítás dinamikus, a beviteli adatok vagy díjtételek módosítása azonnal frissíti a végeredményt. Az önköltség, kedvezmény, és EUR átváltás állandó részei a lapnak.
- **Cél:** Egy olyan export létrehozása, ami a letöltés után is egy teljes értékű, könnyen módosítható, professzionális kalkulátorként működik.

## v3.3.46 - Dinamikus, Függvény-alapú Excel Export
*Dátum: 2024-06-20*

- **Funkció Átalakítás:** Az XLS export egy teljesen új, dinamikus `.xlsx` formátumú fájlt generál, amely két, egymással összekapcsolt munkalapot tartalmaz.
- **Új "Díjtételek" Munkalap:** Egy külön munkalap jött létre, amely kizárólag a kalkulációhoz használt díjtételeket és szorzókat tartalmazza.
- **Új "Kalkuláció" Munkalap:** A fő munkalap mostantól **Excel függvényeket használ** a számításokhoz. A cellák a "Díjtételek" munkalapon lévő értékekre hivatkoznak, így a letöltött fájlban egy díjtétel módosítása az egész kalkulációt dinamikusan újraszámolja.
- **Formázás:** A generált fájlban a pénzügyi értékek egységesen "Ft" formátumot kapnak.
- **Cél:** A módosítás célja egy olyan export létrehozása, amely a letöltés után is könnyen módosítható és tovább használható anélkül, hogy az összefüggések elvesznének.

... (korábbi verziók)