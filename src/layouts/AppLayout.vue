<script setup>
import {useRoute} from "vue-router";
import Client from "./Main/Client.vue"
import Empty from "./Empty/Empty.vue"
import {AppLayouts} from "@/utils/index.js"


const route = useRoute()

const layout = computed(() => {
  switch (route?.meta?.layout) {
    case AppLayouts.empty:
      return Empty
    default:
      return Client
  }
})
</script>

<template>
    <component :is="layout">
      <router-view/>
    </component>

</template>
