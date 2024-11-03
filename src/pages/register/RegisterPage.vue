<script setup>

import {useRegisterStore} from "@/store/modules/registrStore.js";
import registerForm from "./ui/registerForm.vue"
import verificationForm from "./ui/verificationForm.vue"

const store = useRegisterStore()



</script>

<template>
  <div class="w-full min-h-screen flex justify-center items-center gradient-v1">
    <div class="flex overflow-hidden border border-surface-line shadow-sm bg-surface-section rounded-xl">
      <n-tabs class="hidden-tab-header" type="segment" animated v-model:value="store.activeTab">
        <n-tab-pane :name="store.tabList[0]">
         <registerForm/>
        </n-tab-pane>
        <n-tab-pane :name="store.tabList[1]">
          <verificationForm/>
        </n-tab-pane>
      </n-tabs>
    </div>
  </div>
</template>

<style scoped>

</style>