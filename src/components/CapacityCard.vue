<script setup lang="ts">
import type { PropType } from 'vue'
import { type CapacityCard } from '../types'
const props = defineProps({
    capacity: { type: Object as PropType <CapacityCard> }
})

console.log(props)
</script>

<template>
    <div></div>
</template>

