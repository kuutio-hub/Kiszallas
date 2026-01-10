# Változási Napló

## v2.3.1 - Felhasználói Kényelem és Biztonsági Funkciók
*Dátum: 2024-05-22*

### Új funkciók és fejlesztések
- **Biztonságos Árlista Mentés:** Az árlisták mentésekor egy megerősítő párbeszédablak jelenik meg, amely lehetőséget ad a **felülírásra** vagy a **mentés másként** opcióra, megelőzve a véletlen adatvesztést.
- **Reset Gomb:** A fejlécbe egy új "Visszaállítás" gomb került, amellyel egy kattintással, megerősítés után törölhető a teljes űrlap tartalma.
- **Azonnali Kedvezmény Számítás:** A kedvezmény alkalmazása mostantól valós időben, már gépelés közben frissíti a végösszeget.
- **Verziózás Finomítása:** A felhasználói visszajelzés alapján a verziókezelés részletesebbé vált, hogy jobban tükrözze a változtatások mértékét.

## v2.3.0 - Logikai Pontosítás és Funkcióbővítés
*Dátum: 2024-05-22*

### Új funkciók és fejlesztések
- **Szerelési Vezető Logika:** A kalkulációs logika pontosításra került. A mérnökök mostantól minden esetben mérnöki díjon kerülnek elszámolásra, a "mérnök mint szerelésvezető" tétel megszűnt. Szerelésvezetői díj csak akkor van, ha a projektben nincs mérnök.
- **"Készítő" Mező:** Az alapadatokhoz hozzáadásra került egy opcionális "Készítő" mező, amelynek értéke megjelenik a PDF-ek láblécében.
- **Dinamikus PDF Fájlnév:** A generált PDF-ek neve mostantól `[Ajánlatszám]_[Projektszám]_kiszallas_[dátum].pdf` séma szerint generálódik.
- **Üres "Egyéb" Tételek:** Új "Egyéb költség" tétel hozzáadásakor a mezők üresen indulnak, nincsenek előre kitöltött értékek.
- **UI Finomítások:** A projektszám mező megkapta az "Opcionális" jelzést, és az árlistakezelőből el lett távolítva a feleslegessé vált EUR/HUF átváltó gomb.

## v2.2.0 - Funkcionális Bővítések és Finomítások
*Dátum: 2024-05-22*

### Új funkciók és fejlesztések
- **'Egység' Mező Egyéb Költségeknél:** Az "Egyéb költségek" szekcióban a tételekhez mostantól megadható egyéni mértékegység (pl. db, l, m, klt), ami a kalkulációban és a PDF exportokban is megjelenik.
- **Automatikus Kijelölés Fókuszkor:** A felhasználói élmény javítása érdekében minden numerikus és pénzügyi beviteli mező tartalma automatikusan kijelölésre kerül, amint a felhasználó belekattint, megkönnyítve az adatok gyors módosítását.
- **Feltételes Árfolyamváltó:** Az "Árlisták kezelése" ablakban egy "HUF ⇄ EUR" gomb jelenik meg, de csak akkor, ha a fő pénznem EUR-ra van állítva. Ez lehetővé teszi az árak gyors átváltását és szerkesztését EUR-ban anélkül, hogy az alapértelmezett (HUF) árakat módosítani kellene a mentéskor.

## v2.1.0 - Felhasználói Élmény és Logikai Finomítások
*Dátum: 2024-05-22*

### Fejlesztések és Javítások
- **Jelszó Frissítve:** Az adminisztrátori jelszó `kalkulator2026`-ra változott.
- **Kedvezménykezelés Javítva:** A kedvezmény logikája megváltozott. A "Kedvezményes Egységár" oszlop eltávolításra került a táblázatból, a kedvezmény levonása mostantól kizárólag a végösszegnél történik, ami átláthatóbbá teszi a kalkulációt.
- **Egységes Dizájn:** Az "Egyéb költségek" szekció kinézete a többi panelhez lett igazítva, mostantól címkéket használ a placeholderek helyett, egységesítve a felhasználói felületet.
- **UI Konzisztencia:** Az "Alapadatok" panel bezáró gombja a többi panelhez hasonlóan a jobb oldalra került.
- **PDF Cím Egyszerűsítve:** Az egyszerűsített PDF export címéből eltávolításra került az "(Egyszerűsített)" jelző a letisztultabb megjelenés érdekében.
- **Felesleges Fájlok Törlése:** A projektből törlésre kerültek a már nem használt `index.tsx`, `templates.json` és `exchange_rates.json` fájlok.

## v2.0.9 - Pontosság és Egyszerűsítés
*Dátum: 2024-05-22*

