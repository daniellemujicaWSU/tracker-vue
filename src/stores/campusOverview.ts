import { defineStore } from 'pinia'
import { type AllCampusOverview } from '@/types'
import axios from "axios"
declare const window: any

export const useCampusOverview = defineStore('campusOverview', {
  
    state: () => {
      
      return {
        campusData: {} as AllCampusOverview,
        loading: true,
        api: window.apiUrl
      }
    },
    //actions meant to mutate store data
    actions: {
        async getCampusData() {
            const response = await axios.get(this.api)
            this.campusData = await response.data.campuses
            this.loading = false
            console.log(this.campusData)
        }
    }
})