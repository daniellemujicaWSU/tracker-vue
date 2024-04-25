import { defineStore } from 'pinia'
import { type ClassOverview } from '@/types'
import axios from "axios"
import moment from 'moment'
// declare const window: any


export const useClassOverview = defineStore('classOverview', {
    state: () => {
      return {
        allClassData: [],
        currentclassData: {} as ClassOverview,
        CampusColor: [
          {campus: "Everett", border: "border-everett"},
          {campus: "Spokane", border: "border-spokane"},
          {campus: "Tri-Cities", border: "border-tricities"},
          {campus: "Vancouver", border: "border-vancouver"}
        ],
        classData: {},
        classDataKey: '' as string | undefined,
        loading: true,
        academicYear: {
          "MS4": moment().quarter() > 2 ? moment().year() + 1 : moment().year(),
          "MS3": moment().quarter() > 2 ? moment().year() + 2 : moment().year() + 1,
          "MS2": moment().quarter() > 2 ? moment().year() + 3 : moment().year() + 2,
          "MS1": moment().quarter() > 2 ? moment().year() + 4 : moment().year() + 3
        },
        apiURl: import.meta.env.DEV ? '/api/loa/get-class/' : '/loa/api/auth/classof?year='
      }
    },
    //actions meant to mutate store data
    actions: {
        async getClassData(route: string | string[]) {
          this.loading = true
          const response = await axios.get(`${this.apiURl}${route}`)
          this.currentclassData = response.data
          this.loading = false
        },
        setLoading(status: boolean) {
          this.loading = status
        },
        setClassYear(prop: string) {
          return Object.keys(this.academicYear).find((key) => this.academicYear[key as keyof typeof this.academicYear] === parseInt(prop))
        },
        setCurrentYear(year: string) {
          const splitYears = year.split('/')
          const from = moment( `08-01-${splitYears[0]}`, 'MM-DD-YYYY')
          const to = moment( `06-30-${splitYears[1]}`, 'MM-DD-YYYY')
          return moment().isBetween(from, to)
        },
        setCampusColor(campus: any) {
            const borderColor = this.CampusColor.filter(el => el.campus === campus)
            return borderColor[0]?.border
        }
    }
})
