<script setup lang="ts">
import { inject } from 'vue'
import AddStudentButton from './components/AddStudentButton.vue';
import TabNav from './components/TabNav.vue'
import { RouterView } from 'vue-router';
import StudentFormModal from './components/StudentFormModal.vue';
import { useStudentFormStore } from '@/stores/studentForm'
const studentForm = useStudentFormStore()
const userPermission = inject('userPermission')
const hasPermission = userPermission === 'true'
</script>

<template>
  <header>
    <div class="container mx-auto font-montserrat">
      <div class="flex w-full">
        <div class="mt-7 ml-auto">
          <AddStudentButton v-if="hasPermission"/>
        </div>  
      </div>
      <TabNav/>
      <RouterView></RouterView>
      <Transition>
        <StudentFormModal v-if="studentForm.showFormModal"></StudentFormModal>
      </Transition>
    </div>
  </header>
</template>

<style scoped>
  .v-enter-active,
  .v-leave-active {
    transition: opacity 0.3s ease;
  }

  .v-enter-from,
  .v-leave-to {
    opacity: 0;
  }
</style>
