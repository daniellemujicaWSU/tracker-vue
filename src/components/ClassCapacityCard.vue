<script setup lang="ts">
import { type CalendarYear } from '@/types'
import { useClassOverview } from '@/stores/classOverview'

defineProps<{
    academicYearOverview: CalendarYear,
    year: string,
    currentClassTotal: number
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

const classOverview = useClassOverview()
</script>

<template>
    <div class="border-3 border-black col-span-1 pt-2 transition-colors" v-if="academicYearOverview"
        :class="classOverview.setCurrentYear(academicYearOverview.academicYear) ? 'bg-pacific-blue border-pacific-blue' : 'bg-white'">
        <h2 class="pl-2 pb-5 sm:text-sm xl:text-xl"
            :class="classOverview.setCurrentYear(academicYearOverview.academicYear) ? 'text-white' : ''">{{
            academicYearOverview.academicYear }} ({{
            year }})</h2>
        <table class="table-auto col-span-2 w-full" border="0">
            <thead>
                <tr class="border-b-3 border-black sm:text-xs xl:text-sm"
                    :class="classOverview.setCurrentYear(academicYearOverview.academicYear) ? 'text-white border-pacific-blue' : ''">
                    <th>Campus</th>
                    <th>Capacity</th>
                    <th>Current</th>
                    <th>In</th>
                    <th>Out</th>
                </tr>
            </thead>
            <tbody class="bg-white">
                <tr v-for="(item, key, index) in academicYearOverview.campuses" :key="index"
                    class="text-center odd:bg-gray-100 even:bg-white sm:text-xs xl:text-sm">
                    <td class="pt-2 pb-2 text-white"><span
                            :class="[setCampusColor('bg', index), 'rounded-full py-2 px-4']">{{
                            Array.from(key.toString())[0] }}</span>
                    </td>
                    <td class="pt-2 pb-2">{{ item.overview.capacity }}</td>
                    <td class="pt-2 pb-2"><span
                            :class="[setCampusColor('ring', index), 'rounded-full ring px-3 py-1.5']">{{
                            item.overview.current }}</span></td>
                    <td class="pt-2 pb-2">{{ item.overview.in }}</td>
                    <td class="pt-2 pb-2">{{ item.overview.out }}</td>
                </tr>
            </tbody>
            <tfoot>
                <tr class="bg-gray-100">
                    <td colspan='5' class="pt-2 pb-2 pr-4 text-sm text-right font-bold sm:text-xs xl:text-sm">Current
                        Class Total: {{ currentClassTotal }}</td>
                </tr>
            </tfoot>
        </table>
    </div>
</template>