### Fejlesztések és Javítások
- **EUR Pontosság:** Az EUR pénznemre váltáskor az alkalmazás mostantól mindenhol két tizedesjegy pontossággal jeleníti meg az árakat, mind a felületen, mind a PDF exportokban.
- **Egyszerűsített Összesítő:** Az adatösszesítő (a jobb oldali táblázat fejléce és a PDF) már nem bontja meg a szerelőket és szerelésvezetőket, hanem egységesen "szerelőként" és "mérnökként" összegzi a résztvevőket a könnyebb átláthatóság érdekében.
- **Önköltség Javítás:** A felhasználói felületen a részletező táblázat láblécében az "Önköltség összesen" sor számítása javítva lett, hogy pontosan csak a tényleges önköltségi tételeket vegye figyelembe, összhangban a PDF export logikájával.

## v2.0.8 - Jelszavas Védelem
*Dátum: 2024-05-22*

### Új funkciók
- **Jelszó az árlistákhoz:** Az "Árlisták kezelése" funkció mostantól jelszót kér a megnyitás előtt, hogy megakadályozza a véletlen módosításokat. A jelszó a kódban könnyen módosítható.

## v2.0.7 - Felhasználói Felület Finomhangolása
*Dátum: 2024-05-22*

### Fejlesztések
- **Frissítés Gomb:** A fejléc kapott egy új "Frissítés" gombot, amivel manuálisan újraszámoltatható a kalkuláció.
- **Áthelyezett Összesítő:** A felső menüből el lett távolítva a projekt-összesítő sáv. Helyette a jobb oldali kalkulációs táblázat kapott egy dinamikus fejlécet.

## v2.0.6 - PDF Generálás Javítások és Finomítások
*Dátum: 2024-05-22*

### Javítások és Fejlesztések
- **Önköltség Számítás Javítva:** Kijavításra került egy kritikus hiba, ami miatt a PDF-ben az önköltség összesítése helytelen értéket mutatott.
- **Újratervezett PDF Fejléc:** A PDF fejléce egy letisztultabb, professzionálisabb elrendezést kapott.
- **Integrált Adatblokk:** A PDF-ben a feladat leírása és a projektadatok összesítése egy közös információs blokkba került.
- **Feltételes Kedvezmény Sor:** Az "Összesen (kedvezmény nélkül)" sor mostantól csak akkor jelenik meg, ha a kalkuláció tartalmaz kedvezményt.

## v2.0.5 - PDF Pontosítások
*Dátum: 2024-05-22*

### Fejlesztések
- **Részletesebb PDF adatösszesítő:** A PDF fejlécében található adatösszesítő mostantól pontosan, szerepkörökre bontva jeleníti meg a résztvevőket.
- **Egyértelműbb címkék:** A kalkulációban és a PDF-ben is pontosításra kerültek a címkék (pl. mérnök szerelésvezetőként).

## v2.0.4 - Bővített PDF export és UX finomítások
*Dátum: 2024-05-22*

### Új funkciók és fejlesztések
- **Egyszerűsített PDF export:** Új "Egyszerűsített PDF" gomb került hozzáadásra.
- **Dinamikus adatösszesítő PDF-ben:** Mindkét PDF típus kapott egy automatikusan generált összesítőt.
- **Önköltség kimutatása a PDF-ben:** A részletes PDF-ben megjelent az "Önköltség" oszlop és összesítés.
- **PDF végösszeg egyértelműsítése:** A "Végösszeg" felirat "Nettó végösszeg"-re lett cserélve.

## v2.0.3 - Logikai finomítások és UX fejlesztések
*Dátum: 2024-05-22*

### Új funkciók és fejlesztések
- **PDF Bővítés:** A PDF mostantól tartalmazza a "Feladat leírása" mezőt.
- **"Mentés" Gomb:** Az "Egyéb költségek" szekció kapott egy "Mentés" gombot.
- **Árfolyam címke:** Az árfolyam mező mellett "Ft/EUR" címke jelzi a mértékegységet.

## v2.0.2 - Hibajavítások
*Dátum: 2024-05-22*

### Javítások
- **Copyright év javítása:** A láblécben a hibás copyright év javítva lett 2024-re.

## v2.0.1 - Verziókövetés bevezetése
*Dátum: 2024-05-22*

### Új funkciók
- **Verziószám a láblécben.**
- **Változási Napló (`changelog.md`) létrehozása.**

## v2.0.0 - A PDF Forradalom: Stabil és ékezetbiztos generálás
*Dátum: 2024-05-22*

### Főbb változások
- **Új PDF generáló motor:** `html2pdf.js`-re váltás.
- **Teljeskörű Unicode (ékezet) támogatás.**
- **Professzionális PDF sablon.**

## v1.x - Alapverzió
*Dátum: 2024 előtt*

### Jellemzők
- Kalkulátor alaplogika, árlistakezelés, dinamikus beviteli mezők, kísérleti PDF generálás.