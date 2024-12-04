<script setup>

defineProps({
  count:{
    type:Number,
    required:true
  },
  description:{
    type:String,
    required:true
  },
  number:{
    type:String,
    required:true
  },

})
</script>

<template>
  <div
      :class="`element-${number} animation_${number}`"
      class="w-[230px] rounded-xl bg-white border flex items-center gap-2 border-blue-50 shadow p-2 absolute">
    <div class=" flex justify-center items-center min-w-[80px] bg-[#1528f62b] rounded-xl">
      <img class="w-[50px]" src="/public/imgs/school1.svg" alt="">
    </div>
    <div class=" p-1 text-left leading-[1] text-[#79838E]">
      <span class="text-primary text-xl font-bold">{{count}}</span>  {{description}}
    </div>
  </div>
</template>

<style scoped>
.element-one{
  top:100px;
  right: 300px;
}
.element-two{
  top:300px;
  right: 80px;
}
.element-three{
  top:300px;
  right: 400px;
}
.element-four{
  top:500px;
  right: 200px;
}
.animation_one, .animation_two, .animation_three, .animation_four {
  animation: vibration2 2s ease-in-out infinite;

}
.animation_two{
  animation-delay: -2.4s;
}
.animation_three{
  animation-delay: 0.5s;
}
.animation_four{
  animation-delay: -1s;
}


@keyframes vibration2 {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(10px);
  }
}
</style>