
# Változási Napló

## v2.20.0 - PDF Generálás Racionalizálása a Minőség Javítása Érdekében
*Dátum: 2024-05-28*

### Főbb változások és fejlesztések
- **Megbízhatatlan PDF Generátor Eltávolítva:** A "PDF letöltése" gomb és a mögötte álló `html2pdf.js` könyvtár eltávolításra került. Az eszköz nem tudta következetesen és pontosan renderelni a komplex HTML/CSS struktúrát, ami gyenge minőségű PDF dokumentumokat eredményezett.
- **Ajánlott Eljárás: Böngésző Alapú Mentés:** A PDF dokumentumok létrehozásának hivatalos és javasolt módja mostantól a "Nyomtatás" gomb használata, majd a böngésző nyomtatási ablakában a **"Mentés PDF-ként"** opció kiválasztása. Ez a módszer garantálja a legmagasabb vizuális hűséget és minőséget.
- **Tisztább Felhasználói Felület:** A nyomtatási előnézeti ablak most egyetlen, egyértelmű gombot tartalmaz, csökkentve a felhasználói zavart.

## v2.19.0 - Közvetlen PDF Generálás és Előnézet Javítás
*Dátum: 2024-05-28*
- **PDF Letöltés Funkció:** A nyomtatási előnézeti ablakban egy új "PDF letöltése" gomb jelent meg. Ez a `html2pdf.js` könyvtár segítségével közvetlenül generál egy PDF dokumentumot a megjelenített tartalomból és elindítja a letöltését.
- **Dinamikus PDF Fájlnév:** A generált PDF fájl neve automatikusan az ajánlatszámból képződik a könnyebb kezelhetőség érdekében.
- **Garantált Világos Előnézet:** A nyomtatási előnézet HTML kódja mostantól expliciten beállítja a fehér hátteret, biztosítva, hogy minden böngészőben a valós nyomtatási kép jelenjen meg, függetlenül az applikáció sötét/világos témájától.

## v2.18.0 - Téma- és Nyomtatáskezelés Finomhangolása
*Dátum: 2024-05-28*
- **Sötét Mód Konzisztencia:** Javítva a legördülő menük (`select`) opcióinak olvashatósága sötét módban. A lenyíló lista mostantól szintén a sötét téma színeit használja, egységesebb megjelenést biztosítva.
- **Nyomtatási Előnézet Javítása:** A nyomtatási előnézet mostantól mindig a világos, nyomtatásra optimalizált témát jeleníti meg, függetlenül az alkalmazás aktuális sötét/világos beállításától. Ez biztosítja, hogy a felhasználó a valós végeredményt lássa.

## v2.17.0 - Interaktív Nyomtatási Előnézet és Hibajavítások
*Dátum: 2024-05-28*
- **Új Nyomtatási Előnézet:** A nyomtatás gombra kattintva a dokumentum egy reszponzív, felugró ablakban (modal) jelenik meg az alkalmazáson belül, nem pedig egy új böngészőfülön.
- **Felhasználói Kontroll:** Az előnézeti ablakban egy külön "Nyomtatás" gomb található, így a nyomtatási párbeszédablak már nem ugrik fel automatikusan.
- **Oldalszámozás Javítása:** Javítva a hiba, ami miatt a nyomtatott dokumentumok láblécében "Oldal 0 / 0" jelent meg. Mostantól a helyes oldalszám látható.

## v2.16.0 - Felhasználói Felület Finomhangolása
*Dátum: 2024-05-28*
- **Hover Effektus a Beviteli Mezőkön:** Minden beviteli mező és legördülő menü egy finom `hover` effektet kapott (a keret színe kiemelkedik), ami javítja a felhasználói élményt és a vizuális visszajelzést.
- **Verzióinformáció a Belépőképernyőn:** A belépőoldal lábléce mostantól dinamikusan megjeleníti az aktuális verziószámot és a copyright információt.
- **Konzisztens Checkpoint:** A `checkpoint.txt` a felhasználó kérésének megfelelően egy korábbi, rögzített mérföldkövet mutat.

## v2.15.0 - Seahawks Dizájn Rendszer Továbbfejlesztése
*Dátum: 2024-05-28*
- **Erőteljesebb Seahawks Arculat (Sötét Mód):**
    - A sötét mód egy még egységesebb, erőteljesebb arculatot kapott, amely a **Seahawks** palettára épül (élénkzöld, navy kék, szürke).
    - Minden interaktív elem **hangsúlyosabb, fényesebb zöld "glow" effektet** kapott `hover` és `focus` állapotban.
- **Teljes UI Konzisztencia:**
    - Az **"Árlisták kezelése" ablak dizsájnj** teljes mértékben igazodik az alkalmazás többi részéhez, beleértve a legördülő menüket és a beviteli mezőket is.
- **Checkpoint Fájl Visszaállítása:** A felhasználó kérésére a `checkpoint.txt` egy korábbi, stabil verziót (v2.11.0) tükröz, míg a `changelog.md` naprakész marad.

## v2.14.0 - Seahawks Dizájn Rendszer és UI Konzisztencia
*Dátum: 2024-05-28*
- **Erőteljes Seahawks Arculat (Sötét Mód):**
    - A sötét mód elhagyta a korábbi általános színeket, és egy egységes, erőteljes arculatot kapott.
    - Minden interaktív elem (gombok, beviteli mezők) sokkal **hangsúlyosabb, fényesebb zöld "glow" effektet** kapott.
- **Teljes UI Konzisztencia:**
    - Az **"Árlisták kezelése" ablak dizájnja** teljes mértékben igazodik az alkalmazás többi részéhez.

## v2.13.0 - Modernizációs Nagy-frissítés: Új Dizájn, Nyomtatás és UX
*Dátum: 2024-05-28*
- **Teljesen Újratervezett Világos Mód:** Professzionális, letisztult, magas kontrasztú dizájn.
- **Professzionális Nyomtatási Lábléc:** Minden nyomtatott dokumentum egységes láblécet kapott oldalszámozással, verzióval és copyrighttal.
- **Javított Felhasználói Felület:** Teljes nézetű eredménytáblázat, vizuális visszajelzés a kedvezménynél.

## v2.12.0 - UI/UX Nagy-frissítés: Új Dizájn és Funkciók
*Dátum: 2024-05-28*
- **Újratervezett Világos Mód**, **Intelligens Nyomtatási Vezérlők**, **Görgethető Eredménytáblázat**, **Árlisták Nyomtatása**.

## v2.11.0 - Egyszerűsített PDF Export és Dokumentáció Visszaállítása
*Dátum: 2024-05-28*
- **PDF Export Egyszerűsítése:** A PDF exportálás egyetlen "Nyomtatás / PDF Mentés" gombra váltott, amely a böngésző funkcióját használja.
- **Kritikus Fájlok Visszaállítása:** Visszaállításra került a `LOGIC.md` és a `checkpoint.txt`.

## v2.0.0 - v2.10.0 - PDF Funkciók és Inkrementális Fejlesztések
*Dátum: 2024-05-28*
- PDF generálás bevezetése, majd cseréje böngésző-alapú nyomtatásra. Dinamikus láblécek, vízjelek, háromszintű riportok.

## v1.x - Alapverzió
*Dátum: 2024 előtt*
- Kalkulátor alaplogika, árlistakezelés, kezdetleges UI.
