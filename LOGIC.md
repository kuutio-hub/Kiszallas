# Költségkalkulátor - Üzleti Logika

Ez a dokumentum a Kiszállási és Szerelési Költségkalkulátor számítási motorjának üzleti logikáját írja le.

## 1. Alapelvek

- **Alap Pénznem:** Minden ár és díjtétel az árlistákban (`rates.json`) magyar forintban (HUF) van rögzítve.
- **EUR Konverzió:** Ha a felhasználó az EUR pénznemet választja, minden HUF érték a felületen megadott EUR/HUF árfolyamon kerül átváltásra a megjelenítéskor.
- **Önköltség vs. Eladási ár:** Bizonyos tételeknél (pl. szállás, emelőgép) az árlista megkülönböztet egy alap önköltségi árat és egy **haszonkulcs** szorzót.
  - `Eladási Ár = Önköltségi Ár * Haszonkulcs Szorzó`

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
  1. A rendszer megvizsgálja a szerelők és a mérnökök munkanapjait.
  2. Kiszámítja a "felügyelet nélküli" napok számát: `Felügyelet nélküli napok = Szerelői napok - Mérnöki napok`.
  3. A szerelésvezetői órák száma a felügyelet nélküli napokból adódik.
  4. A maradék szerelői óra a normál szerelői óradíjon kerül elszámolásra.

## 3. Utazási és Ellátási Költségek

- **Kiszállási díj:** Az utazással töltött idő alapján számolódik, oda-vissza úttal.
- **Kiküldetési díj:** Csak "Külföld" esetén, napidíj alapon.
- **Jármű km díj:** A távolság alapján, oda-vissza úttal, a megadott számú járműre.
- **Szállás:** Személyenként és éjszakánként, a **haszonkulcs** szorzóval növelt áron.
  - `Szállás Költség = Létszám * Éjszakák * (Szállás önköltség * Szállás haszonkulcs)`

## 4. Eszköz Költségek

- **Emelőgép napidíj és szállítás:** A **haszonkulcs** szorzóval növelt áron kerülnek kiszámlázásra.
  - `Emelőgép Költség = (Eszközök * Napok * Napidíj + Szállítások * 2 * Szállítási díj) * Eszköz haszonkulcs`

## 5. Egyéb Költségek

- Egyedi tételek mennyiséggel és egységárral. Opcionálisan **haszonkulcs** adható hozzájuk.

## 6. Végső Számítások

- **Összesítés:** Az összes tétel eladási árának összege adja a nettó végösszeget.
- **Kedvezmény:** A százalékos kedvezmény a teljes nettó végösszegből kerül levonásra.