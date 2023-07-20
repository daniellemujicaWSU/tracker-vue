<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { type ClassOverview } from '@/types'
import CardCollapseToggle from '@/components/CardCollapseToggle.vue'
import CalendarYearColumn from '@/components/CalendarYearColumn.vue'


const route = useRoute()
const classInfo = ref<ClassOverview>()
const toggleState = ref(false)

watch(route, (to) => {
    getClassData(to.params.year)
})

const getClassData = async (route: string | string[]) => {
    const response = await fetch(`/api/${route}`)
    classInfo.value = await response.json()
}

getClassData(route.params.year)
</script>

<template>
    <div>
        <CardCollapseToggle v-model="toggleState"></CardCollapseToggle>
        <h1 class="text-black pb-5">Class {{ route.params.year }}</h1>
        <div v-if="classInfo" class="grid grid-cols-4 gap-2 justify-items-stretch">
            <CalendarYearColumn :calendarYear="classInfo.ms1" msYear="MS1"></CalendarYearColumn>
            <CalendarYearColumn :calendarYear="classInfo.ms2" msYear="MS2"></CalendarYearColumn>
            <CalendarYearColumn :calendarYear="classInfo.ms3" msYear="MS3"></CalendarYearColumn>
            <CalendarYearColumn :calendarYear="classInfo.ms4" msYear="MS4"></CalendarYearColumn>
        </div>
    </div>
</template>
