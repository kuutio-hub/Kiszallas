# Költségkalkulátor - Üzleti Logika

Ez a dokumentum a Kiszállási és Szerelési Költségkalkulátor számítási motorjának üzleti logikáját írja le.

## 1. Alapelvek

- **Alap Pénznem:** Minden ár és díjtétel az árlistákban (`rates.json`) magyar forintban (HUF) van rögzítve.
- **EUR Konverzió:** Ha a felhasználó az EUR pénznemet választja, minden HUF érték a felületen megadott EUR/HUF árfolyamon kerül átváltásra a megjelenítéskor.
- **Díjtételek Kezelése és Módosítása (Munkamenet-alapú):**
    - **Betöltés:** Az alkalmazás minden indításkor a `rates.json` fájlból tölti be a rendelkezésre álló árlistákat.
    - **Ideiglenes Módosítás:** A felhasználó a "Díjtételek Módosítása" ablakban **bármelyik díjtételt** felülírhatja. Ezek a változtatások **azonnal** érvénybe lépnek a kalkulációban, de **csak az aktuális munkamenet végéig** (az oldal újratöltéséig vagy bezárásáig) maradnak érvényben. Nincs mentési funkció, ami egy egyszerűbb és stabilabb működést garantál.
- **Önköltség vs. Eladási ár:**
  - Bizonyos alap tételeknél (pl. szállás, emelőgép) a rendszer megkülönböztet egy alap önköltségi árat és egy százalékos **haszonkulcsot**. `Eladási Ár = Önköltségi Ár * (1 + Haszonkulcs / 100)`.
  - Az "Egyéb költségek" esetében egy jelölőnégyzet (`isCostItem`) dönti el, hogy a tétel önköltséges-e. Ha igen, a rendszer a százalékos `multiplier` értékkel növeli az árat. Ha nem, az `amount` mező a végleges eladási ár.

## 2. Személyi Költségek Logikája

A személyi költségek a legösszetettebb részt képezik, a logikája a következő prioritási sorrendet követi: **Mérnök > Szerelésvezető > Szerelő**.

### 2.1. Mérnök Díjak

- A mérnökök mindig a saját, magasabb óradíjukon kerülnek elszámolásra, függetlenül a szerelők jelenlététől.
- **Képlet:**
  - `Hétköznapi Mérnök Költség = (Mérnökök száma * Hétköznapi munkanapok * Napi óraszám) * Mérnök hétköznapi óradíj`
  - `Hétvégi Mérnök Költség = (Mérnökök száma * Hétvégi munkanapok * Napi óraszám) * Mérnök hétvégi óradíj`

### 2.2. Szerelésvezetői és Szerelői Díjak

A rendszer dinamikusan dönti el, hogy a szerelői órákból mennyi számít szerelői és mennyi szerelésvezetői órának. A fő szabály az, hogy **szerelésvezetői díj csak azokon a napokon és órákban merül fel, amikor a szerelők dolgoznak, de nincs jelen mérnöki felügyelet.**

## 3. Utazási és Ellátási Költségek

- Az összes itt szereplő díj (kiszállás, kiküldetés, km, szállás) az aktív árlistából származik.
- **Kiszállási díj:** Az utazással töltött idő alapján számolódik, oda-vissza úttal.
- **Kiküldetési díj:** Csak "Külföld" esetén, napidíj alapon.
- **Jármű km díj:** A távolság alapján, oda-vissza úttal, a megadott számú járműre.
- **Szállás:** Személyenként és éjszakánként, a haszonkulccsal növelt áron.
  - `Szállás Költség = Létszám * Éjszakák * (Szállás önköltség * (1 + Szállás haszonkulcs / 100))`

## 4. Eszköz Költségek

- Az emelőgép napidíja és szállítási költsége az aktív árlistából származik.
- **Emelőgép napidíj és szállítás:** A haszonkulccsal növelt áron kerülnek kiszámlázásra.
  - `Emelőgép Költség = (Eszközök * Napok * Napidíj + Szállítások * 2 * Szállítási díj) * (1 + Eszköz haszonkulcs / 100)`

## 5. Egyéb Költségek

- Egyedi tételek mennyiséggel és árral. Ha a tétel "önköltséges"-nek van jelölve, a megadott százalékos haszonkulcsot a rendszer hozzáadja az árhoz.

## 6. Végső Számítások

- **Összesítés:** Az összes tétel eladási árának összege adja a nettó végösszeget.
- **Kedvezmény:** A százalékos kedvezmény a teljes nettó végösszegből kerül levonásra.