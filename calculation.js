import { state } from './state.js';
import { getInputs } from './ui.js';
import { D } from './utils.js';

// A fő kalkulációs függvény. Végigmegy az összes költségtípuson és kiszámolja az értékeket.
export function calculateCosts() {
    const i = getInputs();
    const r = state.activeRatePackage?.rates;
    if (!r) return { totalHuf: 0, totalCostHuf: 0, breakdown: [], hasCostItems: false };

    let breakdown = [], totalSell = 0, totalCost = 0, hasCostItems = false;
    
    // Segédfüggvény egy új tétel hozzáadásához a költségbontáshoz.
    const add = (label, quantity, unit, priceSell, priceCost, isCostItem) => {
        if (quantity > 0) {
            const totalSellValue = quantity * priceSell;
            const totalCostValue = quantity * priceCost;
            breakdown.push({ label, quantity, unit, costPriceHuf: priceCost, totalCostHuf: totalCostValue, unitPriceHuf: priceSell, totalHuf: totalSellValue, isCostItem });
            totalSell += totalSellValue;
            totalCost += totalCostValue;
            if (isCostItem) hasCostItems = true;
        }
    };

    // Személyi jellegű költségek (óradíjak) számítása.
    const szereloNapok = i.szerelo_munkanap;
    const mernokNapok = i.mernok_munkanap;
    const mernokVezetoNapok = Math.min(szereloNapok, mernokNapok);
    const mernokVezetoFo = mernokVezetoNapok > 0 && i.mernok_fo > 0 ? 1 : 0;
    const szereloVezetoNapok = (i.mernok_fo === 0 && i.szerelo_fo > 0) ? szereloNapok : 0;
    const szereloVezetoFo = szereloVezetoNapok > 0 ? 1 : 0;

    const szereloVezetoHetkoznap = Math.max(0, szereloVezetoNapok - i.szerelo_hetvegi_nap);
    const szereloVezetoHetvege = Math.min(szereloVezetoNapok, i.szerelo_hetvegi_nap);
    add('Szerelésvezető óradíj', szereloVezetoHetkoznap * i.szerelo_munkaora * szereloVezetoFo, 'óra', r.szerelesvezeto_hetkoznap_oradij, r.szerelesvezeto_hetkoznap_oradij, false);
    add('Szerelésvezető óradíj (hétvége)', szereloVezetoHetvege * i.szerelo_munkaora * szereloVezetoFo, 'óra', r.szerelesvezeto_hetvege_oradij, r.szerelesvezeto_hetvege_oradij, false);

    const normSzereloFo = i.szerelo_fo - szereloVezetoFo;
    const normSzereloHetkoznap = szereloNapok - i.szerelo_hetvegi_nap;
    add('Szerelő óradíj', normSzereloFo * normSzereloHetkoznap * i.szerelo_munkaora, 'óra', r.szerelo_hetkoznap_oradij, r.szerelo_hetkoznap_oradij, false);
    add('Szerelő óradíj (hétvége)', normSzereloFo * i.szerelo_hetvegi_nap * i.szerelo_munkaora, 'óra', r.szerelo_hetvege_oradij, r.szerelo_hetvege_oradij, false);

    const normMernokFo = i.mernok_fo - mernokVezetoFo;
    const normMernokHetkoznap = mernokNapok - i.mernok_hetvegi_nap;
    add('Mérnök óradíj', normMernokFo * normMernokHetkoznap * i.mernok_munkaora, 'óra', r.mernok_hetkoznap_oradij, r.mernok_hetkoznap_oradij, false);
    add('Mérnök óradíj (hétvége)', normMernokFo * i.mernok_hetvegi_nap * i.mernok_munkaora, 'óra', r.mernok_hetvege_oradij, r.mernok_hetvege_oradij, false);
    
    const mernokVezetoHetkoznap = Math.max(0, mernokVezetoNapok - i.mernok_hetvegi_nap);
    const mernokVezetoHetvege = Math.min(mernokVezetoNapok, i.mernok_hetvegi_nap);
    add('Mérnök (szerelésvezető)', mernokVezetoHetkoznap * i.mernok_munkaora * mernokVezetoFo, 'óra', r.szerelesvezeto_hetkoznap_oradij, r.szerelesvezeto_hetkoznap_oradij, false);
    add('Mérnök (szerelésvezető, hétvége)', mernokVezetoHetvege * i.mernok_munkaora * mernokVezetoFo, 'óra', r.szerelesvezeto_hetvege_oradij, r.szerelesvezeto_hetvege_oradij, false);

    // Kiküldetési díj
    if (i.location_type === 'kulfold') {
        add('Kiküldetési díj - Szerelő', i.szerelo_fo * szereloNapok, 'nap', r.kikuldeles_dij_szerelo, r.kikuldeles_dij_szerelo, true);
        add('Kiküldetési díj - Mérnök', i.mernok_fo * mernokNapok, 'nap', r.kikuldeles_dij_mernok, r.kikuldeles_dij_mernok, true);
    }

    // Utazási költségek
    const travelTimeInput = D('utazas_ido_ora');
    const travelTimeHours = travelTimeInput.dataset.unit === 'perc' ? (i.utazas_ido_ora / 60) : i.utazas_ido_ora;
    add('Kiszállási óradíj - Szerelő', travelTimeHours * 2 * i.utazas_odautak_szama_szerelo * i.szerelo_fo, 'óra', r.kiszallasi_dij_szerelo, r.kiszallasi_dij_szerelo, false);
    add('Kiszállási óradíj - Mérnök', travelTimeHours * 2 * i.utazas_odautak_szama_mernok * i.mernok_fo, 'óra', r.kiszallasi_dij_mernok, r.kiszallasi_dij_mernok, false);
    add('Jármű km díj', i.utazas_tavolsag_km * 2 * (i.utazas_odautak_szama_szerelo * i.utazas_jarmuvek_szama_szerelo + i.utazas_odautak_szama_mernok * i.utazas_jarmuvek_szama_mernok), 'km', r.km_dij, r.km_dij, false);

    // Szállás és eszköz költségek
    const szallasCost = r.szallas_dij; const szallasSell = szallasCost * (r.szallas_szorzo || 1);
    add('Szállás költség', i.szerelo_szallas_ejszaka * i.szerelo_fo + i.mernok_szallas_ejszaka * i.mernok_fo, 'éj', szallasSell, szallasCost, true);
    
    const emeloNapiCost = r.emelogep_napidij; const emeloNapiSell = emeloNapiCost * (r.emelogep_szorzo || 1);
    add('Emelőgép napidíj', i.emelogep_db * i.emelogep_napok, 'nap', emeloNapiSell, emeloNapiCost, true);
    
    const emeloSzallCost = r.emelogep_szallitas_dij; const emeloSzallSell = emeloSzallCost * (r.emelogep_szorzo || 1);
    add('Emelőgép szállítás', i.emelogep_szallitasok * 2, 'alk', emeloSzallSell, emeloSzallCost, true);

    // Egyéb költségek
    state.otherCosts.forEach(c => { if (c.amount > 0 && c.description) add(c.description, c.quantity, 'tétel', c.amount, c.amount, false); });

    return { totalHuf: totalSell, totalCostHuf: totalCost, breakdown, hasCostItems };
}