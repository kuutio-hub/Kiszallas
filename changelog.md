
# Változási Napló

## v3.0.2 - PDF Generálás Stabilitásának Javítása
*Dátum: 2024-05-27*

### Javítások
- **PDF Logika Refaktorálása:** Az összes PDF generálási folyamat (árlista és kalkulációk) egy új, központi segédfüggvényt használ. Ez a refaktorálás egységesíti a generálási beállításokat és egy robusztusabb, "off-screen" renderelési technikát alkalmaz, amely megbízhatóan kezeli a külső erőforrásokat (pl. betűtípusokat), ezzel véglegesen megoldva a korábban tapasztalt üres PDF problémát és növelve a rendszer általános stabilitását.

## v3.0.1 - PDF Generálási Javítás
*Dátum: 2024-05-26*

### Javítások
- **Üres Árlista PDF:** Kijavításra került egy kritikus hiba, amely miatt az árlista exportálása üres PDF dokumentumot eredményezett. A probléma a külső betűtípusok hibás betöltéséből adódott. A PDF generálási beállítások mostantól egységesek és stabilan működnek az összes export funkciónál.

## v3.0.0 - "Partner PDF" és Vizuális Megújulás
*Dátum: 2024-05-25*

### Új funkciók és fejlesztések
- **Háromszintű PDF Export:** Bevezetésre került egy új "Partner PDF" nézet, amely az egységárakat mutatja, de a belső önköltséget nem. A meglévő opciók "Ügyfél PDF"-re (egyszerűsített) és "Belső PDF"-re (teljes) lettek átnevezve a tisztább kommunikáció érdekében.
- **Világos Mód Újratervezése:** A világos mód egy teljesen új, professzionális dizájnt kapott, amelyet a Seahawks csapat "Wolf Grey" és "Action Green" színei ihlettek.
- **UI/UX Finomhangolás:**
    - Az aktív elemek "glow" effektje látványosabb lett.
    - A beviteli mezők maximális szélessége globálisan korlátozva lett.
    - Finom dizájnelemek kerültek bevezetésre a professzionálisabb megjelenésért.

## v2.9.0 - Dokumentáció Szétválasztása és Világos Mód Finomhangolása
*Dátum: 2024-05-24*

### Új funkciók és fejlesztések
- **Dokumentáció Kiszervezése:** Minden, a működési logikát és szabályokat leíró szöveg a felhasználói felületről átkerült a `LOGIC.md` és `VALIDATION_RULES.md` fájlokba.
- **Világos Mód Vizuális Felújítása:** A világos téma egy új, kontrasztosabb színpalettát kapott.
- **Felesleges Fájlok Törlése.**

### Javítások
- **Láthatósági Hibák Javítása:** A világos módban korábban nem látható elemek (pl. naptár ikon) javításra kerültek.

## v2.8.0 - Fokozott Biztonság és Felhasználói Visszajelzések
*Dátum: 2024-05-23*

### Új funkciók és fejlesztések
- **Jelszóval Védett Árlista Feloldás.**
- **Megerősített Mentési Folyamat.**
- **Intuitívabb Gomb-elrendezés.**

### Javítások
- **Lábléc Javítás.**

...és korábbi verziók.
