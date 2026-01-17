# Változási Napló

## v3.2.23 - Kódkarbantartás és Tisztítás
*Dátum: 2024-06-15*

### Javítások
- **Kódmaradvány Eltávolítása:** Eltávolításra került egy jelentős mennyiségű, hibásan a HTML fájl végére került szöveges tartalom (dokumentációs fájlok maradványai), amely látható volt a felhasználói felületen.

## v3.2.22 - UI Igazítás
*Dátum: 2024-06-14*

### Javítások
- **CSS Igazítás:** Az "Egyéb költségek" szekcióban a "Haszonkulcs" beviteli mező tökéletesen egy vonalba került a sor többi elemével a felhasználói élmény javítása érdekében.

## v3.2.21 - Felhasználói Felület Finomítások és Súgó
*Dátum: 2024-06-14*

### Fejlesztések
- **Súgó (Wiki) Hozzáadása:** A fejlécbe egy új Súgó ikon került, amelyre kattintva egy modális ablakban megjelenik egy részletes használati útmutató, ami elmagyarázza az alkalmazás funkcióit és a számítási logikát.
- **"Egyéb Költségek" UI Finomhangolás:** Az "Önköltséges?" opció logikája megváltozott. A jelölőnégyzet bepipálása után az elem eltűnik, és a helyén jelenik meg a "Haszonkulcs" mező, ami egy letisztultabb, helytakarékosabb megoldást eredményez.

### Javítások
- **Beviteli Mezők Javítása:** A fejlécben található "Árfolyam" és "Kedvezmény" mezők stílusa javítva lett, így a mellettük lévő pipa gomb már nem takarja ki a beírt értéket.
- **Kódkarbantartás:** Egy felesleges, üres `index.tsx` fájl eltávolításra került a projektből.

## v3.2.20 - Dinamikus Nézet és UI Átrendezés
*Dátum: 2024-06-13*
- **Dinamikus Főnézet:** A jobb oldali kalkulációs táblázat mostantól dinamikusan tükrözi a kiválasztott nyomtatási nézet ("Egyszerű", "Részletes", "Teljes") részletességét.
- **Akciósáv Újratervezése:** Az alsó vezérlősáv elrendezése logikusabb lett; a nyomtatási vezérlők egy különálló, keretes csoportba kerültek a jobb átláthatóság érdekében.
- **"Egyéb Költségek" UI Újratervezése:** Az egyedi költségek felületét egy kétsoros elrendezés váltotta, ami sokkal átláthatóbb és könnyebben használható.
- **Név Módosítása:** A "Belső" nézet elnevezése "Teljes"-re módosult az egyértelműség kedvéért.

... (korábbi verziók)