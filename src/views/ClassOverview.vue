<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const classData = ref(null)

const getClassData = () => {
    console.log(route.params.year)
}

getClassData()
</script>

<template>
    <div>
        <h1 class="text-blue-500">Class {{ route.params.year }}</h1>
    </div>
</template>
