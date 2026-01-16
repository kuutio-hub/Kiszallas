# Változási Napló

## v3.1.0 - Architektúra Refaktorálás: Konfiguráció Kiszervezése
*Dátum: 2024-05-30*

### Főbb változások és fejlesztések
- **Modularizáció:** A statikus konfigurációs adatok (a beviteli mezők struktúrája és a díjtételek címkéi) kiszervezésre kerültek a JavaScript kódból különálló `input_config.json` és `rate_key_labels.json` fájlokba.
- **Tisztább Kód:** A `index.html` JavaScript szekciója jelentősen "tisztább" és könnyebben olvasható lett a több száz sornyi statikus adat eltávolításával.
- **Könnyebb Karbantarthatóság:** A címkék és a dinamikus űrlapok szerkesztése mostantól a dedikált JSON fájlokban végezhető el, anélkül, hogy az alkalmazás logikájába bele kellene nyúlni.
- **Hatékonyabb Betöltés:** Az alkalmazás indításakor az összes szükséges adatfájl (`rates.json`, konfigurációs JSON-ok) párhuzamosan, `Promise.all` segítségével töltődik be a jobb teljesítmény érdekében.
- **Verzióugrás:** Az architekturális változások miatt az alkalmazás verziószáma v3.1.0-ra változott.

## v3.0.0 - Robusztus Adatkezelés és Alapértelmezett Árlisták Védelme
*Dátum: 2024-05-29*

### Főbb változások és fejlesztések
- **Intelligens Adatszinkronizáció:** Az alkalmazás mostantól minden indításkor szinkronizálja az alapértelmezett árlistákat a `rates.json` fájlból. Ez biztosítja, hogy a "gyári" árlisták mindig naprakészek, felülírva a böngészőben tárolt elavult verziókat.
- **Felhasználói Adatok Megőrzése:** A szinkronizációs folyamat érintetlenül hagyja a felhasználók által létrehozott egyedi árlistákat, így azok nem vesznek el az alkalmazás frissítésekor.
- **Felülírhatatlan Védelem:** A `rates.json`-ből származó alapértelmezett árlisták (`isDefault: true` jelölővel) mostantól véglegesen védettek. Nem szerkeszthetők és nem törölhetők, megelőzve a véletlen adatrongálást. A felhasználók továbbra is készíthetnek róluk másolatot ("Mentés másként...") a saját használatukra.
- **Verzióugrás:** A jelentős adatkezelési változások miatt az alkalmazás verziószáma v3.0.0-ra változott.

## v2.22.2 - UI Konzisztencia és Logikai Átrendezés
*Dátum: 2024-05-29*

### Főbb változások és fejlesztések
- **UI Átszervezés:** A "Munkavégzés helyszíne" és a "Hely típusa" mezők az "Alapadatok" szekcióból átkerültek az "Utazás" szekcióba, mivel logikailag szorosabban kapcsolódnak az utazási költségekhez. A kód refaktorálva lett, hogy ezek a mezők is dinamikusan generálódjanak.
- **Vizuális Egységesítés:** Az árlistakezelő felületén a százalékos beviteli mezők ("továbbértékesítés") stílusa javítva lett, hogy vizuálisan megegyezzen a többi mezővel. A százalékjel (`%`) most már a kereten belül, egységesen jelenik meg.
- **Szöveg Pontosítása:** A belépőképernyő főcíme "Költségkalkulátor"-ra módosult, jobban lefedve az alkalmazás teljes funkcionalitását.

## v2.22.1 - Felhasználói Felület Logikájának Javítása
*Dátum: 2024-05-29*
- **Logikusabb Adatbevitel:** A "Munkavégzés helyszíne" és a "Hely típusa" mezők átkerültek az "Alapadatok" szekcióból az "Utazás" szekcióba, hogy a felhasználói munkafolyamat természetesebb legyen.
- **Kód Refaktorálás:** Az áthelyezett mezők mostantól a többi elemhez hasonlóan dinamikusan, JavaScriptből generálódnak, ami egységesíti a kódbázist.

## v2.22.0 - Biztonsági Finomhangolás
*Dátum: 2024-05-28*

### Főbb változások és fejlesztések
- **Jelszómentés Letiltása:** Biztonsági okokból az összes jelszó beviteli mező (`<input type="password">`) megkapta az `autocomplete="new-password"` attribútumot. Ez a szabványos módszer megakadályozza, hogy a böngészők felajánlják az alkalmazás-specifikus (nem személyes) jelszavak elmentését, ezzel csökkentve a biztonsági kockázatokat.

## v2.21.0 - UI/UX Finomhangolás és Biztonsági Frissítés
*Dátum: 2024-05-28*

