import { defineStore } from 'pinia'
import { type History } from '@/types'
import axios from "axios"

export const useHistory = defineStore('history', {
    state: () => {
      return {
        students: {} as History,
        loading: true
      }
    },
    //actions meant to mutate store data
    actions: {
        async getHistoryData() {
            const response = await axios.get(`/api/history`)
            this.students = await response.data
            this.loading = false
        },
    }
  })