<script setup lang="ts">
import { type Student } from '@/types'
import placeholderImg from '../assets/placeholder.png'
import { useStudentFormStore } from '@/stores/studentForm'
import { inject } from 'vue'

const studentForm = useStudentFormStore()
defineProps<{
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
    let borderColor = CampusColor.filter(el => el.campus === campus)
    return borderColor[0]?.border
}

const setImg = (img: string | undefined) => {
    return img ? img : placeholderImg
}
const userPermission = inject('userPermission')
const hasPermission = userPermission === 'true'

</script>

<template>
    <div v-if="students">
        <div v-for="student, index in students" :key="index" class="border-5 p-3 mt-4 rounded-md" :class="setCampusColor(student.returnCampus)">
            <div class="grid grid-cols-8" :class="collapseCard ? 'pb-0' : 'pb-3'">
                <div class="col-span-7 flex">
                    <img :src="setImg(student.img)" alt="student headshot">
                    <h5 class="self-center justify-self-start pl-2 sm:text-sm">{{ student.name }}</h5>
                </div>
                <i v-if="hasPermission" class="fa-regular fa-user-pen justify-self-end cursor-pointer" @click="studentForm.editStudent(student)"></i>
            </div>
            <Transition name="fadeHeight">
                <div class="grid lg:grid-cols-3 lg:gap-2 xl:gap-4 sm:grid-cols-2 sm:gap-1" v-if="!collapseCard">
                    <div class="border-2 border-black p-1 text-sm rounded-md sm:text-xs xl:text-sm">
                        <i class="fa-regular fa-user-minus"></i>
                        <p>Out:</p>
                        <p>{{ student.departDate }}</p>
                        <p>{{ student.departCampus }}</p>
                    </div>
                    <div class="border-2 border-black p-1 text-sm rounded-md sm:text-xs xl:text-sm">
                        <i class="fa-regular fa-user-plus"></i>
                        <p>In:</p>
                        <p>{{ student.returnDate }}</p>
                        <p>{{ student.returnCampus }}</p>
                    </div>
                    <div class="border-2 border-black p-1 text-sm rounded-md sm:text-xs xl:text-sm">
                        <i class="fa-regular fa-circle-question"></i>
                        <p>Type/Reason:</p>
                        <p v-if="hasPermission">{{ student.type }}</p>
                        <p v-if="hasPermission">{{ student.reason }}</p>
                        <p v-else>Information hidden</p>
                    </div>
                </div>
            </Transition>
        </div>
    </div>
</template>

<style scoped>
    .fadeHeight-enter-active,
    .fadeHeight-leave-active {
        transition: all 0.2s;
        max-height: 230px;
    }
    .fadeHeight-enter,
    .fadeHeight-leave-to {
        max-height: 0px;
        opacity: 0;
    }
</style>
