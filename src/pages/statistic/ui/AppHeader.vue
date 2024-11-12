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
.hidden-panel-tab{
  .n-tab-pane{
    display: none !important;
  }
  .n-tabs-tab{
    background-color: transparent !important;
    border: none !important;
    color: var(--gray-400) !important;
  }
  .n-tabs-tab-pad, .n-tabs-pad{
    border: none !important;
  }
  .n-tabs-nav-scroll-content{
    border-bottom: none !important;
  }
  .n-tabs-tab--active{
    color: var(--white-color) !important;
    background: rgba(16, 169, 255, 0.18) !important;
  }
}
</style>
