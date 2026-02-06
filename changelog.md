
# Változási Napló

## v3.3.49 - Robosztus Excel Képlet Javítás
*Dátum: 2024-06-23*

- **Kritikus Javítás:** A dinamikus díjtétel-választó képlet az exportált Excel fájlban (`VLOOKUP` és `MATCH` kombináció) cserélve lett egy sokkal stabilabb és megbízhatóbb `INDEX` és `MATCH` (`INDEX` és `HOL.VAN`) alapú megoldásra.
- **Hibaelhárítás:** Kijavítottunk egy logikai hibát, ami a képletekben használt oszlop-tartományokat helytelenül számolta ki, ez okozta a korábbi `VLOOKUP` formula megbízhatatlan működését. Az új képlet már a pontos tartományokat használja.
- **Stabilitás:** Ezek a módosítások garantálják az "Adatok" munkalapon lévő árlistaválasztó hibátlan és megbízható működését a letöltött `.xlsx` fájlban.

## v3.3.48 - Excel Export Javítás
*Dátum: 2024-06-22*

- **Hibajavítás:** Kijavítottunk egy kritikus hibát az XLS export funkcióban, amely a generált `.xlsx` fájl sérülését és az Excelben való megnyitáskor javítási figyelmeztetést okozott. A probléma egy hibásan generált számformátum-kódból adódott az árfolyam cellájánál.
- **Stabilitás:** A javítással az export funkció ismét stabilan és megbízhatóan működik, a generált fájlok hibátlanul nyithatók meg.

## v3.3.47 - Teljesen Dinamikus, Háromlapos Excel Export
*Dátum: 2024-06-21*

- **Funkció Forradalom:** Az XLS export funkciót teljesen újraírtuk. A generált `.xlsx` fájl mostantól egy önálló, interaktív, három munkalapos kalkulátor, amely a webalkalmazás teljes logikáját tartalmazza Excel függvényekkel.
- **Új "Beviteli Adatok" Munkalap:** Egy dedikált, űrlapszerű munkalap az összes bemeneti paraméter (projekt adatok, létszámok, napok, stb.) kezelésére.
- **Új "Adatok" Munkalap:** A kalkulátor "motorja". Tartalmazza az összes díjtételt és szorzót. Egy lenyíló menüből választható árlista (évszám) alapján a táblázat `VLOOKUP` függvénnyel dinamikusan frissíti az aktív díjakat. Az EUR/HUF árfolyam is itt található.
- **Új "Kalkuláció" Munkalap:** A fő, nyomtatványszerű munkalap, amelynek cellái a másik két lapra hivatkoznak. A teljes számítás dinamikus, a beviteli adatok vagy díjtételek módosítása azonnal frissíti a végeredményt. Az önköltség, kedvezmény, és EUR átváltás állandó részei a lapnak.
- **Cél:** Egy olyan export létrehozása, ami a letöltés után is egy teljes értékű, könnyen módosítható, professzionális kalkulátorként működik.

... (korábbi verziók)