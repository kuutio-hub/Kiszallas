# Változási Napló

## v3.2.18 - Munkamenet-alapú Árlista Kezelés
*Dátum: 2024-06-12*

### Jelentős Változások
- **Árlista Mentés Eltávolítva:** Az alkalmazásból teljes egészében eltávolításra került az árlisták böngészőben (`localStorage`) való mentésének, létrehozásának és törlésének funkciója. Az alkalmazás mostantól minden indításkor a `rates.json` fájlból tölti be a gyári árlistákat.
- **Ideiglenes Módosítások:** Az árlisták módosítható díjtételei továbbra is szerkeszthetők az "Árlisták Kezelése" ablakban, de ezek a változtatások csak az aktuális munkamenetre (oldalfrissítésig) érvényesek.
- **Azonnali Visszajelzés:** Az árlistakezelőben végrehajtott bármely díjtétel-módosítás azonnal frissíti a fő kalkulációs táblázatot, lehetővé téve a változások hatásának élő követését.
- **Leegyszerűsített UI:** Az árlistakezelő felületéről eltávolításra kerültek a mentéssel, létrehozással és törléssel kapcsolatos gombok és mezők.

## v3.2.17 - Kalkulációs Logika Javítása
*Dátum: 2024-06-11*

### Javítások
- **Önköltség Számítási Hiba:** Kijavítva egy kritikus hiba, ahol az összesített önköltség helytelenül tartalmazta a nem önköltséges tételeket is.

... (korábbi verziók)