
# Változási Napló

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
