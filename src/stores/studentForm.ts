import { defineStore } from 'pinia'
import { type Student } from '@/types'

export const useStudentFormStore = defineStore('studentForm', {
  state: () => {
    return {
      showFormModal: false,
      studentData: {} as Student,
    }
  },
  //actions meant to mutate store data
  actions: {
    showForm(hasStudent: boolean) {
      hasStudent ? '' : this.studentData = {} as Student
      this.showFormModal = !this.showFormModal
    },
    editStudent(student: Student) {
      this.studentData = student
      this.showForm(true)
    },
    cancelEdit() {
      console.log('cancel edit')
      this.studentData = {} as Student
      this.showForm(false)
    }
  }
})