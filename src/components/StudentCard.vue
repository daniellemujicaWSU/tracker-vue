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
        <div v-for="student, index in students" :key="index" class="border-5 p-1 xl:p-3 mt-4 rounded-md" :class="setCampusColor(student.returnCampus)">
            <div class="grid grid-cols-8" :class="collapseCard ? 'pb-0' : 'pb-3'">
                <div class="col-span-7 flex">
                    <img :src="setImg(student.img)" alt="student headshot">
                    <h5 class="self-center justify-self-start pl-2 lg:text-sm sm:text-xs xl:text-base">{{ student.name }}</h5>
                </div>
                <i v-if="hasPermission" class="fa-regular fa-user-pen justify-self-end cursor-pointer" @click="studentForm.editStudent(student)"></i>
            </div>
            <Transition name="fadeHeight">
                <div class="grid xl:grid-cols-3 gap-2 lg:grid-cols-2" v-if="!collapseCard">
                    <div class="border-2 border-black p-1 text-sm rounded-md">
                        <i class="fa-regular fa-user-minus"></i>
                        <p class="sm:text-xs lg:text-xs 2xl:text-sm">Out:</p>
                        <p class="sm:text-xs lg:text-xs 2xl:text-sm">{{ student.departDate }}</p>
                        <p class="sm:text-xs lg:text-xs 2xl:text-sm">{{ student.departCampus }}</p>
                    </div>
                    <div class="border-2 border-black p-1 text-sm rounded-md">
                        <i class="fa-regular fa-user-plus"></i>
                        <p class="sm:text-xs lg:text-xs 2xl:text-sm">In:</p>
                        <p class="sm:text-xs lg:text-xs 2xl:text-sm">{{ student.returnDate }}</p>
                        <p class="sm:text-xs lg:text-xs 2xl:text-sm">{{ student.returnCampus }}</p>
                    </div>
                    <div class="border-2 border-black p-1 text-sm rounded-md">
                        <i class="fa-regular fa-circle-question"></i>
                        <p class="sm:text-xs lg:text-xs 2xl:text-sm">Type/Reason:</p>
                        <p class="sm:text-xs lg:text-xs 2xl:text-sm" v-if="hasPermission">{{ student.type }}</p>
                        <p class="sm:text-xs lg:text-xs 2xl:text-sm" v-if="hasPermission">{{ student.reason }}</p>
                        <p class="sm:text-xs lg:text-xs 2xl:text-sm" v-else>Information hidden</p>
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
