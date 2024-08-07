<template>
<div class="flex justify-end w-full pt-10 ml-10" v-if="mobile == false">
<div class="w-1/5">
    <v-select  
        label="-- Sort By --"
        color="primary"
        density="compact"
        @update:modelValue="updateSort"
        v-model="sort"
        class=""
        :items="[2020,2021,2022,2023,2024,'Scopus','Sinta 1', 'Sinta 2', 'Sinta 3', 'Sinta 4', 'Sinta 5', 'Sinta 6']"
        variant="solo"
    ></v-select>
    </div>
    <div class="w-1/5 ml-4 ">
    <v-select 
        color="primary"
        @update:modelValue="updateLimit"
        v-model="limit"
        density="compact"
        label="-- Page --"
        class=""
        :items="['10', '20', '30']"
        variant="solo"
    ></v-select>
    </div>

    <div class="w-full flex justify-around pt-10">
    <button @click.prevent="store.jurnalStore.prevPage()" class=""><i class="fa-duotone fa-backward mr-1"></i> Prev</button>
    <button class=""><i class="fa-duotone fa-filter mr-1"></i><v-chip variant="elevated" color="#30504E">Total Jurnal : {{ getPageInfo.totalRows }}</v-chip>  <v-chip variant="elevated" color="#30504E">Page : {{ getPageInfo.page }}</v-chip> <v-chip variant="elevated" class="text-white" color="#28CCEE">Total Item : {{ getPageInfo.pageSize }}</v-chip></button>
    <button @click.prevent="store.jurnalStore.nextPage()"><i class="fa-duotone fa-forward mr-1"></i> Next</button>
    </div>
</div>
<div class=" w-full mb-10" v-else>
    <div class="w-full flex justify-between">
    <div class="w-1/4 ml-4">
    <v-select  
        label="-- Sort By --"
        color="primary"
        density="compact"
        class="text-xs"
        @update:modelValue="updateSort"
        v-model="sort"
        :items="[2020,2021,2022,2023,2024,'Scopus','Sinta 1', 'Sinta 2', 'Sinta 3', 'Sinta 4', 'Sinta 5', 'Sinta 6']"
        variant="solo"
    ></v-select>
    </div>
    <div class="w-1/4 mr-4 ">
    <v-select 
        color="primary"
        @update:modelValue="updateLimit"
        v-model="limit"
        density="compact"
        label="-- Page --"
        class=""
        :items="['10', '20', '30']"
        variant="solo"
    ></v-select>
    </div>
    </div>

    <div class="w-full flex justify-around pt-10">
    <button @click.prevent="store.jurnalStore.prevPage()" class=""><i class="fa-duotone fa-backward mr-1"></i> Prev</button>
    <button class=""><i class="fa-duotone fa-filter mr-1"></i><v-chip size="small" variant="elevated" density="compact" color="#30504E">Total Jurnal : {{ getPageInfo.totalRows }}</v-chip>  <v-chip size="small" density="compact" variant="elevated" color="#30504E">Page : {{ getPageInfo.page }}</v-chip> <v-chip size="small" variant="elevated" density="compact" class="text-white" color="#28CCEE">Total Item : {{ getPageInfo.pageSize }}</v-chip></button>
    <button @click.prevent="store.jurnalStore.nextPage()"><i class="fa-duotone fa-forward mr-1"></i> Next</button>
    </div>
</div>
</template>

<script setup>
import { inject, ref, onMounted, watch } from 'vue'
import { storeToRefs } from 'pinia'

const store = inject('store')
const { jurnalStore } = store
const { getLimit, getPageInfo,getSort } = storeToRefs(jurnalStore)
const limit = ref(getLimit.value)
const sort = ref(getSort.value);

import { useDisplay } from 'vuetify'

    const { mobile } = useDisplay()


watch(getLimit, (newLimit) => {
    limit.value = newLimit
})

watch(getSort, (newSort) => {
    sort.value = newSort
})



const updateLimit = (newLimit) => {
    limit.value = newLimit
    jurnalStore.setPage(newLimit)
}

const updateSort = (newSort) => {
    sort.value = newSort
    jurnalStore.sortData(newSort)
}

onMounted(() => {
    limit.value = getLimit.value
    sort.value = getSort.value
})
</script>
