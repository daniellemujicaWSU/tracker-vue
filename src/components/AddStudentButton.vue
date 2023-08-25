<script setup lang="ts">
    import { useStudentFormStore } from '@/stores/studentForm'
    const studentForm = useStudentFormStore()
</script>
<template>
    <button class="rounded-full bg-pacific-blue hover:bg-blue-600 py-1 px-2 transition-colors" @click="studentForm.showForm(false)"><i class="fa-solid fa-plus text-white"></i></button>
</template>
