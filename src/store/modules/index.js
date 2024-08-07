// src/store/modules/index.js

import { useJurnalStores } from './jurnalStore'


// Impor modul-modul lain jika ada

export function useStore() {
    return {
        jurnalStore:useJurnalStores(),
    // Masukkan modul-modul lain di sini jika ada
    }
}
