<template>
  <div class="notification " :class="error.errorType === 2 ? 'is-danger' : 'is-info'">
    <button class="delete" @click="emits('update:modelValue', false)"></button>
    {{ error.errorText }}
  </div>
</template>

<script setup>
// imports
import { defineProps, defineEmits } from 'vue';

// props
const props = defineProps({
  error: {
    required: true,
    type: Object
  },
  modelValue: {
    type: Boolean,
    default: false
  }
})

// emits
const emits = defineEmits(['update:modelValue'])
</script>