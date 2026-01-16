# Változási Napló

## v3.2.11 - Rugalmas Díjtétel Kezelés
*Dátum: 2024-06-04*

### Fejlesztések
- **Felülírható Díjtételek:** A szállás, kilométerdíj és emelőgép költségei mostantól a fő felületen, dedikált beviteli mezőkben felülírhatók.
- **Dinamikus Alapértékek:** Árlista váltásakor ezek a mezők automatikusan feltöltődnek az adott árlista alapértelmezett értékeivel.
- **Logikai Szétválasztás:** A mentett árlisták mostantól csak a fix óradíjakat és kiküldetési díjakat tartalmazzák, míg a projektenként változó költségek a fő felületen kezelhetők, növelve a kalkuláció rugalmasságát.

## v3.2.10 - Árlista Kezelő UI Fejlesztés
*Dátum: 2024-06-03*

### Fejlesztések
- **Csoportosított Árlista Mezők:** Az "Árlisták Kezelése" felületen a díjtételek mostantól logikai csoportokba (Szerelők, Mérnökök, Utazás, Szállás, Eszközök) vannak rendezve a jobb átláthatóság és kezelhetőség érdekében.

## v3.2.9 - Árlistakezelő Helyreállítása és Mobil UI Javítások
*Dátum: 2024-06-02*

### Javítások és Fejlesztések
- **Árlistakezelő (CRUD):** A korábban hiányzó árlistakezelő funkció teljes mértékben helyreállításra került. Egy új, dedikált modális ablakban lehetséges új árlistákat létrehozni, a meglévőket szerkeszteni és törölni.
- **Perzisztencia:** A felhasználó által létrehozott árlisták a böngésző `localStorage`-ában kerülnek mentésre.
- **Mobil Ikonok:** Javítva a hiba, ami miatt az alsó akciósáv gombjain nem jelentek meg az ikonok mobilnézetben. A gombok HTML szerkezete is finomítva lett a robusztusabb megjelenés érdekében.
- **Stabilitás:** Az "Árlisták kezelése" gomb eseménykezelője a helyes funkcióra lett cserélve, megszüntetve a szükségtelen `alert` üzenetet.

## v3.2.8 - Kritikus UI és Funkcionalitási Javítások
*Dátum: 2024-06-01*
- Működő "Nyomtatás" gomb teljes előnézeti funkcióval.
- Mobil UI gombok vizuális javítása.
- Mobil eredmények panel gombjának javítása.

... (korábbi verziók)