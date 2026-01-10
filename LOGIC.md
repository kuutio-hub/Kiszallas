# Kalkulációs Logika Dokumentáció

Ez a dokumentum a Kiszállási Kalkulátor motorjának számítási logikáját részletezi, különös tekintettel a személyi költségek, azon belül is a szerelésvezetői díjak meghatározására.

## 1. Alapelvek

- **Forint Alapú Számítás:** Minden belső számítás és az árlistákban tárolt érték forintban (HUF) történik. Az euróra (EUR) való átváltás csak a megjelenítéskor, az utolsó lépésben történik, a felhasználó által megadott árfolyam alapján.
- **Költségnemek:** A kalkuláció főbb kategóriákra bontja a költségeket: Személyi díjak, Utazás, Ellátás, Eszközök, és Egyéb költségek.

## 2. Személyi Díjak Számítása

Ez a legösszetettebb része a kalkulációnak. A cél, hogy a rendszer a lehető legpontosabban modellezze a valós helyszíni felállást.

### 2.1. A Szerelésvezetői Logika

A rendszer automatikusan kezeli, hogy mikor van szükség külön szerelésvezetői díj felszámítására.

**A szabály:** Mindig van egy szerelésvezető a területen.
- **Ha van mérnök a helyszínen:** A mérnök(ök) látják el a szerelésvezetői feladatokat. Ilyenkor nincs külön szerelésvezetői díj, a mérnökök a saját óradíjukon vannak elszámolva.
- **Ha nincs mérnök:** A szerelők közül egy fő automatikusan szerelésvezetővé válik, és az ő munkaórái a magasabb, szerelésvezetői óradíjon kerülnek elszámolásra.

### 2.2. A Számítás Menete

1.  **Adatgyűjtés:** A rendszer beolvassa a "Szerelők" és "Mérnökök" paneleken megadott adatokat:
    - `sF`: Szerelők száma (fő)
    - `sN`: Szerelők munkanapjainak száma
    - `sW`: Ebből hétvégi napok száma (szerelő)
    - `sH`: Napi munkaórák (szerelő)
    - `mF`: Mérnökök száma (fő)
    - `mN`: Mérnökök munkanapjainak száma
    - `mW`: Ebből hétvégi napok száma (mérnök)
    - `mH`: Napi munkaórák (mérnök)

2.  **Hétköznapok és Hétvégék Szétválasztása:**
    - Szerelő hétköznapok: `sWd = sN - sW`
    - Mérnök hétköznapok: `mWd = mN - mW`

3.  **Mérnöki Költségek:** Ha `mF > 0`, a mérnökök költségei egyszerűen kiszámolhatók:
    - Hétköznapi mérnök órák: `mF * mWd * mH`
    - Hétvégi mérnök órák: `mF * mW * mH`

4.  **Felügyelet Nélküli Napok Meghatározása:** A rendszer kiszámolja, hogy a szerelők hány napot dolgoznak mérnöki felügyelet nélkül. Ezeken a napokon van szükség szerelésvezetőre a szerelők közül.
    - Felügyelet nélküli hétköznapok: `foreman_needed_wd = max(0, sWd - mWd)`
    - Felügyelet nélküli hétvégék: `foreman_needed_we = max(0, sW - mW)`

5.  **Szerelésvezetői Órák Számítása:**
    - Hétköznapi szerelésvezetői órák: `foreman_hours_wd = foreman_needed_wd * sH`
    - Hétvégi szerelésvezetői órák: `foreman_hours_we = foreman_needed_we * sH`

6.  **Szerelői Órák Számítása:**
    - Először kiszámoljuk az összes szerelői órát (mintha mindannyian sima szerelők lennének).
    - Összes hétköznapi szerelői óra: `sF * sWd * sH`
    - Összes hétvégi szerelői óra: `sF * sW * sH`
    - Ebből kivonjuk a már szerelésvezetőként elszámolt órákat, hogy megkapjuk a "sima" szerelők óraszámát.
    - Normál hétköznapi szerelői órák: `(sF * sWd * sH) - foreman_hours_wd`
    - Normál hétvégi szerelői órák: `(sF * sW * sH) - foreman_hours_we`

### 2.3. Példák

**Példa 1: Csak szerelők**
- Adatok: 3 szerelő, 7 nap, ebből 2 hétvége, 10 óra/nap. Nincs mérnök.
- Számítás:
    - `sWd = 5`, `sW = 2`. `mWd = 0`, `mW = 0`.
    - Felügyelet nélküli hétköznapok: `max(0, 5 - 0) = 5`
    - Felügyelet nélküli hétvégék: `max(0, 2 - 0) = 2`
    - Szerelésvezetői órák: 50 óra hétköznap, 20 óra hétvége.
    - Szerelői órák (a másik 2 főre): 100 óra hétköznap, 40 óra hétvége.

**Példa 2: Több szerelőnap, mint mérnöknap**
- Adatok: 3 szerelő (7 nap, 2 hétvége), 1 mérnök (3 nap, 0 hétvége), 10 óra/nap.
- Számítás:
    - `sWd = 5`, `sW = 2`. `mWd = 3`, `mW = 0`.
    - Felügyelet nélküli hétköznapok: `max(0, 5 - 3) = 2`
    - Felügyelet nélküli hétvégék: `max(0, 2 - 0) = 2`
    - Eredmény: A mérnök 3 hétköznapon felügyel. A maradék 2 hétköznapon és a 2 hétvégén a szerelők közül kell egy főnek vezetnie.
    - Szerelésvezetői órák: 20 óra hétköznap, 20 óra hétvége.
    - Szerelői órák: A többi óra a normál szerelői díjon kerül elszámolásra.
    - Mérnöki órák: 30 óra hétköznap.

**Példa 3: A mérnök végig jelen van**
- Adatok: 3 szerelő (7 nap, 2 hétvége), 1 mérnök (7 nap, 2 hétvége), 10 óra/nap.
- Számítás:
    - `sWd = 5`, `sW = 2`. `mWd = 5`, `mW = 2`.
    - Felügyelet nélküli hétköznapok: `max(0, 5 - 5) = 0`
    - Felügyelet nélküli hétvégék: `max(0, 2 - 2) = 0`
    - Eredmény: Nincs felügyelet nélküli nap, ezért nincs külön szerelésvezetői díj.
    - Szerelői órák: Az összes szerelői óra (210 óra) a normál szerelői díjon kerül elszámolásra.
    - Mérnöki órák: Az összes mérnöki óra (70 óra) a mérnöki díjon kerül elszámolásra.

## 3. Egyéb Költségek Számítása

- **Utazás:** A kilométerdíj és a kiszállási díj (utazási idő óradíja) a megadott távolság, idő, utak száma és járművek száma alapján kerül kiszámításra. Mindig oda-vissza úttal számol.
- **Ellátás:** A szállás és a kiküldetési díj (csak külföldön) a létszám és az éjszakák/napok száma alapján kalkulálódik. A szállásnál a rendszer figyelembe veszi a beállított ár szorzót.
- **Emelőgép:** Az emelőgép napidíja és szállítási díja is a beállított ár szorzóval kerül a végösszegbe.
