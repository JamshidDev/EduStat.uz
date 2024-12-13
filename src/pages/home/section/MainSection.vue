<script setup>
import StatElement from "@/pages/home/ui/StatElement.vue"
import StatText from "@/pages/home/ui/StatText.vue"
import StatButton from "@/pages/home/ui/StatButton.vue"
import PersonStat from "@/pages/home/ui/PersonStat.vue"
</script>

<template>
  <div style="height: calc(100vh - 100px)" class="w-full bg-[url('/public/imgs/main_section_bg.png')] bg-repeat-x relative bottom-effect">
    <span class="animation_1 w-[100px] h-[100px] rounded-full absolute top-[130px] left-[60px]" style="background: radial-gradient(circle, rgba(31,97,235,0.7) 0%, rgba(25,95,241,0.25) 100%);"></span>
    <StatText/>
    <StatElement
        :count="12456"
        :description="`ta maktab binosi`"
        :number="'one'"
    />
    <StatElement
        :count="12456"
        :description="`ta oligoh binosi`"
        :number="'two'"
    />
    <StatElement
        :count="12456"
        :description="`ta kollej binosi`"
        :number="'three'"
    />
    <StatElement
        :count="12456"
        :description="`ta litsey binosi`"
        :number="'four'"
    />
    <PersonStat/>
    <StatButton/>
  </div>
</template>

<style scoped>
.bottom-effect {
  &:before {
    content: ' ';
    width: 600px;
    height: 400px;
    position: absolute;
    bottom: 0;
    right: 0;
    background-image: url("/public/imgs/main_section-effect.png");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }
}

.animation_1 {
  animation: vibration 2s ease-in-out infinite;
}



@keyframes vibration {
  0%, 100% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(10px);
  }
}




</style>