import { defineStore } from 'pinia'
import { type Student, type StudentList } from '@/types'

export const useStudentFormStore = defineStore('studentForm', {
  state: () => {
    return {
      showFormModal: false,
      studentData: {} as Student,
      studentNamesList: {} as StudentList
    }
  },
  //actions meant to mutate store data
  actions: {
    showForm(hasStudent: boolean) {
      if(!hasStudent) {
        this.studentData = {} as Student
        this.getStudentNames().then(() => { this.showFormModal = !this.showFormModal })
      }
      else if(hasStudent) {
        this.showFormModal = !this.showFormModal
      }  
    },
    async getStudentNames() {
      const response = await fetch(`/api/studentNames`)
      return this.studentNamesList = await response.json()
    },
    editStudent(student: Student) {
      this.studentData = student
      this.showForm(true)
    },
    async updateStudent(student: Student) {
      console.log(student, ' in studentForm store')
      //create or update student
    },
    cancelEdit() {
      this.studentData = {} as Student
      this.showForm(false)
    }
  },

})