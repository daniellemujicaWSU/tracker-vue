<script setup lang="ts">
import { type CalendarYear } from '@/types'
import ClassCapacityCard from './ClassCapacityCard.vue';
import StudentCard from './StudentCard.vue'
defineProps<{
    calendarYear?: CalendarYear,
    msYear: string,
    collapseCard: boolean
}>()
</script>

<template>
    <div v-if="calendarYear">
        <ClassCapacityCard :date="calendarYear" :year="msYear" class="sticky top-0 shadow-md"></ClassCapacityCard>
        <div v-for="campus, index in calendarYear.campuses" :key="index">
             <StudentCard :students="campus.students" :campus="campus.campus" :collapseCard="collapseCard"></StudentCard>
        </div>
    </div>
</template>