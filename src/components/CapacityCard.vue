<script setup lang="ts">
import { type CalendarYear } from '@/types'
import { type ClinicalYear } from '@/types';
defineProps<{
    date: CalendarYear,
    border: string
}>()

enum CampusBgColor {
  'bg-everett',
  'bg-spokane',
  'bg-tricities',
  'bg-vancouver'
}

enum CampusRingColor {
  'ring-everett',
  'ring-spokane',
  'ring-tricities',
  'ring-vancouver',
}

const setCampusColor = (bgType: string, index: number) => {
    return bgType === 'bg' ? CampusBgColor[index] : CampusRingColor[index]
}
</script>

<template>
    <div class="border-3 border-black col-span-1 pt-2 transition-colors" v-if="date" :class="[ date.currentYear ? 'bg-pacific-blue border-pacific-blue' : 'bg-white', border]">
        <h2 class="pl-2 pb-5" :class="date.currentYear ? 'text-white' : ''">{{ date.academicYear }}</h2>
        <table class="table-auto col-span-2 w-full">
                <thead>
                    <tr class="border-b-3 border-black" :class="date.currentYear ? 'text-white border-pacific-blue' : ''">
                        <th>Campus</th>
                        <th>Capacity</th>
                        <th>Current</th>
                        <th>In</th>
                        <th>Out</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item, index in date.campuses" :key="index" class="text-center odd:bg-gray-100 even:bg-white">
                        <td class="pt-2 pb-2"><span :class="[setCampusColor('bg', index), 'rounded-full py-2 px-5']">{{ item.campus }}</span></td>
                        <td class="pt-2 pb-2">{{ item.capacity }}</td>
                        <td class="pt-2 pb-2"><span :class="[setCampusColor('ring', index), 'rounded-full ring px-3.5 py-1.5']">{{ item.current }}</span></td>
                        <td class="pt-2 pb-2">{{ item.in }}</td>
                        <td class="pt-2 pb-2">{{ item.out }}</td>
                    </tr>        
                </tbody>
        </table>
    </div>
</template>

