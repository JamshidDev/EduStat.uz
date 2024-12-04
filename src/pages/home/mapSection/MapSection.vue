<script setup>
import MapContent from "@/pages/home/mapSection/MapContent.vue"
</script>

<template>
<div class="w-full min-h-screen flex bg-surface-ground border border-surface-200">
  <div class="w-[480px] min-h-full shadow bg-surface-section border border-surface-200 rounded-xl p-4">
    <MapContent/>
  </div>
  <div style="width:calc(100% - 480px)" class="min-h-full map_section_effect relative"></div>
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
</style>