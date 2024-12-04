<script setup>
import UzbMap from "@/pages/statistic/ui/uzbMap.vue"
import {usePresentationStore} from "@/store/modules/index.js"
import KharezmMap from "@/pages/statistic/resource/kharezmMap.vue"
const store = usePresentationStore()
const panning = ref(false)
const scale = ref(1)
const pointX = ref(0)
const pointY = ref(0)
const start = ref({
  x:0,
  y:0,
})

const zoo_element = ref(null)
const kharezm_element = ref(null)
const zoo_element_container = ref(null)

const initialZoom = ()=>{
  zoo_element.value.addEventListener('mousedown', (event) => {
    event.preventDefault();
    start.value = {
      x: event.clientX - pointX.value,
      y: event.clientY - pointY.value,
    };
    panning.value = true;
  })

  zoo_element.value.addEventListener('mouseup', (event) => {
    event.preventDefault();
    panning.value = false;
  });

  zoo_element.value.addEventListener('mousemove', (event) => {
    event.preventDefault();
    if (!panning.value) {
      return;
    }
    pointX.value = (event.clientX - start.value.x);
    pointY.value = (event.clientY - start.value.y);
    zoo_element.value.style.transform = `translate(${pointX.value}px, ${pointY.value}px) scale(${scale.value})`
  });

  // zoo_element.value.addEventListener('wheel', (event) => {
  //   event.preventDefault();
  //   const xs = (event.clientX - pointX.value) / scale.value;
  //   const ys = (event.clientY - pointY.value) / scale.value;
  //   const delta = (event.wheelDelta ? event.wheelDelta : -event.deltaY);
  //   delta > 0 ? scale.value *= 1.2 : scale.value /= 1.2;
  //   pointX.value = event.clientX - xs * scale.value;
  //   pointY.value = event.clientY - ys * scale.value;
  //
  //   console.log(`pointX: ${pointX.value}`)
  //   console.log(`pointY: ${pointY.value}`)
  //   console.log(`scale: ${scale.value}`)
  //   zoo_element.value.style.transform = `translate(${pointX.value}px, ${pointY.value}px) scale(${scale.value})`;
  // });

  zoo_element.value.addEventListener("mouseout", (event) => {
    panning.value = false;
  });
  zoo_element_container.value.addEventListener("contextmenu", (event) => {
    event.preventDefault();
  })
  zoo_element_container.value.addEventListener("mouseover", (event) => {
    event.preventDefault();
    document.body.style.overflow = "hidden";
  })
  zoo_element_container.value.addEventListener("mouseout", (event) => {
    event.preventDefault();
    document.body.style.overflow = "auto";
  })


}

onMounted(()=>{
  // initialZoom()
  store._initialZoom(zoo_element.value, zoo_element_container.value)
  store.kharezm_element = kharezm_element.value
  store._goPushMap(164,-33,1)
  // store._pushKharezm(164,-33,1)

})
</script>

<template>
  <div
      id="zoom-container"
      ref="zoo_element_container"
      class="overflow-hidden border-round relative border flex justify-center items-center w-full h-full
">
    <div class="absolute top-[4px] left-[6px] flex gap-x-4 text-xs font-bold text-gray-400">
      <span>X:{{store.kharezmCoords.x}}</span>
      <span>Y:{{store.kharezmCoords.y}}</span>
      <span>Zoom:{{store.kharezmCoords.zoom}}</span>
    </div>

    <div id="trigger-zoom-element" ref="zoo_element"
         class="trigger-zoom-element cursor-pointer flex justify-center items-center
                border border-gray-300  ">
      <UzbMap/>
    </div>
    <div ref="kharezm_element"  class="kharezm_elemen border border-blue-300">
      <KharezmMap/>
    </div>
  </div>
</template>

<style scoped>
.trigger-zoom-element {
  transform-origin: 0 0;
  transform: scale(1) translate(0px, 0px);
  transition: all 0.5s ease-out;
  cursor: grab;
}
.kharezm_elemen{
  transform-origin: 0 0;
  transform: scale(1) translate(0px, 0px);
  transition: all 0.5s ease-out;
  cursor: grab;
  //position: absolute;
  //top: 50%;
  //left: 50%;
  //transform: scale(1) translate(-50%, -50%);
}
</style>