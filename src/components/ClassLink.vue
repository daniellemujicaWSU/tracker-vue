<script setup lang="ts">
    import { RouterLink } from 'vue-router';
    import { useClassOverview } from '@/stores/classOverview'
    const classOverview = useClassOverview()
    const props = defineProps<{
        year: string | number
    }>()
</script>

<template>
    <RouterLink :to="{path: `/class/${props.year}`}">
        <span @click="classOverview.setLoading(true)">Class {{ props.year }}</span>
    </RouterLink>
</template>
