<template>

    <div class="w-full mx-auto pb-4" v-if="mobile == false">

    <div v-if="getDataList.length != 0">
    <v-card v-for="item in getDataList" :key="item.id" color="#30504E"  variant="" class="m-10 shadow-sm shadow-purple-900/50" >
        
        <div class="w-full flex justify-between">
        <div class="w-2/3">
        <v-card-item>
            <div>
                <div class="text-overline mb-1 text-slate-700">
                    {{ item['Nama Jurnal'] }} ({{ item['Tahun'] }})
                </div>
                <div class="text-h6 mb-1">
                    {{ item['Judul Indonesia'] }}
                </div>
                <div class="text-sm text-slate-500 mb-1">
                <i class="fa-duotone fa-users mr-3"></i> {{ item['Nama Penulis'] }}
                </div>
                <!-- <v-chip class="m-1" color="black" density="compact" v-for="(author, index) in convertToArray(item['Nama Penulis'])" :key="index"><i class="fa-duotone fa-user-visor text-xs mr-1"></i>{{ author }}</v-chip> -->
                <div class="text-caption"><i class="mr-2 fa-duotone fa-language"></i> English </div>
            </div>
        </v-card-item>

        <v-card-actions>
        <v-chip prepend-icon="fa-duotone fa-copyright" variant="tonal" color="black" >
        {{ item['Copyright'] }}
        </v-chip>
        <v-chip prepend-icon="fa-duotone fa-graduation-cap" class="ml-2" variant="tonal" :color="item['Akreditasi'] == 'Sinta 2' ? '#e83e8c' : '#20c997'" >
        {{ item['Akreditasi'] }}
        </v-chip>
        <v-chip prepend-icon="fa-duotone fa-link" class="ml-2" variant="tonal" :color="item['Akreditasi'] == 'Sinta 2' ? '#FF4C51' : '#FF4C51'" >
        <a target="_blank" :href="item['DOI']">DOI</a> 
        </v-chip>
    
        <v-chip prepend-icon="fa-duotone fa-tags" class="ml-2" variant="tonal" color="#8592A3" >
        Vol.{{ item['Volume'] }}
        </v-chip>
        <v-chip prepend-icon="fa-duotone fa-memo-circle-info" class="ml-2" variant="outlined" color="#FFAB00" >
        Issue {{ item['Issue'] }}
        </v-chip>
        </v-card-actions>
        </div>
        <div class="w-1/3 relative">
            <div class="bg-white h-full w-full flex justify-end pt-10">
                <div class="p-2 w-1/2 ">
                    <a @click="store.jurnalStore.viewAbstrak(item['Id'],item['jumlah_abstrak'])" 
                    style="background-color: #30504E;" 
                    class="text-sm  rounded-lg     hover:bg-purple-900  px-2 w-full flex justify-between py-2 text-white" target="_blank" :href="item['Link Abstrak']"><span>Abstrak <i class="fa-duotone fa-rss ml-1 mr-2"></i></span> <span class="border-2 border-slate-200 px-2 rounded-lg"><i class="fa-duotone fa-eye mr-3"></i>{{ item['jumlah_abstrak'] ? item['jumlah_abstrak'] : 0 }}</span></a>
                    <a style="background-color:#76D844"
                    @click="store.jurnalStore.viewDownload(item['Id'],item['jumlah_download'])" class="text-sm  rounded-lg  mt-4 hover:bg-red-900  px-2 w-full flex justify-between py-2 text-white" target="_blank" :href="item['Link Download']"><span>Download <i class="fa-duotone fa-download ml-1"></i></span> <span class="border-2 border-slate-200 px-2 ml-auto rounded-lg"><i class="fa-duotone fa-cloud-arrow-down mr-3"></i> {{ item['jumlah_download'] ? item['jumlah_download'] : 0 }}</span> </a>
                </div>
            </div>
            
        </div>
        </div>
    </v-card>
    </div>

    <div class="" v-else>
        <div class="h-screen flex justify-center items-start mt-48"> 
            <notFound></notFound>
        </div>
    </div>

    
    </div>

    <div v-else>
        
    <div v-if="getDataList.length != 0">
    <v-card v-for="item in getDataList" :key="item.id" color="#30504E"  variant="" class="mx-2 my-3 shadow-sm shadow-purple-900/50" >
        
        <v-card-item>
            <div>
                <div class="text-overline text-xs mb-2 text-slate-700">
                    {{ item['Nama Jurnal'] }} ({{ item['Tahun'] }})
                </div>
                <div class="text-md mb-1">
                    {{ item['Judul Indonesia'] }}
                </div>
                <div class="text-sm text-slate-500 mb-1">
                <i class="fa-duotone fa-users mr-3"></i> {{ item['Nama Penulis'] }}
                </div>
                <!-- <v-chip class="m-1" color="black" density="compact" v-for="(author, index) in convertToArray(item['Nama Penulis'])" :key="index"><i class="fa-duotone fa-user-visor text-xs mr-1"></i>{{ author }}</v-chip> -->
                <div class="text-caption"><i class="mr-2 fa-duotone fa-language"></i> English </div>
            </div>
        </v-card-item>

        <v-card-actions>
        <v-chip prepend-icon="fa-duotone fa-copyright" size="small" variant="tonal" color="black" >
        {{ item['Copyright'] }}
        </v-chip>
        <v-chip prepend-icon="fa-duotone fa-graduation-cap" size="small" class="ml-2" variant="tonal" :color="item['Akreditasi'] == 'Sinta 2' ? '#e83e8c' : '#20c997'" >
        {{ item['Akreditasi'] }}
        </v-chip>
        <v-chip prepend-icon="fa-duotone fa-link" class="ml-2" size="small" variant="tonal" :color="item['Akreditasi'] == 'Sinta 2' ? '#FF4C51' : '#FF4C51'" >
        <a target="_blank" :href="item['DOI']">DOI</a> 
        </v-chip>
        
        <v-chip prepend-icon="fa-duotone fa-tags" size="small" class="ml-2" variant="tonal" color="#8592A3" >
        Vol.{{ item['Volume'] }}
        </v-chip>
        <v-chip prepend-icon="fa-duotone fa-memo-circle-info" size="small" class="ml-2" variant="outlined" color="#FFAB00" >
        Issue {{ item['Issue'] }}
        </v-chip>
        </v-card-actions>
        <div class="flex justify-between">
                    <a @click="store.jurnalStore.viewAbstrak(item['Id'],item['jumlah_abstrak'])" 
                    style="background-color: #30504E;" 
                    class="text-xs  rounded-lg  m-2 hover:bg-purple-900 mt-4 px-2  flex justify-between py-2 text-white" target="_blank" :href="item['Link Abstrak']"><span>Abstrak <i class="fa-duotone fa-rss ml-1 mr-2"></i></span> <span class="border-1 border-slate-200 px-1 rounded-lg">{{ item['jumlah_abstrak'] ? item['jumlah_abstrak'] : 0 }}</span></a>
                    <a style="background-color:#76D844"
                    @click="store.jurnalStore.viewDownload(item['Id'],item['jumlah_download'])" class="text-xs m-2 rounded-lg  mt-4 hover:bg-red-900  px-2  flex justify-between py-2 text-white" target="_blank" :href="item['Link Download']"><span>Download <i class="fa-duotone fa-download ml-1"></i></span> <span class=" px-2 ml-auto rounded-lg"> {{ item['jumlah_download'] ? item['jumlah_download'] : 0 }}</span> </a>
        </div>
 
    
    </v-card>
    </div>

    <div class="" v-else>
        <div class="h-full flex justify-center items-start mt-5"> 
            <notFound></notFound>
        </div>
    </div>

    </div>

</template>

<script setup>
    import {
        inject
    } from 'vue'
    import {
        storeToRefs
    } from 'pinia'
    const store = inject('store')

    import notFound from '@/components/notFound.vue'

    const {
        getDataList
    } = storeToRefs(store.jurnalStore)
    import { useDisplay } from 'vuetify'

    const { mobile } = useDisplay()


    const convertToArray = (authorsString) => {
  if (!authorsString) return []
  return authorsString.split(',').map(author => author.trim())
}
</script>