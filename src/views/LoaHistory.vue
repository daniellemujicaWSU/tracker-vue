<script setup lang="ts">
import SkeletonLoader from '@/components/SkeletonLoader.vue'
import { useHistory } from '@/stores/history'

const history = useHistory()
history.getHistoryData()

</script>

<template>
    
    <h1 class="text-black pt-4 pb-5">History</h1>
    <div v-if="!history.loading">
        <table class="table-auto col-span-2 w-full">
            <thead>
                <tr class="text-left">
                    <th class="pl-3 pb-3 font-normal">Name</th>
                    <th class="pl-3 pb-3 font-normal">Date Out</th>
                    <th class="pl-3 pb-3 font-normal">Departing Campus</th>
                    <th class="pl-3 pb-3 font-normal">Date In</th>
                    <th class="pl-3 pb-3 font-normal">Returning Campus</th>
                    <th class="pl-3 pb-3 font-normal">Type/Reason</th>
                </tr>
            </thead>
            <tbody class="border-2 border-black" v-for="(students,index) in history.students" :key="index">
                <tr class="odd:bg-gray-100 even:bg-white border-b-2 border-black" v-for="student in students" :key="student.name">
                    <td class="p-3">{{ student.name }}</td>
                    <td class="p-3">{{ student.departDate }}</td>
                    <td class="p-3">{{ student.departCampus }}</td>
                    <td class="p-3">{{ student.returnDate }}</td>
                    <td class="p-3">{{ student.returnCampus }}</td>
                    <td class="p-3">{{ student.type }} / {{ student.reason }}</td>
                </tr>
            </tbody>
        </table>
    </div>
    <div v-else>
        <div v-for="row in 10" :key="row">
            <SkeletonLoader elementW="100%" elementH="3rem" margin="0 0 .25rem 0"></SkeletonLoader>
        </div>
    </div>
</template>
