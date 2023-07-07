<script setup lang="ts">
    import { RouterLink } from 'vue-router';
    //api call to get class graduating year
    import graduatingYear from '@/data/graduatingYear.json'
    import ClassLink from "@/components/ClassLink.vue"
</script>

<template>
    <nav class="flex border-b-4 border-zinc-500 space-x-4">
        <RouterLink to="/">Campus Load Overview</RouterLink>
        <div v-for="year in graduatingYear" :key="year" class="flex space-x-4">
            <ClassLink :year="year"/>
        </div>
        <RouterLink to="history">History (Graduated)</RouterLink>
    </nav>
</template>

