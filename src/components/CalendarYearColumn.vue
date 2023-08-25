<script setup lang="ts">
import { type CalendarYear } from '@/types'
import ClassCapacityCard from './ClassCapacityCard.vue';
import StudentCard from './StudentCard.vue'
defineProps<{
    calendarYear?: CalendarYear,
    msYear: string,
    collapseCard: boolean
}>()

const getCurrentClassTotal = (calendarYear: CalendarYear) => {
    let classTotal = 0
    for (let index = 0; index < calendarYear.campuses.length; index++) {
        classTotal = classTotal + calendarYear.campuses[index].current
    }
    return classTotal
}
</script>

<template>
    <div v-if="calendarYear">
        <ClassCapacityCard :date="calendarYear" :year="msYear" :currentClassTotal="getCurrentClassTotal(calendarYear)" class="sticky top-0 shadow-md"></ClassCapacityCard>
        <div v-for="campus, index in calendarYear.campuses" :key="index">
             <StudentCard :students="campus.students" :campus="campus.campus" :collapseCard="collapseCard"></StudentCard>
        </div>
    </div>
</template>