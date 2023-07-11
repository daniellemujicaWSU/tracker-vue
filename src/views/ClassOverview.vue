<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { type ClassOverview } from '@/types'
import ClassCapacityCard from '@/components/ClassCapacityCard.vue'

const route = useRoute()
const classInfo = ref<ClassOverview>()

watch(route, (to) => {
    getClassData(to.params.year)
})

const getClassData = async (route: string | string[]) => {
    const response = await fetch(`/api/${route}`)
    classInfo.value = await response.json()
    console.log(classInfo.value)
}

getClassData(route.params.year)
</script>

<template>
    <div>
        <h1 class="text-blue-500">Class {{ route.params.year }}</h1>
        <div v-if="classInfo">
            <ClassCapacityCard :calendarYear="classInfo.firstYear"></ClassCapacityCard>
            <ClassCapacityCard :calendarYear="classInfo.SecondYear"></ClassCapacityCard>
            <ClassCapacityCard :calendarYear="classInfo.ThirdYear"></ClassCapacityCard>
            <ClassCapacityCard :calendarYear="classInfo.FourthYear"></ClassCapacityCard>
        </div>
    </div>
</template>
