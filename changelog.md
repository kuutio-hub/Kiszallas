
# Változási Napló

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

## v3.3.44 - XLS Export Funkció
*Dátum: 2024-06-20*

- **Új Funkció:** Az alkalmazás mostantól képes a teljes kalkulációt egy részletes, többlapos XLS fájlba exportálni.
- **UI Bővítés:** Egy új "Export XLS" gomb került az akciósávba a nyomtatási vezérlők mellé.

... (korábbi verziók)
