<script setup>
import {usePresentationStore} from "@/store/modules/index.js"
const store = usePresentationStore()
</script>

<template>
<div class="grid grid-cols-12 bg-surface-section mt-8 rounded z-10 relative">
  <template v-for="(item, idx) in store.portalData" :key="idx">
    <div class="col-span-3 p-8">
      <div class="text-sm text-[#79838E] border-l border-[#E8EDEE] pl-10 py-2">
        <div><span class="text-lg uppercase font-bold text-[#223458] leading-[1]">{{item.value}}</span> {{item.extension}}</div>
        <div class="leading-[1]">{{item.title}}</div>
      </div>
    </div>
  </template>
  <hr class="absolute left-0 top-1/2 translate-y-1/2 w-full text-[#E8EDEE]"/>


</div>
</template>

<style scoped>

</style>