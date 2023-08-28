import { defineStore } from 'pinia'
import { type ClassOverview, type History } from '@/types'

export const useApiCalls = defineStore('apiCalls', {
    state: () => {
      return {
        classData: {} as ClassOverview,
        history: {} as History,
      }
    },
    //actions meant to mutate store data
    actions: {
        async getClassData(route: string | string[]) {
            const response = await fetch(`/api/${route}`)
            this.classData = await response.json()
        },
        async getHistoryData() {
            const response = await fetch(`/api/history`)
            this.history = await response.json()
        },
    }
  })