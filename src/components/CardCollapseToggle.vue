<script setup lang="ts">
const props = defineProps({
  modelValue:{
    type: Boolean
  }
})
const emit = defineEmits(['update:modelValue'])

function toggle(){
    console.log(!props.modelValue)
  emit('update:modelValue', !props.modelValue)
}
</script>

<template>
    <div class="flex items-center pt-4 pb-4">
        <div :class="modelValue ? 'bg-pacific-blue' : 'bg-gray-300'" @click="toggle" class="w-14 transition-all duration-500 h-8 flex items-center rounded-full p-1">
        <div :class="{'translate-x-6': modelValue}" class="w-6 h-6 transition-all duration-500 transform bg-white rounded-full shadow-md"></div>
        </div>
        <div class="ml-2">Collapse Cards</div>
    </div>
</template>


