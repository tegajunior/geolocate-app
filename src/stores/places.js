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
  getters: {
    getPagesCount: (state) => {
      let arrayOfPlaces = state.places
      switch (state.currentPage) {
        case 1:
          arrayOfPlaces = arrayOfPlaces.slice(0, 10)
          break
        case 2:
          arrayOfPlaces = arrayOfPlaces.slice(10, 20)
          break
        case 3:
          arrayOfPlaces = arrayOfPlaces.slice(20, 30)
          break
        case 4:
          arrayOfPlaces = arrayOfPlaces.slice(30, 40)
          break
        case 5:
          arrayOfPlaces = arrayOfPlaces.slice(40, 50)
          break
        case 6:
          arrayOfPlaces = arrayOfPlaces.slice(50, 60)
          break
        case 7:
          arrayOfPlaces = arrayOfPlaces.slice(60, 70)
          break
        case 8:
          arrayOfPlaces = arrayOfPlaces.slice(70, 80)
          break
        case 9:
          arrayOfPlaces = arrayOfPlaces.slice(80, 90)
          break
        case 10:
          arrayOfPlaces = arrayOfPlaces.slice(90, 100)
          break
        default:
          break
      }
      return arrayOfPlaces
    }
  }
})
