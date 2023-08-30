import { defineStore } from 'pinia'
import { type AllCampusOverview } from '@/types'
import axios from "axios"

export const useCampusOverview = defineStore('campusOverview', {
    state: () => {
      return {
        campusData: {} as AllCampusOverview,
        loading: true
      }
    },
    //actions meant to mutate store data
    actions: {
        async getCampusData() {
            const response = await axios.get(`/api/campusOverview`)
            this.campusData = await response.data
            this.loading = false
        }
    }
})