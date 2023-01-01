<template>
  <nav class="pagination is-rounded is-small" role="navigation" aria-label="pagination">
    <ul class="pagination-list">
      <li v-for="page in myPages.value" :key="page.id" @click="handleClick(page.id)">
        <a class="pagination-link " :class="page.id === store.currentPage ? 'is-current' : ''"
          :aria-label="`Goto page ${page.id}`" :aria-current="page.isActive ? 'page' : ''">
          {{ page.id }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<script setup>
/*
  imports
*/

import { defineEmits, reactive } from 'vue'
import { usePlacesStore } from '../stores/places'

/*
  store
*/

const store = usePlacesStore()

/*
  pagination
*/

const myPages = reactive(
  {
    value: [
      {
        id: 1,
        isActive: true
      },
      {
        id: 2,
        isActive: false
      },
      {
        id: 3,
        isActive: false
      },
      {
        id: 4,
        isActive: false
      },
      {
        id: 5,
        isActive: false
      },
      {
        id: 6,
        isActive: false
      },
      {
        id: 7,
        isActive: false
      },
      {
        id: 8,
        isActive: false
      },
      {
        id: 9,
        isActive: false
      },
      {
        id: 10,
        isActive: false
      },
    ]
  }
)

/*
  emits
*/

const emits = defineEmits(['getNewPage'])
const handleClick = (page) => {
  emits('getNewPage', page)
}


</script>