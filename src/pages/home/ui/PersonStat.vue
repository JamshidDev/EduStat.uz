<script setup>

</script>

<template>
<div class="p-2 rounded-xl border border-blue-100 flex flex-col absolute bottom-[40px] right-[90px] bg bg-white shadow person_animation">
<div class="flex items-center justify-center">
  <img class="w-[40px] h-[40px] rounded-full border border-blue-200 relative " src="/public/imgs/person.png" alt="person">
  <img class="w-[40px] h-[40px] rounded-full border border-blue-200 relative left-[-10px]" src="/public/imgs/person.png" alt="person">
  <img class="w-[40px] h-[40px] rounded-full border border-blue-200 relative left-[-20px]" src="/public/imgs/person.png" alt="person">
  <img class="w-[40px] h-[40px] rounded-full border border-blue-200 relative left-[-30px]" src="/public/imgs/person.png" alt="person">
  <span class="text-primary font-bold text-lg relative left-[-20px] whitespace-nowrap w-[70px]">1285679 +</span>
</div>
  <div class="w-full text-center text-[#79838E] font-medium">nafar talaba </div>
</div>
</template>

<style scoped>

.person_animation {
  animation: vibration2 2s ease-in-out infinite;
}
@keyframes vibration2 {
  0%, 100% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(10px);
  }
}
</style>