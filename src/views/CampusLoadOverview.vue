<script setup lang="ts">
import { ref } from 'vue'
import iconToolTip from '@/components/iconToolTip.vue'
import campusColumn from '@/components/CampusColumn.vue'
import SkeletonLoader from '@/components/SkeletonLoader.vue'
import { useCampusOverview } from '@/stores/campusOverview'

const campusOverview = useCampusOverview()
const studentCardMsg = ref('Clinical campuses use the same designated color throughout application.')

campusOverview.getCampusData()
</script>

<template>
    <div>
        <div class="flex items-top pt-4 prose-headings:font-semibold">
            <h1 class="text-black pb-5">Campus Overview</h1>
            <iconToolTip :msg="studentCardMsg" class="ml-1"></iconToolTip>
        </div>
        <div v-if="!campusOverview.loading" class="grid grid-cols-4 gap-2 justify-items-stretch mb-6">
            <div  v-for="(campus,index) in campusOverview.campusData" :key="index">
                <campusColumn :overview="campus"></campusColumn>
            </div>
        </div>
        <div v-else class="grid grid-cols-4 gap-2 justify-items-stretch mb-6">
            <div v-for="column in 4" :key="column">
                <SkeletonLoader elementW="100%" elementH="4rem" margin="0 0 1.25rem 0"></SkeletonLoader>
                <div v-for="card in 4" :key="card">
                    <SkeletonLoader elementW="100%" elementH="14rem" margin="1.25rem 0 0 0"></SkeletonLoader>
                </div>
            </div>
        </div>
    </div>
</template>
