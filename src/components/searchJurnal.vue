<template>

    <v-text-field
        v-if="mobile == false"
        class="bg-white text-white mx-20  my-5"
        color="primary"
        :loading="isLoading"
        v-model="search"
        @keyup="doSearch"
        @focus="store.jurnalStore.toggleLoadingTrue()"
        @blur="store.jurnalStore.toggleLoadingFalse()"
        append-inner-icon="fa-duotone fa-search"
        density="compact"
        label="Cari jurnal .."
        variant="solo"
        hide-details
        single-line
        loadingColor="primary"
    
    ></v-text-field>

    <v-text-field
        v-else
        class="bg-white text-white mx-5 my-5"
        color="primary"
        :loading="isLoading"
        v-model="search"
        @keyup="doSearch"
        @focus="store.jurnalStore.toggleLoadingTrue()"
        @blur="store.jurnalStore.toggleLoadingFalse()"
        append-inner-icon="fa-duotone fa-search"
        density="compact"
        label="Cari jurnal .."
        variant="solo"
        hide-details
        single-line
        loadingColor="primary"
    
    ></v-text-field>



</template>
<script setup>
    import { storeToRefs } from 'pinia';
    import {inject, ref } from 'vue'
    import { useDisplay } from 'vuetify'

    const { mobile } = useDisplay()
    const store = inject('store');


    const search = ref('')
    const {isLoading} = storeToRefs(store.jurnalStore)
    const doSearch = () =>{
        store.jurnalStore.searchData(search.value);
        
    }
    
</script>