# Költségkalkulátor - Üzleti Logika

Ez a dokumentum a Kiszállási és Szerelési Költségkalkulátor számítási motorjának üzleti logikáját írja le.

## 1. Alapelvek

- **Alap Pénznem:** Minden ár és díjtétel az árlistákban (`rates.json`) magyar forintban (HUF) van rögzítve.
- **EUR Konverzió:** Ha a felhasználó az EUR pénznemet választja, minden HUF érték a felületen megadott EUR/HUF árfolyamon kerül átváltásra a megjelenítéskor.
- **Díjtételek Kezelése és Szerkesztése:**
    - **Kétszintű Adatstruktúra:** Minden árlista két csoportra bontva tárolja a díjtételeket:
        1.  `fixed`: Fix, nem módosítható tételek (pl. óradíjak, kiszállási díjak). Ezek az üzleti logika alapkövei.
        2.  `overridable`: Módosítható tételek (pl. kilométerdíj, szállás költség, emelőgép díjak). Ezek projektenként változhatnak.
    - **Szerkesztési Logika:**
        - Az "Árlisták Kezelése" ablakban a `fixed` díjtételek mezői mindig le vannak tiltva.
        - A `overridable` díjtételek mezői mindig szerkeszthetők.
        - **Felhasználói Árlisták:** A felhasználó által létrehozott listák neve és módosítható díjai szabadon szerkeszthetők, a változások közvetlenül az adott listába mentődnek.
        - **Gyári Árlisták Módosítása:** Ha a felhasználó egy gyári (alapértelmezett) árlista módosítható díjtételeit szerkeszti és menti, a rendszer **automatikusan létrehoz egy új, "(módosított)" utótaggal ellátott felhasználói árlistát**, és átvált rá. Ezzel az eredeti sablonok integritása megmarad, de a rugalmasság biztosított.
- **Önköltség vs. Eladási ár:**
  - Bizonyos alap tételeknél (pl. szállás, emelőgép) a rendszer megkülönböztet egy alap önköltségi árat és egy **haszonkulcs** szorzót. `Eladási Ár = Önköltségi Ár * Haszonkulcs Szorzó`.
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
- **Szállás:** Személyenként és éjszakánként, a haszonkulcs szorzóval növelt áron.
  - `Szállás Költség = Létszám * Éjszakák * (Szállás önköltség * Szállás haszonkulcs)`

## 4. Eszköz Költségek

- Az emelőgép napidíja és szállítási költsége az aktív árlistából származik.
- **Emelőgép napidíj és szállítás:** A haszonkulcs szorzóval növelt áron kerülnek kiszámlázásra.
  - `Emelőgép Költség = (Eszközök * Napok * Napidíj + Szállítások * 2 * Szállítási díj) * Eszköz haszonkulcs`

## 5. Egyéb Költségek

- Egyedi tételek mennyiséggel és árral. Ha a tétel "önköltséges"-nek van jelölve, a megadott százalékos haszonkulcsot a rendszer hozzáadja az árhoz.

## 6. Végső Számítások

- **Összesítés:** Az összes tétel eladási árának összege adja a nettó végösszeget.
- **Kedvezmény:** A százalékos kedvezmény a teljes nettó végösszegből kerül levonásra.
