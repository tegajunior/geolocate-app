<template>
  <a class="panel-block" @click="modals.StoresModal = true">
    {{ place.poi.name }}
  </a>
  <StoresModal v-if="modals.StoresModal" :place="place" v-model="modals.StoresModal" />
</template>

<script setup>
/*
  imports
*/

import { defineProps, reactive } from 'vue'
import StoresModal from './StoreModals.vue'

/*
  props
*/

const props = defineProps({
  place: {
    type: Object,
    required: true
  }
})

/*
  modal
*/

const modals = reactive({
  StoresModal: false
})

</script>