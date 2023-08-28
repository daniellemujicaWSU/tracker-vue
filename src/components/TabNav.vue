<script setup lang="ts">
    import { RouterLink } from 'vue-router'
    import moment from 'moment'
    import ClassLink from "@/components/ClassLink.vue"

    const graduatingYear = {
        "MS4": moment().year(),
        "MS3": moment().year() + 1,
        "MS2": moment().year() + 2,
        "MS1": moment().year() + 3
    }
</script>

<template>
    <nav class="flex border-b-2 border-grey-500 space-x-4">
        <RouterLink to="/">Campus Load Overview</RouterLink>
        <div v-for="year in graduatingYear" :key="year" class="flex space-x-4">
            <ClassLink :year="year"/>
        </div>
        <RouterLink to="/history">History (graduated)</RouterLink>
    </nav>
</template>

