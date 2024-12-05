<script setup>
import MapContent from "@/pages/home/mapSection/MapContent.vue"
import MapElement from "@/pages/home/mapElement/MapElement.vue"
import NavoiyRegion from "@/pages/home/mapElement/NavoiyRegion.vue"
const activeElement = ref(1)

const onChange = ()=>{
  activeElement.value = activeElement.value ===1? 2 : 1
}
</script>

<template>
<div class="w-full min-h-screen flex bg-surface-ground border border-surface-200">
  <div class="w-[480px] min-h-full shadow bg-surface-section border border-surface-200 rounded-xl p-4">
    <MapContent/>
  </div>
  <div style="width:calc(100% - 480px)" class="min-h-full map_section_effect relative flex justify-center items-center">
<!--    <div class="w-full bg-white rounded border border-surface-100 ">-->

<!--    </div>-->
    <MapElement v-if="activeElement === 1" />
<!--    <n-button @click="onChange">Change</n-button>-->
<!--    <Transition name="zoom" mode="out-in">-->
<!--      <MapElement v-if="activeElement === 1" />-->
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
