<script setup lang="ts">
    import { RouterLink } from 'vue-router'
    import ClassLink from "@/components/ClassLink.vue"
    import { useClassOverview } from '@/stores/classOverview'

    const classOverview = useClassOverview()
</script>

<template>
    <nav class="flex border-b-2 border-grey-500 space-x-4">
        <RouterLink to="/">Campus Load Overview</RouterLink>
        <div v-for="year in classOverview.graduatingYear" :key="year" class="flex space-x-4">
            <ClassLink :year="year"/>
        </div>
        <!-- <RouterLink to="/history">History (graduated)</RouterLink> -->
    </nav>
</template>

