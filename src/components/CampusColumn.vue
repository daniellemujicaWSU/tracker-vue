<script setup lang="ts">
import { type CampusOverview } from '@/types'
import CampusCapacityCard from './CampusCapacityCard.vue';
defineProps<{
    overview?: CampusOverview
}>()

const CampusColor = [
  {campus: "everett", bg: "bg-everett"},
  {campus: "spokane", bg: "bg-spokane"},
  {campus: "tricities", bg: "bg-tricities"},
  {campus: "vancouver", bg: "bg-vancouver"}
]

const setCampusColor = (campus: string) => {
    let bgColor = CampusColor.filter(el => el.campus === campus)
    return bgColor[0]?.bg
}
</script>

<template>
   <div v-if="overview">
        <h2 class="p-3 text-center text-white capitalize font-medium" :class="[setCampusColor(overview.campus)]">{{ overview.campus }}</h2>
            <div v-for="clinicYear, index in overview.clinicalYears" :key="index">
                <CampusCapacityCard :clinicalYear="clinicYear" :campusName="overview.campus"></CampusCapacityCard>
            </div>
            
   </div>
</template>