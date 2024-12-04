<script setup>
import {portalTabs} from "@/utils/index.js"
</script>

<template>
<div class="grid grid-cols-12">
  <div class="col-span-6">
    <h3 class="text-primary text-2xl uppercase font-medium">Portal raqamlarda</h3>
    <small class="text-[#79838E] text-sm">Turli ko‘rsatkichlar statistikasi</small>
  </div>
  <div class="col-span-6 flex justify-end items-start">
    <div class="p-1 rounded-lg bg-[#C9D2EE] flex gap-2 w-auto cursor-pointer">
      <template v-for="(item, idx) in portalTabs" :key="idx">
        <div
            :class="idx=== 5 && 'portal__active__tab'"
            class="text-sm font-medium px-4 py-1 ">{{item.name}}</div>
      </template>
    </div>
  </div>
</div>
</template>

<style scoped>
  .portal__active__tab{
    @apply text-white bg-primary rounded-lg
  }
</style>