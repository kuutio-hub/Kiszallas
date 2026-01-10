
# Javaslatok a Kalkulátor Logikai Ellenőrzéseire

Ez a dokumentum olyan lehetséges logikai ellenőrzéseket és figyelmeztetéseket vázol fel, amelyek beépítésével a kalkulátor még pontosabbá és a felhasználói hibákkal szemben ellenállóbbá tehető.

## 1. Járművek és Személyzet Aránya

- **Szabály:** A kiszálláshoz rendelt járművek száma nem haladhatja meg a kiszálló személyzet (szerelők vagy mérnökök) létszámát. Egy ember nem tud két autót vezetni egyszerre.
- **Javasolt Működés:** Ha a felhasználó több járművet ad meg, mint ahány ember utazik az adott csoportban (pl. 3 járművet 2 szerelőhöz), a rendszer egy **nem-blokkoló figyelmeztetést** jelenít meg az érintett mező mellett.
- **Figyelmeztetés Szövege:** _"Figyelem: A járművek száma meghaladja a személyzet létszámát. Biztosan helyesek az adatok?"_
- **Indoklás:** Előfordulhatnak speciális esetek (pl. tréler, anyagbeszállító jármű), de az esetek többségében ez egy elgépelésre utalhat.

## 2. Munkanapok és Hétvégi Napok Konzisztenciája

- **Szabály:** A hétvégi napok száma nem lehet több, mint az összes munkanap.
- **Javasolt Működés:** Ez egy **blokkoló hiba**. Ha a felhasználó egy olyan értéket ír be a "hétvégi nap" mezőbe, ami magasabb, mint a "munkanapok" mezőben lévő érték, a mező pirosra vált, és egy hibaüzenet jelenik meg alatta, a kalkuláció pedig nem frissül, amíg a hiba fennáll.
- **Hibaüzenet Szövege:** _"Hiba: A hétvégi napok száma nem lehet több, mint az összes munkanap."_
- **Indoklás:** Ez egy egyértelmű logikai ellentmondás, amit mindenképpen javítani kell a helyes számításhoz.

## 3. Szállás és Munkanapok Aránya

- **Szabály:** A szállással töltött éjszakák száma általában kevesebb, mint a munkanapok száma (pl. egy 5 napos munkához tipikusan 4 éjszaka szállás tartozik).
- **Javasolt Működés:** Ha a szállások száma eléri vagy meghaladja a munkanapok számát, a rendszer egy **nem-blokkoló figyelmeztetést** jelenít meg.
- **Figyelmeztetés Szövege:** _"Figyelem: A szállással töltött éjszakák száma szokatlanul magas a munkanapok számához képest."_
- **Indoklás:** Bár lehetséges, hogy az utazás miatt van szükség plusz egy éjszakára, ez a figyelmeztetés segíthet elkerülni a téves adatbevitelt.

## 4. Utazási Idő és Távolság Aránya

- **Szabály:** Az utazási időnek és a távolságnak reális arányban kell állnia egymással.
- **Javasolt Működés:** A rendszer kiszámol egy átlagsebességet (`távolság / idő`). Ha ez az érték egy megadott küszöbérték alá esik (pl. 30 km/h) vagy fölé (pl. 150 km/h), egy **nem-blokkoló figyelmeztetés** jelenik meg.
- **Figyelmeztetés Szövege:** _"Figyelem: A megadott utazási idő aránytalanul hosszúnak/rövidnek tűnik a távolsághoz képest."_
- **Indoklás:** Segít kiszűrni az elgépeléseket (pl. óra helyett percben megadott érték, vagy egy plusz nulla a távolságnál).
