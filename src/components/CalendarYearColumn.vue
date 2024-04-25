<script setup lang="ts">
import { type MSY } from '@/types'
import ClassCapacityCard from './ClassCapacityCard.vue';
import StudentCard from './StudentCard.vue'
defineProps<{
    calendarYear: MSY,
    msYear: string,
    collapseCard: boolean
}>()

const getCurrentClassTotal = (calendarYear: MSY) => {
    let classTotal = 0
    // for (let index = 0; index < calendarYear.campuses.length; index++) {
    //     classTotal = classTotal + calendarYear.campuses[index].current
    // }
    for (const property in calendarYear.campuses) {
        // console.log(`${property}: ${calendarYear.campuses[property as keyof typeof calendarYear.campuses]}`);
        classTotal = classTotal + calendarYear.campuses[property as keyof typeof calendarYear.campuses].overview.current
    }
    return classTotal
}
</script>

<template>
    <div v-if="calendarYear">
        <ClassCapacityCard :academicYearOverview="calendarYear" :year="msYear" :currentClassTotal="getCurrentClassTotal(calendarYear)" class="sticky top-0 shadow-md"></ClassCapacityCard>
        <div v-for="campus, index in calendarYear.campuses" :key="index">
             <StudentCard :students="campus.students" :collapseCard="collapseCard"></StudentCard>
        </div>
    </div>
</template>