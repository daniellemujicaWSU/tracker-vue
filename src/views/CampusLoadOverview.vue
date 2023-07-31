<script setup lang="ts">
import { ref } from 'vue'
import iconToolTip from '@/components/iconToolTip.vue'
import campusColumn from '@/components/CampusColumn.vue'

const studentCardMsg = ref('Clinical campuses use the same designated color throughout application.')
const campusLoads = ref()

const getCampusData = async () => {
    const response = await fetch(`/api/campusOverview`)
    campusLoads.value = await response.json()
}

getCampusData()

</script>

<template>
    <div>
        <div class="flex items-top pt-4 prose-headings:font-semibold">
            <h1 class="text-black pb-5">Campus Overview</h1>
            <iconToolTip :msg="studentCardMsg" class="ml-1"></iconToolTip>
        </div>
        <div v-if="campusLoads" class="grid grid-cols-4 gap-2 justify-items-stretch">
            <div  v-for="campus, index in campusLoads" :key="index">
                <campusColumn :overview="campus"></campusColumn>
            </div>
        </div>
    </div>
</template>
