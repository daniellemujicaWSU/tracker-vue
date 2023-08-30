import { defineStore } from 'pinia'
import { type History } from '@/types'

export const useHistory = defineStore('history', {
    state: () => {
      return {
        students: {} as History,
      }
    },
    //actions meant to mutate store data
    actions: {
        async getHistoryData() {
            const response = await fetch(`/api/history`)
            this.students = await response.json()
        },
    }
  })