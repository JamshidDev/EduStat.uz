<script setup>
import LangDropdown from "@/components/general/LangDropdown.vue"

const tabList = [
  {
    id:1,
    name:"Maktabgacha ta'lim"
  },
  {
    id:2,
    name:"Umumiy o'rta ta'lm"
  },
  {
    id:3,
    name:"O'rta ta'lim profissional ta'lim"
  },
  {
    id:4,
    name:"Oliy ta'lim"
  },
  {
    id:5,
    name:"Oliy ta'lim keyingi ta'lim"
  },
]
const activeTab = ref(1)
</script>

<template>
  <div class="flex justify-between items-center w-full h-[60px] border-b border-blue-900 bg-gray-900 px-4">
    <div>
      <img class="w-[40px]" src="/public/logo.webp" alt="">
    </div>
    <div class="flex justify-end items-center gap-4">

     <div class="w-[800px]">
       <n-tabs type="card" animated class="hidden-panel-tab" v-model:value="activeTab">
         <n-tab-pane v-for="(item ,idx) in tabList" :key="idx" :name="item.id" :tab="item.name">
           {{item.name}}
         </n-tab-pane>
       </n-tabs>
     </div>

      <LangDropdown/>
    </div>
  </div>
</template>

<style>

</style>
