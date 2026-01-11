# Költségkalkulátor - Üzleti Logika

Ez a dokumentum a Kiszállási és Szerelési Költségkalkulátor számítási motorjának üzleti logikáját írja le.

## 1. Alapelvek

- **Alap Pénznem:** Minden ár és díjtétel az árlistákban (`rates.json`) magyar forintban (HUF) van rögzítve.
- **EUR Konverzió:** Ha a felhasználó az EUR pénznemet választja, minden HUF érték a felületen megadott EUR/HUF árfolyammal kerül átváltásra a megjelenítéskor. A háttérszámítások továbbra is HUF alapon történnek a pontosság érdekében.
- **Önköltség vs. Eladási ár:** Bizonyos tételeknél (pl. szállás, emelőgép) az árlista megkülönböztet egy alap önköltségi árat és egy továbbértékesítési szorzót.
  - `Eladási Ár = Önköltségi Ár * Továbbértékesítési Szorzó`

## 2. Személyi Költségek Logikája

A személyi költségek a legösszetettebb részt képezik, a logikája a következő prioritási sorrendet követi: **Mérnök > Szerelésvezető > Szerelő**.

### 2.1. Mérnök Díjak

- A mérnökök mindig a saját, magasabb óradíjukon kerülnek elszámolásra, függetlenül a szerelők jelenlététől.
- **Képlet:**
  - `Hétköznapi Mérnök Költség = (Mérnökök száma * Hétköznapi munkanapok * Napi óraszám) * Mérnök hétköznapi óradíj`
  - `Hétvégi Mérnök Költség = (Mérnökök száma * Hétvégi munkanapok * Napi óraszám) * Mérnök hétvégi óradíj`

### 2.2. Szerelésvezetői és Szerelői Díjak

A rendszer dinamikusan dönti el, hogy a szerelői órákból mennyi számít szerelői és mennyi szerelésvezetői órának. A fő szabály az, hogy **szerelésvezetői díj csak azokon a napokon és órákban merül fel, amikor a szerelők dolgoznak, de nincs jelen mérnöki felügyelet.**

- **Logikai lépések:**
  1.  A rendszer megvizsgálja a szerelők és a mérnökök munkanapjait (külön a hétköznapokat és a hétvégéket).
  2.  Kiszámítja a "felügyelet nélküli" napok számát: `Felügyelet nélküli napok = Szerelői napok - Mérnöki napok`. Ha az eredmény negatív, akkor 0-nak számít (mert a mérnökök több napot voltak jelen, mint a szerelők, így minden szerelői nap felügyelve volt).
  3.  A szerelésvezetői órák száma a felügyelet nélküli napokból adódik.
  4.  A maradék szerelői óra a normál szerelői óradíjon kerül elszámolásra.

- **Példa:**
  - **Adatok:** 3 szerelő, 5 hétköznap, 2 hétvégi nap (össz. 7 nap). 1 mérnök, 3 hétköznap, 0 hétvégi nap. Napi 8 óra munka.
  - **Számítás:**
    - **Hétköznapok:**
      - Szerelői napok: 5. Mérnöki napok: 3.
      - Felügyelet nélküli hétköznapok: `5 - 3 = 2` nap.
      - **Szerelésvezetői órák (hétköznap):** `2 nap * 8 óra = 16 óra`. (Ez egy főre van, de mivel a szerelésvezetői díj egyedi, ez a helyes számítás).
      - **Szerelői órák (hétköznap):** `(3 szerelő * 5 nap * 8 óra) - 16 óra szerelésvezetői = 120 - 16 = 104 óra`.
    - **Hétvégék:**
      - Szerelői napok: 2. Mérnöki napok: 0.
      - Felügyelet nélküli hétvégi napok: `2 - 0 = 2` nap.
      - **Szerelésvezetői órák (hétvége):** `2 nap * 8 óra = 16 óra`.
      - **Szerelői órák (hétvége):** `(3 szerelő * 2 nap * 8 óra) - 16 óra szerelésvezetői = 48 - 16 = 32 óra`.
  - **Eredmény:** A kalkulációban 4 külön tétel jelenik meg: 16 óra szerelésvezető (hétköznap), 104 óra szerelő (hétköznap), 16 óra szerelésvezető (hétvége), 32 óra szerelő (hétvége).

## 3. Utazási és Ellátási Költségek

- **Kiszállási díj:** Az utazással töltött idő alapján számolódik, oda-vissza úttal. A díj személyenként és kiszállásonként értendő.
  - `Kiszállási Költség = Utazási idő (óra, oda) * 2 * Kiszállások száma * Létszám * Személyi kiszállási díj (szerelő/mérnök)`
- **Kiküldetési díj:** Csak akkor kerül felszámításra, ha a munkavégzés helye "Külföld". Napidíj alapon, személyenként számolódik.
  - `Kiküldetés Költség = Munkanapok száma * Létszám * Személyi kiküldetési díj`
- **Jármű km díj:** A távolság alapján, oda-vissza úttal, a megadott számú járműre.
  - `Km Költség = Távolság (km, oda) * 2 * (Szerelői kiszállások * Szerelői járművek + Mérnöki kiszállások * Mérnöki járművek) * Km díj`
- **Szállás:** Személyenként és éjszakánként számolódik, a továbbértékesítési szorzóval növelt áron. Önköltségként az eredeti díj szerepel.
  - `Szállás Költség = (Szerelő szállás éj * Szerelő létszám + Mérnök szállás éj * Mérnök létszám) * (Szállás díj * Szállás szorzó)`

## 4. Eszköz Költségek

- **Emelőgép napidíj és szállítás:** A továbbértékesítési szorzóval növelt áron kerülnek kiszámlázásra. Önköltségként az eredeti díjak szerepelnek.
  - `Emelőgép Költség = (Emelőgépek száma * Napok száma * Napidíj + Szállítások száma * 2 * Szállítási díj) * Eszköz szorzó`

## 5. Egyéb Költségek

- Egyszerű tételek, amelyek a megadott mennyiséggel és egységárral kerülnek hozzáadásra a végösszeghez. Nincs külön üzleti logika vagy szorzó.

## 6. Végső Számítások

- **Összesítés:** Az összes fenti tétel eladási árának összege adja a nettó végösszeget.
- **Kedvezmény:** A százalékos kedvezmény a teljes nettó végösszegből kerül levonásra.
  - `Kedvezményes Végösszeg = Nettó Végösszeg * (1 - Kedvezmény % / 100)`