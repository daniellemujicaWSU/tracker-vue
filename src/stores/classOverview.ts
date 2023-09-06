import { defineStore } from 'pinia'
import { type ClassOverview } from '@/types'
import axios from "axios"
import moment from 'moment'


export const useClassOverview = defineStore('classOverview', {
    state: () => {
      return {
        currentclassData: {} as ClassOverview,
        classData: {
          "MS1": {} as ClassOverview,
          "MS2": {} as ClassOverview,
          "MS3": {} as ClassOverview,
          "MS4": {} as ClassOverview,
        },
        classDataKey: '' as string | undefined,
        loading: true,
        graduatingYear: {
          "MS4": moment().quarter() > 2 ? moment().year() + 1 : moment().year(),
          "MS3": moment().quarter() > 2 ? moment().year() + 2 : moment().year() + 1,
          "MS2": moment().quarter() > 2 ? moment().year() + 3 : moment().year() + 2,
          "MS1": moment().quarter() > 2 ? moment().year() + 4 : moment().year() + 3
        }
      }
    },
    //actions meant to mutate store data
    actions: {
        async getClassData(route: string | string[]) {
          this.loading = true
          const prop = route.toString()
          this.classDataKey = this.setClassYear(prop)

          if(Object.keys(this.classData[this.classDataKey as keyof typeof this.classData]).length === 0) {
            const response = await axios.get(`/api/loa/get-class/${route}`)
            this.classData[this.classDataKey as keyof typeof this.classData] = await response.data
            this.currentclassData = this.classData[this.classDataKey as keyof typeof this.classData]
          } else {
            this.currentclassData = this.classData[this.classDataKey as keyof typeof this.classData]
          }  
          this.loading = false
        },
        setLoading(status: boolean) {
          this.loading = status
        },
        setClassYear(prop: string) {
          return Object.keys(this.graduatingYear).find((key) => this.graduatingYear[key as keyof typeof this.graduatingYear] === parseInt(prop))
        },
        setCurrentYear(year: string) {
          const splitYears = year.split('-')
          const from = moment( `8-01-${splitYears[0]}`, 'MM-DD-YYYY')
          const to = moment( `6-30-${splitYears[1]}`, 'MM-DD-YYYY')
          const current =  moment( `${moment().month()}-${moment().day()}-${moment().year()}`, 'MM-DD-YYYY')
          return moment(current).isBetween(from, to)
        },
    }
})