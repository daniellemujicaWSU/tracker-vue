<script setup lang="ts">
import { ref } from 'vue'
defineProps<{
    msg: string
}>()

const showTooltip = ref(false)
</script>

<template>
    <div class="relative">
        <i class="fa-regular fa-circle-question text-pacific-blue cursor-pointer" @click="showTooltip = !showTooltip"></i>
        <div 
            class="w-80 bg-pacific-blue text-white p-2 rounded-md absolute bottom-1/4 left-5 z-50" 
            :class="showTooltip ? 'opacity-100 pointer-events-auto transition cursor-pointer' : 'opacity-0 pointer-events-none'" 
            @click="showTooltip = !showTooltip">
            <p class="text-xs">{{ msg }}</p>
        </div>
    </div>
</template>

