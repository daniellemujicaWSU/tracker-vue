<script setup lang="ts">
    defineProps<{
        elementW: string,
        elementH: string,
        margin?: string 
    }>()
</script>

<template>
    <div class="bg-slate-100 animate-pulse" :style="{width:elementW, height:elementH, margin:margin}"></div>
</template>