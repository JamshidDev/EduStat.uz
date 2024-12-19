<script setup>
import {DismissCircle20Regular} from '@vicons/fluent'
import {usePresentationStore} from "@/store/modules/index.js"
const store = usePresentationStore()

const onRestore = ()=>{
  store.changeState('uzbekistan')
}
</script>

<template>
  <div class="absolute top-[60px] right-[20px] flex items-center gap-2">

    <h3 class="text-primary text-sm">{{store.mapText}}</h3>
    <n-icon @click="onRestore()" v-if="store.activeState !== 'uzbekistan'" class="text-danger cursor-pointer" size="18">
      <DismissCircle20Regular/>
    </n-icon>
  </div>

</template>
