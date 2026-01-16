# Változási Napló

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