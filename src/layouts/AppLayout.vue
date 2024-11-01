<script setup>
import {useRoute} from "vue-router";
import Client from "./Main/Client.vue"
import {AppLayouts} from "@/utils/index.js"


const route = useRoute()

const layout = computed(() => {
  switch (route?.meta?.layout) {
    case AppLayouts.empty:
      return Client
    default:
      return Client
  }
})
</script>

<template>
    <component :is="Client">
      <router-view/>
    </component>

</template>
