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


onMounted(async ()=>{
  initialMap()
  addMarker()
})
</script>

<template>
  <div class="w-full h-[300px] overflow-hidden rounded-xl border-[2px] border-[#6a9cd25c]">
    <div class="map__element w-full min-h-full" id="map_element"></div>
  </div>

</template>
