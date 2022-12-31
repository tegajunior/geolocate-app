<template>
  <div class="modal is-active p-4">
    <div class="modal-background"></div>
    <div class="modal-card" ref="modalCardRef">
      <header class="modal-card-head">
        <p class="modal-card-title">{{ place.poi.name }}</p>
        <button class="delete is-danger" aria-label="close" @click="closeModal"></button>
      </header>
      <section class="modal-card-body">
        <p class="is-capitalized"><strong>Address:</strong> {{ place.address.freeformAddress }}</p>
        <p class="is-capitalized"><strong>Category</strong>: {{ place.poi.categories.join(', ') }}</p>

      </section>
      <footer class="modal-card-foot is-justify-content-flex-end">
        <p><strong>Phone:</strong> {{ place.poi.phone ? place.poi.phone : 'N/A' }}</p>
      </footer>
    </div>
  </div>
</template>

<script setup>
/*
  imports
*/

import { defineProps, defineEmits, ref } from 'vue'
import { onClickOutside } from '@vueuse/core'

/*
  props
*/

const props = defineProps({
  place: {
    type: Object,
    required: true
  },
  modelValue: {
    type: Boolean,
    default: false
  }
})

/*
  emits
*/

const emits = defineEmits(['update:modelValue'])

/*
  modal
*/

const modalCardRef = ref(null)
onClickOutside(modalCardRef, () => {
  emits('update:modelValue', false)
})
const closeModal = () => {
  emits('update:modelValue', false)
}
</script>