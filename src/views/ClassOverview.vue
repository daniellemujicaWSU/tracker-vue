<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import CardCollapseToggle from '@/components/CardCollapseToggle.vue'
import CalendarYearColumn from '@/components/CalendarYearColumn.vue'
import SkeletonLoader from '@/components/SkeletonLoader.vue'
import iconToolTip from '@/components/iconToolTip.vue'
import { useClassOverview } from '@/stores/classOverview'

const classOverview = useClassOverview()
const route = useRoute()
const toggleState = ref(false)
const collapseMsg = ref('Collapse cards allows you to toggle student cards between a closed state and open state. The open state will show all info, the closed state will only show the profile image and student name.')
const studentCardMsg = ref('Students card is outlined with the campus color that corresponds to their returning/updated campus.')

watch(route, (to) => {
    classOverview.getClassData(to.params.year)
})

classOverview.getClassData(route.params.year).then({

})
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
        <div v-if="!classOverview.loading" class="grid grid-cols-4 gap-2 justify-items-stretch">
            <CalendarYearColumn :calendarYear="classOverview.currentclassData.ms1" msYear="MS1" :collapseCard="toggleState"></CalendarYearColumn>
            <CalendarYearColumn :calendarYear="classOverview.currentclassData.ms2" msYear="MS2" :collapseCard="toggleState"></CalendarYearColumn>
            <CalendarYearColumn :calendarYear="classOverview.currentclassData.ms3" msYear="MS3" :collapseCard="toggleState"></CalendarYearColumn>
            <CalendarYearColumn :calendarYear="classOverview.currentclassData.ms4" msYear="MS4" :collapseCard="toggleState"></CalendarYearColumn>
        </div>
        <div v-else class="grid grid-cols-4 gap-2 justify-items-stretch mb-6">
            <div v-for="column in 4" :key="column">
                <SkeletonLoader elementW="100%" elementH="18rem" margin="0 0 1.25rem 0"></SkeletonLoader>
                <div v-for="card in 4" :key="card">
                    <SkeletonLoader elementW="100%" elementH="12rem" margin="0 0 1.25rem 0"></SkeletonLoader>
                </div>
            </div>
        </div>
    </div>
</template>
