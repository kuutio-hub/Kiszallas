# Változási Napló

## v3.2.35 - Robusztusabb Árlista Szerkesztő Felület
*Dátum: 2024-06-18*

### Fejlesztések
- **Újraírt Szerkesztőfelület:** A díjtételek szerkesztőjének elrendezése teljesen újra lett írva egy stabil, kéthasábos grid rendszer használatával.
- **Vizuális Hiba Javítva:** Ez a módosítás megoldja a korábbi vizuális hibákat, ahol a hosszabb megnevezések eltolták a beviteli mezőket, biztosítva, hogy minden díjtétel mindig helyesen és átláthatóan jelenjen meg.

## v3.2.34 - UI Finomhangolás és Bővített Nyomtatás
*Dátum: 2024-06-18*

### Fejlesztések
- **Teljeskörű Árlista Nyomtatás:** A nyomtatható árlista mostantól az összes díjtételt tartalmazza, beleértve a haszonkulcsokat is. A tételek a jobb áttekinthetőség érdekében logikai csoportokba vannak rendezve.
- **Reszponzív "Bezárás" Gomb:** Az eredménytáblázat "Bezárás" gombja mostantól csak mobilnézetben jelenik meg, amikor a panel felugró ablakként viselkedik, javítva ezzel az asztali nézet letisztultságát.

## v3.2.33 - Díjtételek Kezelőjének Finomhangolása
*Dátum: 2024-06-18*

### Fejlesztések
- **Minden Díjtétel Szerkeszthető:** A `rates.json`-ben minden díjtétel átkerült a felülírható kategóriába, ezzel biztosítva, hogy az összes tétel megjelenik és módosítható a díjtételek szerkesztőjében.
- **Rendezettebb Elrendezés:** A díjtételek szerkesztőjében a címkék és beviteli mezők mostantól rendezetten, két oszlopban jelennek meg a jobb átláthatóságért.
- **Vizuális Elválasztás:** A személyi díjakon belül a szerelői és mérnöki kategóriák egy finom elválasztóval különülnek el.

## v3.2.32 - Kritikus HTML Struktúra Javítás
*Dátum: 2024-06-18*

### Javítások
- **Oldal Elrendezésének Végleges Helyreállítása:** Kijavítva egy kritikus hiba, amely miatt a HTML fájl végére hibásan extra tartalom került, ami az oldal elrendezésének szétesését okozta. A hiba forrása azonosítva és a javítási folyamat megerősítve a jövőbeli előfordulás megelőzése érdekében.

## v3.2.31 - Díjtételek Átláthatóságának Javítása
*Dátum: 2024-06-18*

### Fejlesztések
- **Díjtételek Új Csoportosítása:** A díjtételek szerkesztő felülete a felhasználói visszajelzések alapján új, logikusabb csoportokba (Személyi díjak, Kiszállási díjak, Eszközök és ellátás) lett rendezve, javítva ezzel az áttekinthetőséget.
- **Láthatósági Hiba Javítva:** Az átszervezés során véglegesen javításra került a hiba, ami miatt nem minden díjtétel jelent meg a listában.
- **Felület Tisztítása:** A díjtételek szerkesztőjének címe letisztultabb lett a jobb felhasználói élmény érdekében.

... (korábbi verziók)