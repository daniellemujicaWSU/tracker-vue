<script setup lang="ts">
    import { RouterLink } from 'vue-router';
    const props = defineProps<{
        year: string | number
    }>()
</script>

<template>
    <RouterLink :to="{path: `/class/${props.year}`}">Class {{ props.year }}</RouterLink>
</template>
