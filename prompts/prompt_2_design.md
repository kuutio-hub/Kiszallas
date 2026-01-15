# Dizájn Prompt (Prompt_2) - "Industrial Seahawks" Téma

## 1. Vizuális Koncepció és Alapelvek

**Téma Neve:** Industrial Seahawks
**Koncepció:** Egy modern, letisztult, ipari jellegű dizájn, amely a professzionalizmust és a funkcionalitást helyezi előtérbe. A sötét mód a Seattle Seahawks amerikai futball csapat színeiből (sötétkék, élénk zöld) merít ihletet, míg a világos mód egy klasszikus, üzleti megjelenést biztosít.

**Alapelvek:**
- **Letisztultság:** A felület legyen átlátható, a funkciók könnyen elérhetők. A panelek lenyithatósága segíti a zsúfoltság elkerülését.
- **Konzisztencia:** A színek, térközök, betűméretek és komponensek stílusa legyen egységes az egész alkalmazásban.
- **Visszajelzés:** A felhasználói interakciókat (kattintás, fókusz, hover) egyértelmű vizuális visszajelzések kísérjék.

## 2. Színpaletta (CSS Változókkal Implementálva)

| CSS Változó Név | Sötét Mód (Alapértelmezett) | Világos Mód | Felhasználás |
|---|---|---|---|
| `--bg-primary` | `#1a202c` | `#f8f9fa` | Az oldal fő háttérszíne. |
| `--bg-secondary` | `#2d3748` | `#ffffff` | Kártyák, panelek, modális ablakok háttérszíne. |
| `--bg-tertiary` | `#4a5568` | `#e9ecef` | Címkék, gombok alapállapota, táblázat sorai. |
| `--text-primary` | `#edf2f7` | `#212529` | Fő szövegszín. |
| `--text-secondary`| `#a0aec0` | `#6c757d` | Címkék, helykitöltők, másodlagos információk. |
| `--text-on-accent`| `#000000` | `#ffffff` | Színes gombokon (pl. mentés) lévő szöveg. |
| `--border-color` | `#4a5568` | `#dee2e6` | Szegélyek, elválasztó vonalak. |
| `--accent-primary`| `#69BE28` (Seahawks zöld) | `#0d6efd` (Klasszikus kék) | Aktív elemek, fókusz-ragyogás, linkek. |
| `--accent-secondary`| `color-mix(in srgb, var(--seahawks-green) 85%, black)` | `color-mix(in srgb, var(--accent-primary) 85%, black)` | Kiemelt gombok `hover` állapota. |
| `--danger-primary`| `#9B2C2C` | `#dc3545` | Törlés gombok, hibaüzenetek. |
| `--success-primary`| `#69BE28` (Seahawks zöld) | `#198754` | Mentés gombok, sikeres műveletek. |
| `--shadow` | `0 4px 6px -1px rgba(0,0,0,0.1), ...` | `0 4px 6px -1px rgba(0,0,0,0.1), ...` | Kártyák és gombok árnyéka. |
| `--border-radius` | `0.5rem` | `0.5rem` | Elemek lekerekítésének mértéke. |
| `--glow-color` | `color-mix(in srgb, var(--seahawks-green) 80%, transparent)` | `color-mix(in srgb, var(--accent-primary) 50%, transparent)` | Fókuszált elemek `box-shadow` ragyogása. |

## 3. Elrendezés (Layout) és Reszponzivitás

- **Globális Konténer:** Az alkalmazás tartalma egy `.container` elemben helyezkedik el, melynek `max-width: 1800px`.
- **Fő Rács (`main-grid`):**
    - **Asztali nézet (`@media (min-width: 1024px)`):** Kétoszlopos rács (`grid-template-columns: 1fr 1.5fr;`). Bal oldalon a beviteli panelek, jobb oldalon a kalkulációs táblázat.
    - **Mobil nézet:** Egyoszlopos elrendezés, a beviteli panelek a táblázat felett helyezkednek el.
