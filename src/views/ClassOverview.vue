<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { type ClassOverview } from '@/types'
import CardCollapseToggle from '@/components/CardCollapseToggle.vue'
import CalendarYearColumn from '@/components/CalendarYearColumn.vue'
import iconToolTip from '@/components/iconToolTip.vue'


const route = useRoute()
const classInfo = ref<ClassOverview>()
const toggleState = ref(false)
const collapseMsg = ref('Collapse cards allows you to toggle student cards between a closed state and open state. The open state will show all info, the closed state will only show the profile image and student name.')
const studentCardMsg = ref('Students card is outlined with the campus color that corresponds to their returning/updated campus.')

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
        <div class="flex items-top">
            <CardCollapseToggle v-model="toggleState"></CardCollapseToggle>
            <iconToolTip :msg="collapseMsg" class="pt-2"></iconToolTip>
        </div>
        <div class="flex items-top">
            <h1 class="text-black pb-5">Class {{ route.params.year }}</h1>
            <iconToolTip :msg="studentCardMsg" class="ml-1"></iconToolTip>
        </div>
        <div v-if="classInfo" class="grid grid-cols-4 gap-2 justify-items-stretch">
            <CalendarYearColumn :calendarYear="classInfo.ms1" msYear="MS1" :collapseCard="toggleState"></CalendarYearColumn>
            <CalendarYearColumn :calendarYear="classInfo.ms2" msYear="MS2" :collapseCard="toggleState"></CalendarYearColumn>
            <CalendarYearColumn :calendarYear="classInfo.ms3" msYear="MS3" :collapseCard="toggleState"></CalendarYearColumn>
            <CalendarYearColumn :calendarYear="classInfo.ms4" msYear="MS4" :collapseCard="toggleState"></CalendarYearColumn>
        </div>
    </div>
</template>
