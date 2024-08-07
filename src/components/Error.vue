<template>
  <div class="w-1/2 mx-auto flex justify-center">
    <v-alert
      v-model="alertVisible"
      border="start"
      close-label="Close Alert"
      icon="fa-duotone fa-circle-exclamation"
      type="error"
      title="TrackingID Salah!"
      variant="tonal"
      close-icon="fas fa-remove"
      closable
    >
      Nomor TrackingID <span class="font-bold text-xl">{{ searchName }}</span> tidak ditemukan. 
    </v-alert>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';

const props = defineProps({
  alert: {
    type: Boolean,
    default: false,
  },
  search: {
    default: '',
  },
});

const alertVisible = ref(props.alert);
const searchName = ref(props.search);

const resetState = () => {
  alertVisible.value = false;
  searchName.value = '';
};

// Watch for changes to props.alert and update alertVisible accordingly
watch(
  () => props.alert,
  (newVal) => {
    alertVisible.value = newVal;
  }
);

// Watch for changes to alertVisible and reset the state when it becomes false
watch(
  () => alertVisible.value,
  (newVal) => {
    if (!newVal) {
      alertVisible.value =  false;
    }
  }
);

// Watch for changes to props.search and update searchName accordingly
watch(
  () => props.search,
  (newVal) => {
    searchName.value = newVal;
  }
);
</script>
