<script setup lang="ts">
import { ref } from 'vue';
const history = ref()

const getHistoryData = async () => {
    const response = await fetch(`/api/history`)
    history.value = await response.json()
}

getHistoryData()
</script>

<template>
    <div v-if="history">
        <h1 class="text-black pt-4 pb-5">History</h1>
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
            <tbody class="border-2 border-black">
                <tr class="odd:bg-gray-100 even:bg-white border-b-2 border-black" v-for="student, index in history.history" :key="index">
                    <td class="p-3">{{ student.name }}</td>
                    <td class="p-3">{{ student.out.date }}</td>
                    <td class="p-3">{{ student.out.campus }}</td>
                    <td class="p-3">{{ student.in.date }}</td>
                    <td class="p-3">{{ student.in.campus }}</td>
                    <td class="p-3">{{ student.type }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
