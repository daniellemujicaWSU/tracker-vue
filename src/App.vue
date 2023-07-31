<script setup lang="ts">
import AddStudentButton from './components/AddStudentButton.vue';
import TabNav from './components/TabNav.vue'
import { RouterView } from 'vue-router';

</script>

<template>
  <header>
    <div class="container mx-auto font-montserrat">
      <div class="flex w-full">
        <div class="mt-7 ml-auto">
          <AddStudentButton/>
        </div>  
      </div>
      <TabNav/>
      <RouterView></RouterView>
    </div>
  </header>
</template>

<style scoped>
</style>
