<script setup>
import {navigationData} from "@/utils/index.js"
import LangDropdown from "@/components/general/LangDropdown.vue"
</script>

<template>
<div class="w-full h-[100px] flex justify-between items-center bg-[#071633] px-4 relative app-header-bg">
  <div class="flex z-10">
    <slot name="app-logo"></slot>
  </div>
  <div class="flex ">
    <template v-for="(item, idx) in navigationData" :key="idx">
      <a :href="`#${item.key}`" class="text-sm uppercase text-white p-2 mx-1 hover:text-primary transition-all">
        {{$t(item.name)}}
      </a>
    </template>
    <span class="ml-10">
      <LangDropdown/>
    </span>

  </div>
</div>
</template>

<style scoped>
.app-header-bg{
  &::before{
    content: " ";
    width: 440px;
    height: 100%;
    position: absolute;
    top: 0;
    left: -60px;
    background-image: url("/public/imgs/img1.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
}
</style>