- **Fejléc:** `display: flex` és `flex-wrap: wrap` tulajdonságokkal rendelkezik, így a benne lévő elemek (árlista választó, gombok stb.) reszponzívan tördelődnek kisebb képernyőn.
- **Beviteli Panelek (`<details class="card">`):** A fő beviteli csoportok lenyitható panelek. A `summary` elem végén egy animált nyíl ikon jelzi az állapotot (lefelé nyitott, felfelé csukott).

## 4. Komponensek Részletes Stílusa

- **Beviteli Mezők és Legördülők (`input`, `select`):**
    - Egységes `padding` (`0.5rem`) és `border-radius` (`0.3rem`).
    - A háttérszín és a szegély a téma színeit veszi fel.
    - `focus` állapotban egy 3px vastag, `--glow-color` színű `box-shadow`-t kapnak.
    - A pénzügyi beviteli mezők (`.currency-input`) jobbra igazítottak.
    - A legördülők (`.seahawks-select`) egyedi, témához illeszkedő nyíl ikont kapnak.
- **Gombok (`.btn`):**
    - Alap stílus: `--bg-tertiary` háttér, lekerekített sarkok, árnyék.
    - `hover` állapot: Enyhe emelkedés (`transform: translateY(-2px)`) és `--glow-color` ragyogás. A háttér `--accent-secondary`-re vált.
    - Speciális gombok (`.btn-danger`, `.btn-success`) a témának megfelelő színeket használják.
- **Modális Ablakok (`.modal`):**
    - Teljes képernyőt lefedő, áttetsző fekete háttér (`rgba(0,0,0,0.7)`).
    - A tartalom doboz (`.modal-content`) középre van igazítva, `--bg-secondary` háttérrel és lekerekített sarkokkal.
    - A megjelenés egy finom `fade-in` animációval történik.
- **Táblázatok:**
    - `width: 100%`, `border-collapse: collapse`.
    - Fejléc (`thead`) és lábléc (`tfoot`) háttérszíne sötétebb (`--seahawks-navy` vagy `--bg-tertiary`).
    - Világos módban a páratlan sorok (`tbody tr:nth-child(odd)`) enyhén szürke hátteret kapnak a jobb olvashatóságért.

## 5. Tipográfia és Ikonok

- **Betűtípus:** Az alapértelmezett betűtípus a `Segoe UI` vagy a rendszer alapértelmezett sans-serif betűtípusa.
- **Nyomtatás:** A generált HTML dokumentumokban kötelezően a `DejaVuSans` betűtípust kell használni a maximális karakterkompatibilitás és platformfüggetlen megjelenés érdekében. Ezt CDN-ről kell betölteni.
- **Ikonok:**
    - **Témaváltó:** Két egymást váltó SVG ikon (nap, hold).
    - **Legördülő Nyíl:** Egyedi SVG háttérkép a `.seahawks-select` osztályon.
    - **Panel Nyitó/Záró:** Egy SVG nyíl a `<details>` elem `summary::after` pszeudo-elemen, ami `transform: rotate(180deg)`-t kap nyitott állapotban.

## 6. Nyomtatási Stíluslap

A `getPrintableHtml()` által generált HTML-nek tartalmaznia kell egy beágyazott stíluslapot a következő előírásokkal:
- `@page { size: A4; margin: 25mm; }`
- A test (`body`) háttérszíne legyen fehér (`#ffffff`), a szöveg színe sötét (`#333`).
- A táblázat fejlécének háttere legyen világosszürke (`#f2f2f2`).
- A vízjel (`.watermark`) legyen a tartalom felett (`z-index: 1000`), de áttetsző (`rgba(128, 0, 0, 0.08)`), hogy ne zavarja az olvashatóságot.
- Egy fix pozíciójú lábléc (`.print-footer`) tartalmazza a copyright szöveget és az oldalszámot (`counter(page)`).