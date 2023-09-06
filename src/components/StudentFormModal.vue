<script setup lang="ts">
    import { computed, ref, reactive } from 'vue'
    import { useStudentFormStore } from '@/stores/studentForm'
    import { useVuelidate } from "@vuelidate/core"
    import { required } from "@vuelidate/validators"
    import { type Student } from '@/types'

    const studentForm = useStudentFormStore()
    const changeType = ref([])
    const studentNameList = studentForm.studentNamesList.names
    const selectedName = ref('')
    
    const state: Student = reactive({
        name: studentForm.studentData.name,
        type: studentForm.studentData.type,
        reason: studentForm.studentData.reason,
        curriculumYear: studentForm.studentData.curriculumYear,
        departDate: studentForm.studentData.departDate,
        departCampus: studentForm.studentData.departCampus,
        returnDate: studentForm.studentData.returnDate,
        returnCampus: studentForm.studentData.returnCampus,
        notes: studentForm.studentData.notes,
        id: studentForm.studentData.id
    })
    const rules = computed(() => {
        return {
            name: { required },
            changeType: {required },
            curriculumYear: { required },
            departDate: { required },
            departCampus: { required },
            returnDate: { required },
            returnCampus: { required }
        }
    })
    const v$ = useVuelidate<Student>(rules, state);
    const disabled = computed(() => {
        return state.type === 'LOA' ? true : false
    })
    const submitForm = () => {
        v$.value.$validate();
        if (!v$.value.$error) {
            studentForm.updateAddStudent(state)
        }
    }

    const searchStudents = computed(() => {
        if (selectedName.value === '') {
            return []
        }

        let matches = 0

        return studentNameList.filter(student => {
            if (
                student.toLowerCase().includes(state.name.toLowerCase())
                && matches < 10
            ) {
                matches++
                return student
            }
        })
    })

    const selectStudent = (name: string) => {
      state.name = name
      selectedName.value = ''
    }
</script>

<template>
    <div class="w-screen h-screen background bg-black/50 fixed top-0 right-0 left-0 bottom-0 grid">
        <div class="absolute w-3/4 bg-white self-center justify-self-center grid p-3">
            <div class="justify-self-end flex items-center cursor-pointer" @click="studentForm.showFormModal = false">
                <span class="text-pacific-blue text-sm">Close</span>
                <i class="fa-regular fa-xmark text-3xl"></i>
            </div>
            <form class="grid grid-cols-4 gap-4 text-slate-600">
                <label class="block" for="student">
                    <span>Student</span>
                    <input class="block rounded-md border-gray-300 shadow-sm w-full" type="text" id="student" v-model="state.name" placeholder="Find Student..." @keyup="selectedName = state.name">
                    <ul v-if="searchStudents.length" class="w-full rounded bg-white border border-gray-300 px-4 py-2 space-y-1 absolute z-10">
                        <li class="px-1 pt-1 pb-2 font-bold border-b border-gray-200">
                        Showing {{ searchStudents.length }} of {{ studentNameList.length }} results
                        </li>
                        <li
                            v-for="name in searchStudents"
                            :key="name"
                            @click="selectStudent(name)"
                            class="cursor-pointer hover:bg-gray-100 p-1"
                        >
                            {{ name }}
                        </li>
                    </ul>
                    <span v-if="v$.name.$error" class="text-red-600 text-xs absolute">Student name is required</span>
                </label>
                <label class="block" for="type">
                    <span>Type</span>
                    <select class="block rounded-md border-gray-300 shadow-sm w-full" name="changeType" id="type" ref="changeType" v-model="state.type">
                        <option value="LOA" selected>LOA</option>
                        <option value="campusChange">Campus Change</option>
                    </select>
                    <span v-if="v$.changeType.$error" class="text-red-600 text-xs absolute">Type is required</span>
                </label>
                <label class="block" for="loaReason">
                    <span>LOA Reason</span>
                    <select :disabled="disabled" class="block rounded-md border-gray-300 shadow-sm w-full" name="loaReason" id="loaReason" v-model="state.reason">
                        <option value="administrative">Administrative</option>
                        <option value="financial">Financial</option>
                        <option value="medical">Medical</option>
                        <option value="military">Military</option>
                        <option value="personal">Personal</option>
                        <option value="scholarly">Scholarly</option>
                        <option value="Research">Research</option>
                    </select>
                </label>
                <label class="block" for="curriculumYear">
                    <span>Curiculum Year</span>
                    <select class="block rounded-md border-gray-300 shadow-sm w-full" name="curriculumYear" id="curriculumYear" v-model="state.curriculumYear">
                        <option value="ms1">MS1</option>
                        <option value="ms2">MS2</option>
                        <option value="ms3">MS3</option>
                        <option value="ms4">MS4</option>
                    </select>
                    <span v-if="v$.curriculumYear.$error" class="text-red-600 text-xs absolute">type is required</span>
                </label>
                <label class="block" for="dateOut">
                    <span>Depart Date</span>
                    <input class="block rounded-md border-gray-300 shadow-sm w-full" type="text" id="dateOut" v-model="state.departDate">
                    <span v-if="v$.departCampus.$error" class="text-red-600 text-xs absolute">Depart date is required</span>
                </label>
                <label class="block" for="departingCampus">
                    <span>Departing Campus</span>
                    <select class="block rounded-md border-gray-300 shadow-sm w-full" name="departingCampus" id="departingCampus" v-model="state.departCampus">
                        <option value="Everett">Everett</option>
                        <option value="Spokane">Spokane</option>
                        <option value="Tricities">Tricities</option>
                        <option value="Vancouver">Vancouver</option>
                    </select>
                    <span v-if="v$.departCampus.$error" class="text-red-600 text-xs absolute">Departing campus is required</span>
                </label>
                <label class="block" for="dateIn">
                    <span>Return Date</span>
                    <input class="block rounded-md border-gray-300 shadow-sm w-full" type="text" id="dateIn" v-model="state.returnDate">
                    <span v-if="v$.returnDate.$error" class="text-red-600 text-xs absolute">Return date is required</span>
                </label>
                <label class="block" for="returningCampus">
                    <span>Returning Campus</span>
                    <select class="block rounded-md border-gray-300 shadow-sm w-full" name="returningCampus" id="returningCampus" v-model="state.returnCampus">
                        <option value="Everett">Everett</option>
                        <option value="Spokane">Spokane</option>
                        <option value="Tricities">Tricities</option>
                        <option value="Vancouver">Vancouver</option>
                    </select>
                    <span v-if="v$.returnCampus.$error" class="text-red-600 text-xs absolute">Returning campus is required</span>
                </label>
                <label class="block col-span-4" for="notes">
                    <span>Notes</span>
                    <textarea class="block rounded-md border-gray-300 shadow-sm w-full" name="notes" id="notes" cols="30" rows="5" v-model="studentForm.studentData.notes"></textarea>
                </label>
            </form>
            <div class="grid grid-cols-8 mt-8 gap-2">
                <button type="submit" class="bg-seafoam text-white rounded-r-lg rounded-l-lg text-sm pt-2 pb-2" @click.prevent="submitForm"><i class="fa-light fa-floppy-disk"></i> Save</button>
                <button class="bg-slate-300 text-slate-600 rounded-r-lg rounded-l-lg text-sm" @click="studentForm.cancelEdit()"><i class="fa-regular fa-ban"></i> Cancel</button>
            </div>
        </div>
    </div>
</template>
