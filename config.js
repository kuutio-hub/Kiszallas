// Állandó a díjtételek címkéinek tárolására. Ez javítja a karbantarthatóságot.
export const RATE_KEY_LABELS = {
    szerelo_hetkoznap_oradij: "Óradíj - Szerelő",
    szerelo_hetvege_oradij: "Óradíj - Szerelő (hétvége)",
    szerelesvezeto_hetkoznap_oradij: "Óradíj - Szerelésvezető",
    szerelesvezeto_hetvege_oradij: "Óradíj - Szerelésvezető (hétvége)",
    mernok_hetkoznap_oradij: "Óradíj - Mérnök",
    mernok_hetvege_oradij: "Óradíj - Mérnök (hétvége)",
    kiszallasi_dij_szerelo: "Kiszállási óradíj - Szerelő",
    kiszallasi_dij_mernok: "Kiszállási óradíj - Mérnök",
    kikuldeles_dij_szerelo: "Kiküldetési díj - Szerelő",
    kikuldeles_dij_mernok: "Kiküldetési díj - Mérnök",
    km_dij: "Kilométerdíj",
    szallas_dij: "Szállás önköltség",
    szallas_szorzo: "Szállás továbbértékesítés",
    emelogep_napidij: "Emelőgép napidíj",
    emelogep_szallitas_dij: "Emelőgép szállítás",
    emelogep_szorzo: "Eszköz továbbértékesítés"
};

// A felhasználói felületen dinamikusan generált beviteli mezők konfigurációja.
export const INPUT_CONFIG = {
    szerelo: [{ id: 'szerelo_fo', label: 'Szerelők (fő)' }, { id: 'szerelo_munkaora', label: 'Napi munkaóra' }, { id: 'szerelo_munkanap', label: 'Munkanapok' }, { id: 'szerelo_hetvegi_nap', label: 'Ebből hétvégi nap' }, { id: 'szerelo_szallas_ejszaka', label: 'Szállás (éj)' }, { id: 'utazas_odautak_szama_szerelo', label: 'Kiszállások (db)' }, { id: 'utazas_jarmuvek_szama_szerelo', label: 'Járművek (db)' }, { id: 'location_type', label: 'Munkavégzés helye', type: 'select', options: [{ value: 'belfold', text: 'Belföld' }, { value: 'kulfold', text: 'Külföld' }] }],
    mernok: [{ id: 'mernok_fo', label: 'Mérnökök (fő)' }, { id: 'mernok_munkaora', label: 'Napi munkaóra' }, { id: 'mernok_munkanap', label: 'Munkanapok' }, { id: 'mernok_hetvegi_nap', label: 'Ebből hétvégi nap' }, { id: 'mernok_szallas_ejszaka', label: 'Szállás (éj)' }, { id: 'utazas_odautak_szama_mernok', label: 'Kiszállások (db)' }, { id: 'utazas_jarmuvek_szama_mernok', label: 'Járművek (db)' }],
    utazas: [{ id: 'utazas_tavolsag_km', label: 'Távolság (km, oda)' }, { id: 'utazas_ido_ora', label: 'Utazási idő (<span class="travel-unit-toggle">óra</span>, oda)', unit: 'óra' }],
    emelogep: [{ id: 'emelogep_db', label: 'Emelőgépek (db)' }, { id: 'emelogep_napok', label: 'Napok száma' }, { id: 'emelogep_szallitasok', label: 'Szállítások (oda-vissza)' }]
};
