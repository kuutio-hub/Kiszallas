
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
- **Ha van mérnök a helyszínen:** A mérnök(ök) látják el a szerelésvezetői feladatokat. Ilyenkor nincs külön szerelésvezetői díj.
- **Ha nincs mérnök:** A szerelők közül egy fő automatikusan szerelésvezetővé válik, és az ő munkaórái a magasabb, szerelésvezetői óradíjon kerülnek elszámolásra.

### 2.2. A Számítás Menete

1.  **Adatgyűjtés:** A rendszer beolvassa a "Szerelők" és "Mérnökök" paneleken megadott adatokat.
2.  **Hétköznapok és Hétvégék Szétválasztása:** Külön számolja a hétköznapi és hétvégi munkanapokat.
3.  **Mérnöki Költségek:** Kiszámolja a mérnöki költségeket a megfelelő óradíjak alapján.
4.  **Felügyelet Nélküli Napok Meghatározása:** Kiszámolja, hány napot dolgoznak a szerelők mérnöki felügyelet nélkül (`max(0, szerelői_napok - mérnöki_napok)`).
5.  **Szerelésvezetői Órák Számítása:** A felügyelet nélküli napokra felszámolja a szerelésvezetői óradíjat.
6.  **Szerelői Órák Számítása:** Az összes szerelői órából levonja a szerelésvezetői órákat, a maradékot normál díjon számolja.

## 3. Egyéb Költségek és Fogalmak

### 3.1. Önköltség és Ár Szorzó

- **Definíció:** Az önköltség a cég számára felmerülő, közvetlen költséget jelenti (pl. szállás díja, emelőgép bérleti díja).
- **Működés:** Bizonyos tételekhez tartozik egy `_szorzo` érték. Az eladási ár ebből tevődik össze: `Eladási ár = Önköltség * Ár szorzó`.
- **Megjelenítés:** Az önköltség oszlop csak a "Belső PDF" nézetben jelenik meg a belső elemzéshez.

### 3.2. Árfolyamkezelés (EUR)

- **Működés:** A kalkulátor forintban (HUF) számol. EUR-ra váltáskor minden árat eloszt a megadott árfolyammal.
- **Képlet:** `EUR ár = HUF ár / Árfolyam`

### 3.3. Engedmény

- **Működés:** A megadott százalékos érték a teljes nettó végösszegből kerül levonásra.
- **Képlet:** `Kedvezményes végösszeg = Végösszeg * (1 - (Engedmény % / 100))`

## 4. PDF Generálási Szintek

Az alkalmazás három különböző részletességű PDF dokumentum generálására képes, különböző üzleti célokra.

### 4.1. Ügyfél PDF
- **Célközönség:** Végfelhasználó ügyfelek.
- **Tartalom:** A lehető legegyszerűbb nézet. Tartalmazza a költségnemeket, de **nem mutatja** sem az egységárakat, sem a soronkénti összesítéseket. Csak a projekt leírását és a nettó végösszeget (az esetleges engedménnyel együtt) jeleníti meg.
- **Cél:** Átlátható, könnyen érthető ajánlat adása anélkül, hogy az árképzés részleteibe belemennénk.

### 4.2. Partner PDF
- **Célközönség:** Alvállalkozók, partnerek, vagy olyan ügyfelek, akik részletesebb bontást kérnek.
- **Tartalom:** Részletes bontást ad a költségekről. Tartalmazza a költségnemeket, mennyiségeket, egységeket, egységárakat és soronkénti összesítéseket. Az egyetlen elrejtett információ a **belső önköltség**.
- **Cél:** Transzparens árazás bemutatása a belső haszonkulcs felfedése nélkül.

### 4.3. Belső PDF
- **Célközönség:** Csak belső használatra (pl. projektvezetés, pénzügy).
- **Tartalom:** A létező legrészletesebb nézet. Minden adatot tartalmaz, beleértve a **belső önköltségi árakat** és az önköltség összesítését is.
- **Cél:** Teljes körű pénzügyi elemzés, profitabilitás számítása és belső jóváhagyási folyamatok támogatása.
