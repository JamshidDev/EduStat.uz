<script setup>
import MapContent from "@/pages/home/mapSection/MapContent.vue"
import {mapFilterList} from "@/utils/index.js"
import {usePresentationStore} from "@/store/modules/index.js"
import MapElement from "@/pages/home/mapElement/MapElement.vue"
import KhorezmRegion from "@/pages/home/mapElement/KhorezmRegion.vue"
import TashkentCity from "@/pages/home/mapElement/TashkentCity.vue"
import TashkentRegion from "@/pages/home/mapElement/TashkentRegion.vue"
import NavoiyRegion from "@/pages/home/mapElement/NavoiyRegion.vue"
import BuxoroRegion from "@/pages/home/mapElement/BuxoroRegion.vue"
import Qoraqolpoq from "@/pages/home/mapElement/Qoraqolpoq.vue"
import SamarqandRegion from "@/pages/home/mapElement/SamarqandRegion.vue"
import QashqadaryoRegion from "@/pages/home/mapElement/QashqadaryoRegion.vue"
import SurxandaryoRegion from "@/pages/home/mapElement/SurxandaryoRegion.vue"
import JizzaxRegion from "@/pages/home/mapElement/JizzaxRegion.vue"
import SirdaryoRegion from "@/pages/home/mapElement/SirdaryoRegion.vue"
import MapText from "@/pages/home/mapElement/MapText.vue"
import NamanganRegion from "@/pages/home/mapElement/NamanganRegion.vue"
import AndijonRegion from "@/pages/home/mapElement/AndijonRegion.vue"
import FerganaRegion from "@/pages/home/mapElement/FerganaRegion.vue"
import InfographicElement from "@/pages/home/mapElement/InfographicElement.vue"

const store = usePresentationStore()
</script>

<template>
<div
    id="map_section"
    :class="[store.fullScreen? 'fixed top-0 bottom-0 left-0 right-0 z-50 h-[100vh] pb-0' : 'pb-20 h-[80vh]']"
    class="w-full  flex bg-surface-ground">
  <div class="flex w-full max-w-[1920px] mx-auto" :class="[store.fullScreen? 'px-0':'px-20']">
    <div class="w-[480px] min-h-full bg-surface-section rounded-xl p-4">
      <MapContent/>
    </div>
    <div style="width:calc(100% - 480px)" class="min-h-full map_section_effect relative">
      <div style="width: calc(100% - 24px)" class="bg-white rounded-xl mx-3 p-1">
        <n-tabs type="card" animated class="hidden-panel-tab" v-model:value="store.filterActiveTab">
          <n-tab-pane v-for="(item ,idx) in mapFilterList" :key="idx" :name="item.id" :tab="item.name">
            {{item.name}}
          </n-tab-pane>
        </n-tabs>
      </div>
      <div class="w-full flex justify-center items-center"
           :class="store.activeState !== 'infoGraphic' && 'overflow-hidden'"
           style="height: calc(80vh - 40px)">
        <MapText/>
        <Transition name="zoom" mode="out-in">
          <MapElement v-if="store.activeState === 'uzbekistan'"/>
          <KhorezmRegion v-else-if="store.activeState === 'khorezm'"/>
          <TashkentCity v-else-if="store.activeState === 'tashkentcity'"/>
          <TashkentRegion  v-else-if="store.activeState === 'tashkent'"/>
          <NavoiyRegion v-else-if="store.activeState === 'navoiy'" />
          <BuxoroRegion v-else-if="store.activeState === 'buxoro'" />
          <Qoraqolpoq v-else-if="store.activeState === 'qoraqolpoq'" />
          <SamarqandRegion v-else-if="store.activeState === 'samarqand'" />
          <QashqadaryoRegion v-else-if="store.activeState === 'qashqadaryo'" />
          <SurxandaryoRegion v-else-if="store.activeState === 'surxandaryo'" />
          <JizzaxRegion v-else-if="store.activeState === 'jizzax'" />
          <SirdaryoRegion v-else-if="store.activeState === 'sirdaryo'" />
          <NamanganRegion v-else-if="store.activeState === 'namangan'" />
          <AndijonRegion v-else-if="store.activeState === 'andijon'" />
          <FerganaRegion v-else-if="store.activeState === 'fergana'" />
          <InfographicElement v-else-if="store.activeState === 'infoGraphic'" />
        </Transition>
      </div>
    </div>
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

.zoom-enter-active{
  transition: transform 0.2s ease, opacity 0.2s ease;
}
.zoom-leave-active{
  transition: transform 0.2s ease, opacity 0.1s ease;
}

.zoom-enter-from {
  transform: scale(0.5);
  opacity: 1;
}

.zoom-leave-to {
  transform: scale(4);
  opacity: 0.3;
}


</style>
