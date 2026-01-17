# Változási Napló

## v3.2.28 - Kritikus Adatmegjelenítési Javítások
*Dátum: 2024-06-18*

### Javítások
- **Árlistakezelő Javítása:** Az "Árlisták Kezelése" ablakban a fix (nem módosítható) díjtételek egy hiba miatt nem jelentek meg. A hiba javításra került, mostantól minden tétel korrekten látható.
- **Árfolyam Formázási Hiba:** Kijavítva egy hiba, amely miatt az automatikusan lekért EUR/HUF árfolyam hibásan, extrém magas értékként jelent meg. A formázási logika javításával az árfolyam most már helyesen jelenik meg.

## v3.2.27 - HTML Struktúra Javítása
*Dátum: 2024-06-17*

### Javítások
- **Oldal Elrendezésének Helyreállítása:** Eltávolításra került egy hibásan a HTML fájl végére került, extra szöveges tartalom, amely az oldal szétesését okozta.

## v3.2.26 - Mentési Logika és Nyomtatási Finomítás
*Dátum: 2024-06-17*

### Fejlesztések
- **"Egyéb költségek" Mentési Logika:** Minden egyedi tétel egy "Mentés" (zöld pipa) és "Törlés" (piros X) gombot kapott. A tételek **csak mentés után** kerülnek be a kalkulációba és a nyomtatásba. A nem mentett tételek vizuális jelzést kaptak.
- **Reszponzív Elrendezés Javítása:** Az "Egyéb költségek" szekció elrendezése optimalizálva lett a mentés/törlés gombok elhelyezésével.

### Javítások
- **Nyomtatási Vízjel Igazítása:** A "Teljes" nézet nyomtatási képén a vízjel pozíciója javítva lett, hogy ne lógjon ki a nyomtatási margóról.

## v3.2.25 - Nyomtatás Hibajavítás és UI Finomítás
*Dátum: 2024-06-17*

### Javítások
- **Kritikus Nyomtatási Hiba Javítva:** Elhárítva egy hiba, amely miatt az "Egyéb költségek" nem jelentek meg a nyomtatási előnézetben és a generált PDF-ben.
- **Azonnali Nézetfrissítés:** Az "Egyéb költségek" panelen az "Önköltséges?" jelölőnégyzet átváltása most már azonnal és helyesen frissíti a jobb oldali összesítő táblázat nézetét.

### Fejlesztések
- **Árfolyam Dátum Kijelzése:** Az "Árfolyam" mező címe mellett mostantól megjelenik az API-ból lekért legfrissebb árfolyam dátuma.

... (korábbi verziók)