<template>

  <v-layout class="rounded-md" >
    <v-app-bar 
    color="#30504E"
    title="Pustaka Rujukan Mahasiswa"
    >
      <template v-slot:prepend>
      <v-app-bar-nav-icon><v-img :src="Logo" width="20"></v-img></v-app-bar-nav-icon>
      </template>

      <template v-slot:append v-if="mobile == false">
          <v-btn variant="text" class="mr-2" append-icon="fa-duotone fa-home" @click="backHome()">Web FFarmasi</v-btn>
        </template>
        <template v-slot:append v-else>
         
          <v-btn variant="text"  icon="fa-duotone fa-home" @click="backHome()" ></v-btn>

        </template>
    </v-app-bar>

    <!-- <v-navigation-drawer class="bg-deep-blue">   
    </v-navigation-drawer>

    <v-navigation-drawer class="bg-slate-300" location="right">

    </v-navigation-drawer> -->

    <v-main color="#E7E7FF" v-if="mobile == false" style="min-height: 800px; background-color:#E5E8FC;">
      <div class="w-4/5 mx-auto flex justify-center">
          <searchJurnal></searchJurnal>      
      </div>
      <v-sheet  class="w-4/5 flex justify-center mx-auto" elevation="0">
        <div class="flex flex-row">
          <div class="w-1/4 px-10 py-10">
            <a href="https://www.scimagojr.com/journalsearch.php?q=21100867470&amp;tip=sid&amp;exact=no" target="_blank" title="SCImago Journal &amp; Country Rank"><img border="0" src="https://www.scimagojr.com/journal_img.php?id=21100867470" alt="SCImago Journal &amp; Country Rank"  /></a>
          </div>
          <div class="w-1/4 py-10">
            <a href="https://www.scimagojr.com/journalsearch.php?q=21101040666&amp;tip=sid&amp;exact=no" target="_blank" title="SCImago Journal &amp; Country Rank"><img border="0" src="https://www.scimagojr.com/journal_img.php?id=21101040666" alt="SCImago Journal &amp; Country Rank"  /></a>
          </div>
        </div>
        
        <FilterJurnal></FilterJurnal>
        <CardJurnal></CardJurnal>
      </v-sheet>
    </v-main>

    <v-main color="#E7E7FF" v-if="mobile == true" style="min-height: 800px; background-color:#E7E7FF;">
      <div class="w-full mx-auto flex justify-center">
          <searchJurnal></searchJurnal>      
      </div>
      <v-sheet  class="w-full flex justify-center mx-auto" elevation="10">
        <div class="w-1/4 px-20 py-10">
        <a href="https://www.scimagojr.com/journalsearch.php?q=21100934559&amp;tip=sid&amp;exact=no" title="SCImago Journal &amp; Country Rank"><img border="0"  src="https://www.scimagojr.com/journal_img.php?id=21100934559" alt="SCImago Journal &amp; Country Rank"  /></a>
      </div>
        <FilterJurnal></FilterJurnal>
        <CardJurnal></CardJurnal>
      </v-sheet>
    </v-main>
  </v-layout>

</template>

<script setup>
import dayjs from 'dayjs';
import { inject,ref, onMounted } from 'vue';
import Logo from '@/assets/logo-fkm.png';
import Error from '@/components/Error.vue';
import { storeToRefs } from 'pinia';
import CardJurnal from '@/components/CardJurnal.vue';
import searchJurnal from '@/components/searchJurnal.vue';
import FilterJurnal from '@/components/FilterJurnal.vue';
import TrackNot from '@/assets/detective-rj.png';
import { useDisplay } from 'vuetify'

    const { mobile } = useDisplay()

const store = inject('store');

const { getDataList,getPageInfo } = storeToRefs(store.jurnalStore)


const backHome = () =>{
  window.location.href = 'https://farmasi.unej.ac.id/'
}
onMounted(() => {
  store.jurnalStore.fetchData();
});
</script>

<style scoped>

input:focus::placeholder {
  font-size: 16px; 
}
</style>
