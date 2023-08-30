import { defineStore } from 'pinia'
import { type ClassOverview } from '@/types'
import axios from "axios"


export const useClassOverview = defineStore('classOverview', {
    state: () => {
      return {
        classData: {} as ClassOverview,
        loading: true
      }
    },
    //actions meant to mutate store data
    actions: {
        async getClassData(route: string | string[]) {
            const response = await axios.get(`/api/${route}`)
            this.classData = await response.data
            this.loading = false
        },
        setLoading(status: boolean) {
          this.loading = status
        }
    }
})