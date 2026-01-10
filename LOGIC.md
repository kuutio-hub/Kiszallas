
# Kalkulációs Logika Dokumentáció

Ez a dokumentum a Kiszállási Kalkulátor motorjának számítási logikáját és alapvető üzleti szabályait részletezi.

## 1. Alapelvek

- **Forint Alapú Számítás:** Minden belső számítás és az árlistákban tárolt érték forintban (HUF) történik. Az euróra (EUR) való átváltás csak a megjelenítéskor, az utolsó lépésben történik.

- **Költségnemek:** A kalkuláció főbb kategóriákra bontja a költségeket: Személyi díjak, Utazás, Ellátás, Emelőgép, és Egyéb költségek.

## 2. Személyi Díjak Számítása

Ez a legösszetettebb része a kalkulációnak. A cél, hogy a rendszer a lehető legpontosabban modellezze a valós helyszíni felállást.

### 2.1. A Szerelésvezetői Logika

A rendszer automatikusan kezeli, hogy mikor van szükség külön szerelésvezetői díj felszámítására.

**A szabály:** Mindig van egy szerelésvezető a területen.
- **Ha van mérnök a helyszínen:** A mérnök(ök) látják el a szerelésvezetői feladatokat. Ilyenkor nincs külön szerelésvezetői díj, a mérnökök a saját óradíjukon vannak elszámolva.
- **Ha nincs mérnök:** A szerelők közül egy fő automatikusan szerelésvezetővé válik, és az ő munkaórái a magasabb, szerelésvezetői óradíjon kerülnek elszámolásra.

### 2.2. A Számítás Menete

1.  **Adatgyűjtés:** A rendszer beolvassa a "Szerelők" és "Mérnökök" paneleken megadott adatokat (létszám, munkanapok, hétvégi napok, napi órák).

2.  **Hétköznapok és Hétvégék Szétválasztása:** Külön számolja a hétköznapi és hétvégi munkanapokat mind a szerelők, mind a mérnökök esetében.

3.  **Mérnöki Költségek:** Ha van mérnök, a költségei a megadott óraszámok és a vonatkozó hétköznapi/hétvégi óradíjak alapján kerülnek kiszámításra.

4.  **Felügyelet Nélküli Napok Meghatározása:** A rendszer kiszámolja, hogy a szerelők hány napot dolgoznak mérnöki felügyelet nélkül (`max(0, szerelői_napok - mérnöki_napok)`). Ezeken a napokon van szükség szerelésvezetőre a szerelők közül.

5.  **Szerelésvezetői Órák Számítása:** A felügyelet nélküli napokra a rendszer felszámolja a szerelésvezetői órákat a megfelelő hétköznapi/hétvégi díjjal.

6.  **Szerelői Órák Számítása:** Az összes szerelői órából kivonásra kerülnek a már szerelésvezetőként elszámolt órák, és a maradék óraszám kerül elszámolásra a normál szerelői díjon.

## 3. Egyéb Költségek és Fogalmak

### 3.1. Önköltség és Ár Szorzó

- **Definíció:** Az önköltség a cég számára felmerülő, közvetlen költséget jelenti egy adott tétel esetében (pl. a szállás tényleges díja, az emelőgép bérleti díja).
- **Működés:** Az árlistában bizonyos tételekhez (pl. `szallas_dij`, `emelogep_napidij`) tartozik egy `_szorzo` érték is. A kalkuláció során az eladási ár (`unitPriceHuf`) ebből a kettőből tevődik össze: `Eladási ár = Önköltség * Ár szorzó`.
- **Megjelenítés:** Az önköltség oszlop csak a "Részletes PDF" nézetben jelenik meg, segítve a belső elemzést és a profitabilitás felmérését.

### 3.2. Árfolyamkezelés (EUR)

- **Működés:** A kalkulátor minden számítást forintban (HUF) végez. Amikor a felhasználó a pénznemet "EUR"-ra váltja, az alkalmazás az összes megjelenített árat (egységárakat, összesítőket) elosztja a fejlécben megadott EUR/HUF árfolyammal.
- **Képlet:** `EUR ár = HUF ár / Árfolyam`

### 3.3. Engedmény

- **Működés:** Az "Engedmény" mezőbe beírt százalékos érték a kalkuláció teljes nettó végösszegéből kerül levonásra.
- **Képlet:** `Kedvezményes végösszeg = Végösszeg * (1 - (Engedmény % / 100))`
- **Megjelenítés:** Az engedmény és a kedvezményes végösszeg a kalkulációs táblázat láblécében, valamint a generált PDF dokumentumokon is feltüntetésre kerül.
