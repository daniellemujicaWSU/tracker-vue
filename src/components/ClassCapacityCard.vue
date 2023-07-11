<script setup lang="ts">
import { type CalendarYear } from '@/types'
defineProps<{
    calendarYear?: CalendarYear
}>()
</script>

<template>
    <div>{{ calendarYear }}</div>
</template>

