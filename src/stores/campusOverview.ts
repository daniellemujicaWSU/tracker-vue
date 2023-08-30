import { defineStore } from 'pinia'
import { type AllCampusOverview } from '@/types'

export const useCampusOverview = defineStore('campusOverview', {
    state: () => {
      return {
        campusData: {} as AllCampusOverview,
      }
    },
    //actions meant to mutate store data
    actions: {
        async getCampusData() {
            const response = await fetch(`/api/campusOverview`)
            this.campusData = await response.json()
            console.log(this.campusData, ' in store')
        },
    }
})