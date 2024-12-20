<script setup>
import {Search48Filled, Filter20Filled, BuildingBank28Regular, FullScreenMaximize16Regular, ChartMultiple20Regular, FullScreenMinimize24Regular, DismissCircle20Regular} from "@vicons/fluent"
import {regionList} from "@/utils/index.js"
import Utils from "@/utils/Utils.js"
const currentElement = ref(20)
import {usePresentationStore} from "@/store/modules/index.js"
const store = usePresentationStore()

const onChangeScreen = ()=>{
  store.fullScreen = !store.fullScreen
  document.body.style.overflow = store.fullScreen? 'hidden' : 'auto'
}

const onChange = ()=>{
  store.changeState(store.activeState === 'infoGraphic' ? 'uzbekistan' : 'infoGraphic')

}
onMounted(()=>{
  store.sidebarData = store.mapData[0].content
})
</script>

<template>
  <div style="height: calc(100% - 70px)">
    <div class="grid grid-cols-12 gap-4">
      <div class="col-span-12">
        <n-input-group class="mt-4">
          <n-input
              class="bg-surface-ground"
              placeholder="Tuman va maktablar bo’yicha qidiruv..."
          >
            <template #prefix>
              <n-icon :component="Search48Filled" />
            </template>
          </n-input>

          <n-popover
              trigger="click"
              scrollable
              placement="bottom"
              style="width: 300px; height: 300px"
          >
            <template #trigger>
              <n-button color="#79838E">
                <template #icon>
                  <n-icon><Filter20Filled /></n-icon>
                </template>
              </n-button>
            </template>
            <div class="flex flex-col">
              <span class="text-sm text-surface-400">{{$t('content.filterSetting')}}</span>
              <slot name="filterContent"></slot>
            </div>
          </n-popover>
        </n-input-group>
      </div>

      <template v-for="(item,idx) in store.sidebarData" :key="idx">
        <div class="col-span-6 bg-[#F3F5FB]">
          <div class="w-full flex bg-[#F3F5FB] border border-surface-200 rounded p-2">
            <div class="flex justify-center items-center rounded bg-primary w-[30px] h-[30px]">
              <n-icon size="24" color="#FFFFFF">
                <BuildingBank28Regular/>
              </n-icon>
            </div>
            <div style="width: calc(100% - 30px)" class="flex flex-col pl-2">
              <span class="font-bold leading-[1]">{{Utils.numberFormat(item.value)}} </span>
              <span class="text-[#9CAFB7] text-xs leading-[1]">{{$t(item.title)}}</span>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>

 <div class="grid grid-cols-12 gap-2 mt-2">
   <div class="col-span-4">
     <n-select
         v-model:value="currentElement"
         :options="regionList"
         label-field="name"
         value-field="id"
     />
   </div>
   <div class="col-span-4">
     <n-button :type="store.activeState === 'infoGraphic'? 'error' : 'default'" ghost @click="onChange" icon-placement="right" class="w-full">
       Infografika
       <template #icon>
         <DismissCircle20Regular v-if="store.activeState === 'infoGraphic'" />
         <ChartMultiple20Regular v-else />
       </template>
     </n-button>
   </div>
   <div class="col-span-4">
     <n-button
         @click="onChangeScreen"
         icon-placement="right">
       To’liq ekran
       <template #icon>
         <FullScreenMinimize24Regular v-if="store.fullScreen"/>
         <FullScreenMaximize16Regular v-else />
       </template>
     </n-button>
   </div>
   <div class="col-span-12">
     <span class="text-xs font-normal text-[#79838E]">Respublika bo’yicha ko’rsatkichlar 2024 -yil 14- noyabr holatiga ko’ra </span>
   </div>
 </div>
</template>

<style scoped>

</style>