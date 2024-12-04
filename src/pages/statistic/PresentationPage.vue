<script setup>
import AppHeader from "@/pages/statistic/ui/AppHeader.vue"
import AppBanner from "@/pages/statistic/ui/AppBanner.vue"
import ZoomContainer from "@/pages/statistic/ui/zoomContainer.vue"
import {usePresentationStore} from "@/store/modules/index.js"
const store = usePresentationStore()


onMounted(() => {
  store._initialEvent()
})

</script>

<template>
  <div class="w-full h-screen bg-gray-200 overflow-hidden">
    <AppHeader/>
    <div
        class="flex"
        style="height: calc(100vh - 60px)"
    >
      <AppBanner/>
      <div class="h-full flex justify-center items-center bg-image" style="width: calc(100% - 400px)">
        <ZoomContainer/>
      </div>
    </div>
  </div>
</template>

<style>
.bg-image {
  background-image: url("/public/effect.png"), linear-gradient(95.28deg, #f3f5fb 2.72%, #e5ebf8 96.74%);
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: 100%;
}
</style>
