<script setup lang="ts">
import { type ClinicalYear } from '@/types'
defineProps<{
    clinicalYear: ClinicalYear,
    campusName: string
}>()

const CampusColor = [
  {campus: "everett", border: "border-everett", ring:  'ring-everett'},
  {campus: "spokane", border: "border-spokane", ring: 'ring-spokane'},
  {campus: "tricities", border: "border-tricities", ring: 'ring-tricities'},
  {campus: "vancouver", border: "border-vancouver", ring: 'ring-vancouver',}
]

const setCampusColor = (campus: string, type: string) => {
    let borderColor = CampusColor.filter(el => el.campus === campus)
    return type === 'border' ? borderColor[0]?.border : borderColor[0]?.ring
}
</script>
<template>
    <div v-if="clinicalYear">
        <div class="border-4 mt-5" :class="[setCampusColor(campusName, 'border')]">
            <h2 class="pl-3 pt-3 pb-4">{{ clinicalYear.year }}</h2>
            <table class="table-auto col-span-2 w-full">
                    <thead>
                        <tr class="border-b-2 border-black">
                            <th>Class</th>
                            <th>Capacity</th>
                            <th>Current</th>
                            <th>In</th>
                            <th>Out</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item, index in clinicalYear.classes" :key="index" class="text-center odd:bg-gray-100 even:bg-white">
                            <td class="pt-2 pb-2">{{ item.classYear }}</td>
                            <td class="pt-2 pb-2">{{ item.capacity }}</td>
                            <td class="pt-2 pb-2" :class="[setCampusColor(campusName, 'ring'), 'rounded-full ring px-3.5 py-1.5']">{{ item.current }}</td>
                            <td class="pt-2 pb-2">{{ item.in }}</td>
                            <td class="pt-2 pb-2">{{ item.out }}</td>
                        </tr>        
                    </tbody>
            </table>
        </div>
    </div>
</template>

