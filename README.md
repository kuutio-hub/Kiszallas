# Költségkalkulátor v3.2.28

## 1. Projekt Bemutatása
Helyszíni szerelési projektek költségbecslésére szolgáló, modern, reszponzív webalkalmas.

## 2. Legutóbbi Változások (v3.2.28)
- **Kritikus Hibajavítások:** Javítva lett két adatmegjelenítési hiba. Az egyik megakadályozta a fix díjtételek megjelenítését az árlistakezelőben, a másik pedig hibásan, extrém magas értékként jelenítette meg az EUR/HUF árfolyamot.
- **"Egyéb költségek" Mentési Logika:** A tételek mostantól csak egyenkénti, manuális mentés (zöld pipa) után kerülnek be a kalkulációba, nagyobb kontrollt adva a felhasználónak.
- **Mentés Nélküli Működés:** Az alkalmazás logikája továbbra is munkamenet-alapú. A díjtételek ideiglenesen módosíthatók, de nincs mentési funkció.

Részletesebb információkért lásd a `changelog.md` fájlt.