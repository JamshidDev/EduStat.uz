<script setup>
import MapContent from "@/pages/home/mapSection/MapContent.vue"
import {mapFilterList} from "@/utils/index.js"
import {usePresentationStore} from "@/store/modules/index.js"
import MapElement from "@/pages/home/mapElement/MapElement.vue"
const store = usePresentationStore()

</script>

<template>
<div class="w-full min-h-screen flex bg-surface-ground border border-surface-200">
  <div class="w-[480px] min-h-full shadow bg-surface-section border border-surface-200 rounded-xl p-4">
    <MapContent/>
  </div>
  <div style="width:calc(100% - 480px)" class="min-h-full map_section_effect relative">
    <div style="width: calc(100% - 8px)" class="bg-white rounded-xl mx-1 border border-surface-100 p-1 shadow">
      <n-tabs type="card" animated class="hidden-panel-tab" v-model:value="store.filterActiveTab">
        <n-tab-pane v-for="(item ,idx) in mapFilterList" :key="idx" :name="item.id" :tab="item.name">
          {{item.name}}
        </n-tab-pane>
      </n-tabs>
    </div>
    <div class="w-full flex justify-center items-center" style="height: calc(100vh - 40px)">
      <MapElement/>
    </div>
<!--    <n-button @click="onChange">Change</n-button>-->
<!--    <Transition name="zoom" mode="out-in">-->

<!--      <NavoiyRegion v-else-if="activeElement === 2"/>-->
<!--    </Transition>-->

  </div>
</div>
</template>

<style scoped>
.map_section_effect{
 &:before{
   content: '';
   width: 100%;
   position: absolute;
   bottom: 0;
   left: 0;
   right: 0;
   height: 160px;
   background-image: url("/public/imgs/map_bg_effect.png");
 }
}

.zoom-enter-active, .zoom-leave-active {
  transition: transform 0.225s ease, opacity 0.225s ease;
}

.zoom-enter-from {
  transform: scale(0.21);
  opacity: 0.3;
}

.zoom-leave-to {
  transform: scale(0.21);
  opacity: 0.3;
}


</style>
