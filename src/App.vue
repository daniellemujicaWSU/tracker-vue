<script setup lang="ts">
import { inject } from 'vue'
import AddStudentButton from './components/AddStudentButton.vue';
import TabNav from './components/TabNav.vue'
import { RouterView } from 'vue-router';
import StudentFormModal from './components/StudentFormModal.vue';
import { useStudentFormStore } from '@/stores/studentForm'
const studentForm = useStudentFormStore()
const userPermission = inject('userPermission')
const hasPermission = userPermission === 'true'
</script>

<template>
  <div>
    <div class="xs:inline-block lg:hidden absolute top-[50%] left-[50%] m-0 mx-auto text-center translate-y-[-50%] translate-x-[-50%]">
        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" class="w-28 h-28 mx-auto" style="transform:translate3d(0,0,0);content-visibility:visible" viewBox="0 0 500 500"><defs><clipPath id="c"><path d="M0 0h500v500H0z"/></clipPath><filter id="a" width="100%" height="100%" x="0%" y="0%" filterUnits="objectBoundingBox"><feComponentTransfer in="SourceGraphic"><feFuncA tableValues="1.0 0.0" type="table"/></feComponentTransfer></filter><path id="b" fill="#F14B00" d="M160.119 0c0 88.431-71.688 160.119-160.119 160.119S-160.119 88.431-160.119 0-88.431-160.119 0-160.119 160.119-88.431 160.119 0z" style="display:block" transform="translate(283 250)"/><mask id="d" mask-type="alpha"><g filter="url(#a)"><path fill="#fff" d="M0 0h500v500H0z" opacity="0"/><use xmlns:ns1="http://www.w3.org/1999/xlink" ns1:href="#b"/></g></mask></defs><g clip-path="url(#c)"><path fill="#F14B00" d="M160.119 0c0 88.431-71.688 160.119-160.119 160.119S-160.119 88.431-160.119 0-88.431-160.119 0-160.119 160.119-88.431 160.119 0z" style="display:block" transform="translate(250 250)"/><g mask="url(#d)" opacity=".5" style="mix-blend-mode:multiply;display:block"><path fill="#F14B00" d="M410.119 250c0 88.431-71.688 160.119-160.119 160.119S89.881 338.431 89.881 250 161.569 89.881 250 89.881 410.119 161.569 410.119 250z" opacity="1"/></g><path fill="none" stroke="#121330" stroke-linecap="round" stroke-linejoin="round" stroke-width="7" d="M160.119 0c0 88.431-71.688 160.119-160.119 160.119S-160.119 88.431-160.119 0-88.431-160.119 0-160.119 160.119-88.431 160.119 0z" style="display:block" transform="translate(250 250)"/><path fill="#EBE6EE" d="M345.444 283.358H154.556c-6.242 0-11.302-5.06-11.302-11.302v-44.112c0-6.242 5.06-11.302 11.302-11.302h190.888c6.242 0 11.302 5.06 11.302 11.302v44.112c0 6.242-5.06 11.302-11.302 11.302z" style="display:block"/><path fill="none" stroke="#121330" stroke-linecap="round" stroke-linejoin="round" stroke-width="7" d="M95.444 33.358H-95.444c-6.242 0-11.302-5.06-11.302-11.302v-44.112c0-6.242 5.06-11.302 11.302-11.302H95.444c6.242 0 11.302 5.06 11.302 11.302v44.112c0 6.242-5.06 11.302-11.302 11.302z" style="display:block" transform="translate(250 250)"/><path class="com" style="display:none"/></g></svg>
        <h2>Please view on screen size 1024px or greater (iPad in landscape mode is around 1024px)</h2>
    </div>
    <div class="container mx-auto font-montserrat xs:hidden lg:block">
      <div class="flex w-full">
        <div class="mt-7 ml-auto">
          <AddStudentButton v-if="hasPermission"/>
        </div>  
      </div>
      <TabNav/>
      <RouterView></RouterView>
      <Transition>
        <StudentFormModal v-if="studentForm.showFormModal"></StudentFormModal>
      </Transition>
    </div>
  </div>
</template>

<style scoped>
  .v-enter-active,
  .v-leave-active {
    transition: opacity 0.3s ease;
  }

  .v-enter-from,
  .v-leave-to {
    opacity: 0;
  }
</style>
