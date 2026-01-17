# Változási Napló

## v3.2.25 - Nyomtatás Hibajavítás és UI Finomítás
*Dátum: 2024-06-17*

### Javítások
- **Kritikus Nyomtatási Hiba Javítva:** Elhárítva egy hiba, amely miatt az "Egyéb költségek" nem jelentek meg a nyomtatási előnézetben és a generált PDF-ben. A probléma a dinamikusan hozzáadott, formázott beviteli mezők adatainak nem megfelelő frissítéséből adódott.
- **Azonnali Nézetfrissítés:** Az "Egyéb költségek" panelen az "Önköltséges?" jelölőnégyzet átváltása most már azonnal és helyesen frissíti a jobb oldali összesítő táblázat nézetét (pl. az "Önköltség" oszlop megjelenítése/elrejtése "Teljes" nézetben).

### Fejlesztések
- **Árfolyam Dátum Kijelzése:** Az "Árfolyam" mező címe mellett mostantól megjelenik az API-ból lekért legfrissebb árfolyam dátuma, növelve az átláthatóságot.

## v3.2.24 - UI/UX Finomhangolás és Formázás
*Dátum: 2024-06-16*

### Fejlesztések
- **Dinamikus Árformázás:** Minden pénzügyi és százalékos értéket tartalmazó beviteli mező (pl. díjak, árfolyam, kedvezmény, haszonkulcsok) mostantól automatikusan formázásra kerül a felhasználó által választott pénznemnek (`Ft`/`€`) vagy mértékegységnek (`%`, `Ft/Eur`) megfelelően.
- **"Egyéb költségek" Javítás:** Az "Önköltséges?" jelölőnégyzet mostantól nem tűnik el bepipálás után, így a döntés könnyen visszavonható.

### Javítások
- **Nyomtatási Vízjel Korrekció:** A "Teljes" (belső) nézet nyomtatási képén a vízjel szövege "BELSŐ HASZNÁLATRA" lett javítva, és a rétegrendje is módosult az olvashatóság javítása érdekében.
- **Kódkarbantartás:** A felesleges `index.tsx` fájl eltávolításra került.

... (korábbi verziók)