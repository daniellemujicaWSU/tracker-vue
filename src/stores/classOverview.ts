import { defineStore } from 'pinia'
import { type ClassOverview } from '@/types'

export const useClassOverview = defineStore('classOverview', {
    state: () => {
      return {
        classData: {} as ClassOverview,
      }
    },
    //actions meant to mutate store data
    actions: {
        async getClassData(route: string | string[]) {
            const response = await fetch(`/api/${route}`)
            this.classData = await response.json()
        },
    }
})