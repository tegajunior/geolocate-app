import { defineStore } from 'pinia'

export const usePlacesStore = defineStore({
  id: 'placesStore',
  state: () => {
    return {
      places: [],
      currentPage: 1,
      pages: [
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
      ],
      errorObj: {
        errorType: 1,
        isError: false,
        errorText: ''
      }
    }
  },
  actions: {
    updatePlaces(payload) {
      this.places = payload
    },
    updateCurrentPage(payload) {
      this.currentPage = payload
    },
    updateErrorObject(payload) {
      this.errorObj = payload
    }
  },
})
