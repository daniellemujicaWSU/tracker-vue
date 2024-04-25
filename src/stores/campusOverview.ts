import { defineStore } from 'pinia'
// import { type CampusOverview } from '@/types'
import axios from "axios"
// declare const window: any

export const useCampusOverview = defineStore('campusOverview', {
  
    state: () => {
      
      return {
        campusData: [],
        loading: true,
        apiURl: import.meta.env.DEV ? '/api/loa/campus-overview' : '/loa/api/auth/overview'
      }
    },
    //actions meant to mutate store data
    actions: {
        async getCampusData() {
          // const response = await axios.get(`/api/loa/campus-overview`)
          const response = await axios.get(this.apiURl)
          console.log(import.meta.env.PROD, 'are we in prod')
          this.campusData = await response.data
          this.loading = false
        }
    }
})