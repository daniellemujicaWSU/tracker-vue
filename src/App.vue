<script setup lang="ts">
import AddStudentButton from './components/AddStudentButton.vue';
import TabNav from './components/TabNav.vue'
import { RouterView } from 'vue-router';

</script>

<template>
  <header>
    <div class="container mx-auto">
      <AddStudentButton/>
      <TabNav/>
      <RouterView></RouterView>
    </div>
  </header>
</template>

<style scoped>
</style>
