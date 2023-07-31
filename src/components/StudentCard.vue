<script setup lang="ts">
import { type Student } from '@/types'
import placeholderImg from '../assets/placeholder.png'
const props = defineProps<{
    students: Student[],
    collapseCard: boolean
}>()

const CampusColor = [
  {campus: "Everett", border: "border-everett"},
  {campus: "Spokane", border: "border-spokane"},
  {campus: "Tricities", border: "border-tricities"},
  {campus: "Vancouver", border: "border-vancouver"}
]

const setCampusColor = (campus: string) => {
    console.log(props.collapseCard)
    let borderColor = CampusColor.filter(el => el.campus === campus)
    return borderColor[0]?.border
}

const setImg = (img: string | undefined) => {
    return img ? img : placeholderImg
}

</script>

<template>
    <div v-if="students">
        <div v-for="student, index in students" :key="index" class="border-5 p-3 mt-4 rounded-md" :class="setCampusColor(student.in.campus)">
            <div class="grid grid-cols-3" :class="collapseCard ? 'pb-0' : 'pb-3'">
                <div class="col-span-2 flex">
                    <img :src="setImg(student.img)" alt="student headshot">
                    <h3 class="self-center justify-self-start pl-2">{{ student.name }}</h3>
                </div>
                <i class="fa-regular fa-user-pen justify-self-end"></i>
            </div>
            <div class="grid grid-cols-3 gap-4" v-if="!collapseCard">
                <div class="border-2 border-black p-1 text-sm rounded-md">
                    <i class="fa-regular fa-user-minus"></i>
                    <p>Out:</p>
                    <p>{{ student.out.date }}</p>
                    <p>{{ student.out.campus }}</p>
                </div>
                <div class="border-2 border-black p-1 text-sm rounded-md">
                    <i class="fa-regular fa-user-plus"></i>
                    <p>In:</p>
                    <p>{{ student.in.date }}</p>
                    <p>{{ student.in.campus }}</p>
                </div>
                <div class="border-2 border-black p-1 text-sm rounded-md">
                    <i class="fa-regular fa-circle-question"></i>
                    <p>Type:</p>
                    <p>{{ student.type }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

