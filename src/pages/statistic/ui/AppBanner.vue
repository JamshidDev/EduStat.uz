<script setup>
import {usePresentationStore} from "@/store/modules/index.js"
const store = usePresentationStore()

const onChangeMap = ()=>{
  store._changeMap()
}

</script>

<template>
<div class="h-full w-[400px] bg-cyan-900">
<button @click="onChangeMap">Change</button>
</div>
</template>

<style scoped>

</style>