### Főbb változások és fejlesztések
- **Javított Vizuális Visszajelzés:** A beviteli mezők és gombok egy sokkal hangsúlyosabb, vastagabb és élénkebb "glow" (ragyogás) effektet kaptak `focus` és `hover` állapotban, ami a modernebb és reszponzívabb felhasználói élményt szolgálja.
- **Konzisztens UI Elemek:** Az árlistákban a százalékos értékek (`%`) a beviteli mező keretén belülre kerültek, egységesítve a megjelenést a többi pénzügyi mezővel.
- **Logikusabb Elrendezés:** Az "Utazás" szekció a felhasználói visszajelzések alapján a "Szerelők" szekció elé került, elősegítve a logikusabb adatrögzítési sorrendet.
- **Jelszóval Védett Törlés:** Az árlisták véletlen vagy jogosulatlan törlésének megakadályozására egy új biztonsági réteg került bevezetésre: a törléshez mostantól adminisztrátori jelszó megadása szükséges.
- **Felhasználói Felület Tisztítása:** A fejsorból eltávolításra került a felesleges "Frissítés" gomb, a "Visszaállítás" ikon pedig egyértelmű szöveges gombra cserélődött.
- **Dekoratív Mentés Gombok:** Minden lenyitható panel kapott egy "Mentés" gombot, ami rákattintva vizuális visszajelzést ad a felhasználónak.

## v2.20.0 - PDF Generálás Racionalizálása a Minőség Javítása Érdekében
*Dátum: 2024-05-28*
- **Megbízhatatlan PDF Generátor Eltávolítva:** A "PDF letöltése" gomb és a mögötte álló `html2pdf.js` könyvtár eltávolításra került a renderelési pontatlanságok miatt.
- **Ajánlott Eljárás: Böngésző Alapú Mentés:** A PDF dokumentumok létrehozásának hivatalos módja a "Nyomtatás" gomb használata, majd a böngésző "Mentés PDF-ként" opciójának kiválasztása.
- **Tisztább Felhasználói Felület:** A nyomtatási előnézeti ablak most egyetlen, egyértelmű gombot tartalmaz.

## v2.19.0 - Közvetlen PDF Generálás és Előnézet Javítás
*Dátum: 2024-05-28*
- **PDF Letöltés Funkció:** A nyomtatási előnézeti ablakban egy új "PDF letöltése" gomb jelent meg.
- **Dinamikus PDF Fájlnév:** A generált PDF fájl neve automatikusan az ajánlatszámból képződik.
- **Garantált Világos Előnézet:** A nyomtatási előnézet HTML kódja expliciten fehér hátteret állít be.

## v2.18.0 - Téma- és Nyomtatáskezelés Finomhangolása
*Dátum: 2024-05-28*
- **Sötét Mód Konzisztencia:** Javítva a legördülő menük olvashatósága sötét módban.
- **Nyomtatási Előnézet Javítása:** Az előnézet mostantól mindig a világos, nyomtatásra optimalizált témát jeleníti meg.

## v2.17.0 - Interaktív Nyomtatási Előnézet és Hibajavítások
*Dátum: 2024-05-28*
- **Új Nyomtatási Előnézet:** A dokumentum egy felugró ablakban (modal) jelenik meg.
- **Felhasználói Kontroll:** Az előnézeti ablakban egy külön "Nyomtatás" gomb található.
- **Oldalszámozás Javítása:** A nyomtatott dokumentumok láblécében a helyes oldalszám látható.

## v2.16.0 - Felhasználói Felület Finomhangolása
*Dátum: 2024-05-28*
- **Hover Effektus a Beviteli Mezőkön:** Finom `hover` effekt a jobb vizuális visszajelzésért.
- **Verzióinformáció a Belépőképernyőn:** A belépőoldal lábléce dinamikusan megjeleníti a verziószámot.

## v2.15.0 - Seahawks Dizájn Rendszer Továbbfejlesztése
*Dátum: 2024-05-28*
- **Erőteljesebb Seahawks Arculat (Sötét Mód):** Hangsúlyosabb zöld "glow" effekt.
- **Teljes UI Konzisztencia:** Az "Árlisták kezelése" ablak dizájnja igazodik a fő témához.

## v2.14.0 - Seahawks Dizájn Rendszer és UI Konzisztencia
*Dátum: 2024-05-28*
- **Erőteljes Seahawks Arculat (Sötét Mód):** Fényesebb zöld "glow" effekt.
- **Teljes UI Konzisztencia:** "Árlisták kezelése" ablak dizájnja frissítve.

## v2.13.0 - Modernizációs Nagy-frissítés: Új Dizájn, Nyomtatás és UX
*Dátum: 2024-05-28*
- **Teljesen Újratervezett Világos Mód**, **Professzionális Nyomtatási Lábléc**, **Javított Felhasználói Felület**.

## v2.12.0 - UI/UX Nagy-frissítés: Új Dizájn és Funkciók
*Dátum: 2024-05-28*
- **Újratervezett Világos Mód**, **Intelligens Nyomtatási Vezérlők**, **Görgethető Eredménytáblázat**, **Árlisták Nyomtatása**.

## v2.11.0 - Egyszerűsített PDF Export és Dokumentáció Visszaállítása
*Dátum: 2024-05-28*
- **PDF Export Egyszerűsítése:** Váltás a böngésző funkciójára.
- **Kritikus Fájlok Visszaállítása:** `LOGIC.md` és `checkpoint.txt` visszaállítva.

## v2.0.0 - v2.10.0 - PDF Funkciók és Inkrementális Fejlesztések
*Dátum: 2024-05-28*
- PDF generálás bevezetése, majd cseréje böngésző-alapú nyomtatásra.

## v1.x - Alapverzió
*Dátum: 2024 előtt*
- Kalkulátor alaplogika, árlistakezelés, kezdetleges UI.