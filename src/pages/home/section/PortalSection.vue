<script setup>
import PortalHeader from "@/pages/home/ui/PortalHeader.vue"
import PortalBoard from "@/pages/home/ui/PortalBoard.vue"
</script>

<template>
  <div class="w-full bg-[#F3F5FB] relative bg-effect-left px-20 py-[90px] min-h-[500px]">
    <div class="w-full max-w-[1920px] mx-auto">
      <PortalHeader/>
      <PortalBoard/>
    </div>
  </div>
</template>

<style scoped>
.bg-effect-left {
  &:before {
    content: " ";
    width: 100%;
    max-width: 600px;
    height: 500px;
    position: absolute;
    left: 0;
    bottom: 0;
    background-image: url("/public/imgs/portal_effect.png");
    background-repeat: no-repeat;

  }
}
</style>