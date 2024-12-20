<script setup>
import L from 'leaflet';
const map = ref(null)
const mapView = ref({
  center:[41.311081,69.240562],
  zoom:18,
  options:{
    maxZoom: 14,
    minZoom:5,
    zoomAnimation:true,
  }
})

const initialMap = ()=>{
  map.value = L.map('map_element').setView(mapView.value.center, mapView.value.zoom);
  L.tileLayer('https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png', mapView.value.options).addTo(map.value);
}

const addMarker = ()=>{
  L.marker([41.311081,69.240562]).addTo(map.value);
}


// onMounted(async ()=>{
//   initialMap()
//   addMarker()
// })
</script>

<template>
  <div class="w-full h-[300px] overflow-hidden z-[1] rounded-xl border-[2px] border-[#6a9cd25c] relative">
<!--    <div class="map__element w-full min-h-full" id="map_element"></div>-->
    <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Af253b8b07b44514ba7b135e21b06bb09af406b777a8ee7bc529c217b7cc75473&amp;source=constructor" width="605" height="393" frameborder="0"></iframe>
  </div>


</template>
