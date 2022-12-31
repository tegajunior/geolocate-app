<template>
  <div class="container ml-6 mt-6 mr-6">
    <h1 class="title is-size-4-mobile is-size-2-tablet">We Always Deliver!!</h1>
    <nav class="panel is-info" v-if="!errorObj.isError">
      <p class="panel-heading">
        Nearby Stores
      </p>
      <StoreVue v-for="item in store.getPagesCount" :key="item" :place="item" v-if="!isLoading" />
      <progress class="progress is-small is-primary" max="100" v-if="isLoading">15%</progress>
    </nav>
    <PaginationVue v-if="!isLoading && !hidePagination" @get-new-page="getNewPage" />
    <NotificationVue v-if="errorObj.isError" :error="errorObj" v-model="errorObj.isError" />
  </div>

</template>

<script setup>
/*
  imports
*/
import { onMounted, ref, reactive } from 'vue'
import axios from 'axios'
import { usePlacesStore } from '../stores/places'

import StoreVue from '../components/Store.vue'
import NotificationVue from '../components/Notification.vue'
import PaginationVue from '../components/Pagination.vue'

const apiKey = 'NGndxGqMBy3xc3bCQhpHq7H5sVfwymGX'

/*
  store
*/
const store = usePlacesStore()

/*
  non reactive data
*/
let lat, lon;


/*
  geolocation
*/
onMounted(() => {
  if (navigator.geolocation) navigator.geolocation.getCurrentPosition(getLocations, handleErrors, { enableHighAccuracy: true, maximumAge: 10000 })

})
const getLocations = async position => {
  lat = position.coords.latitude;
  lon = position.coords.longitude;
  if (lat && lon) {
    getNearbyPlaces()
  }
}

const getNearbyPlaces = (page = store.currentPage) => {
  isLoading.value = true
  axios.get(`https://api.tomtom.com/search/2/nearbySearch/.json?limit=100&key=${apiKey}&lat=${lat}&lon=${lon}`).then(
    response => {
      store.updatePlaces(response.data.results)
      isLoading.value = false
      hidePagination.value = false
    }
  ).catch(error => {
    errorObj.isError = true;
    errorObj.errorText = `${error.message}`
    errorObj.errorType = 2
    isLoading.value = false
  })
}
/*
  error handling
*/
const hidePagination = ref(true)

const isLoading = ref(false)
const errorObj = reactive({
  isError: false,
  errorText: '',
  errorType: 1
})
const handleErrors = error => {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      errorObj.isError = true
      errorObj.errorText = 'User denied the request for Geolocation.'
      break
    case error.POSITION_UNAVAILABLE:
      errorObj.isError = true
      errorObj.errorText = 'Location information is unavailable.'
      break
    case error.TIMEOUT:
      errorObj.isError = true
      errorObj.errorText = 'The request to get user location timed out.'
      break
    case error.UNKNOWN_ERROR:
      errorObj.isError = true
      errorObj.errorTexterrorText = 'An unknown error occurred.'
      errorObj.errorType = 2
      break
  }
}

/*
  pagination
*/
const getNewPage = (page) => {
  if (page === store.currentPage) {
    return
  }
  store.updateCurrentPage(page)
}
</script>