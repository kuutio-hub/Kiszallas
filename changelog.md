# Változási Napló

## v3.2.36 - Finomhangolt Árlista Szerkesztő Elrendezés
*Dátum: 2024-06-18*

### Fejlesztések
- **Javított Olvashatóság:** Az árlista szerkesztőjében a címkék mostantól balra, a beviteli mezők pedig jobbra igazodnak, ami egy tisztább, táblázatszerűbb elrendezést eredményez.
- **Jobb Vizuális Tagolás:** A logikailag összetartozó díjtételek (pl. Kiszállás/Kiküldetés) között megnövelt vertikális térköz javítja a felület átláthatóságát.
- **Szellősebb Dizájn:** A sorok végére egy láthatatlan helytartó elem került, amely egyenletesebb, szellősebb elrendezést biztosít.

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

... (korábbi verziók)