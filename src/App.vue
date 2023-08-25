<script setup lang="ts">
import AddStudentButton from './components/AddStudentButton.vue';
import TabNav from './components/TabNav.vue'
import { RouterView } from 'vue-router';
import StudentFormModal from './components/StudentFormModal.vue';
import { useStudentFormStore } from '@/stores/studentForm'
const studentForm = useStudentFormStore()
</script>

<template>
  <header>
    <div class="container mx-auto font-montserrat">
      <div class="flex w-full">
        <div class="mt-7 ml-auto">
          <AddStudentButton />
        </div>  
      </div>
      <TabNav/>
      <RouterView></RouterView>
      <StudentFormModal v-if="studentForm.showFormModal"></StudentFormModal>
    </div>
  </header>
</template>

<style scoped>
</style>
