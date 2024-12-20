<script setup>
import {Location20Regular, Mail20Regular, Call28Regular, GlobeSearch20Filled, CircleSmall24Regular} from "@vicons/fluent"
import Map from "@/components/yandexMap/Map.vue"
import LMap from "@/components/leafletMap/LMap.vue"
const visitor = ref(0)

onMounted(()=>{
  visitor.value = Math.floor(Math.random() * 6) + 1
})
</script>

<template>
<div id="contact_section" class="w-full bg-[#071633] min-h-[300px] flex flex-col">
<div class="grid grid-cols-12 xl:px-10 lg:px-10 md:px-5 px-0 py-10 w-full max-w-[1920px] mx-auto">
  <div class="xl:col-span-4 lg:col-span-4 md:col-span-6 col-span-12 px-4">
    <h6 class="text-lg text-white mb-10">Bog'lanish</h6>
    <div class="text-[#C9D2EE] flex gap-4 mb-2">
      <n-icon size="24">
        <Location20Regular/>
      </n-icon>
      <span>Toshkent shahri, Navoiy ko‘chasi, 30-uy</span>
    </div>
    <div class="text-[#C9D2EE] flex gap-4 mb-2">
      <n-icon size="24">
        <Mail20Regular/>
      </n-icon>
      <span>info@trm.uz support@trm.uz</span>
    </div>
    <div class="text-[#C9D2EE] flex gap-4 mb-2">
      <n-icon size="24">
        <Call28Regular/>
      </n-icon>
      <span> <a href="tel:+998555190202" target="_blank">+998 (55) 519-02-02</a></span>
    </div>
    <div class="text-[#C9D2EE] flex gap-4 mb-2">
      <n-icon size="24">
        <GlobeSearch20Filled/>
      </n-icon>
      <span>
        <a href="https://trm.uz" target="_blank">https://trm.uz</a>
      </span>
    </div>
  </div>

<!--  <div class="xl:col-span-3 lg:col-span-3 md:col-span-6 col-span-12 px-4">-->
<!--    <h6 class="text-lg text-white mb-10">Tuzilma</h6>-->
<!--    <div class="text-[#C9D2EE] flex gap-4 mb-2">-->
<!--      <n-icon size="24">-->
<!--        <CircleSmall24Regular/>-->
<!--      </n-icon>-->
<!--      <span>Rahbariyat</span>-->
<!--    </div>-->
<!--    <div class="text-[#C9D2EE] flex gap-4 mb-2">-->
<!--      <n-icon size="24">-->
<!--        <CircleSmall24Regular/>-->
<!--      </n-icon>-->
<!--      <span>Boshqarma boshliqlari</span>-->
<!--    </div>-->
<!--    <div class="text-[#C9D2EE] flex gap-4 mb-2">-->
<!--      <n-icon size="24">-->
<!--        <CircleSmall24Regular/>-->
<!--      </n-icon>-->
<!--      <span>Ta’limga oid statistikalar</span>-->
<!--    </div>-->
<!--    <div class="text-[#C9D2EE] flex gap-4 mb-2">-->
<!--      <n-icon size="24">-->
<!--        <CircleSmall24Regular/>-->
<!--      </n-icon>-->
<!--      <span>Sayt xaritasi</span>-->
<!--    </div>-->
<!--  </div>-->

  <div class="xl:col-span-4 lg:col-span-4 md:col-span-6 col-span-12 px-4">
    <h6 class="text-lg text-white mb-10">Tuzilma</h6>
    <div class="text-[#C9D2EE] flex gap-4 mb-2">
      <n-icon size="24">
        <CircleSmall24Regular/>
      </n-icon>
      <span>Rahbariyat</span>
    </div>
    <div class="text-[#C9D2EE] flex gap-4 mb-2">
      <n-icon size="24">
        <CircleSmall24Regular/>
      </n-icon>
      <span>Boshqarma boshliqlari</span>
    </div>
    <div class="text-[#C9D2EE] flex gap-4 mb-2">
      <n-icon size="24">
        <CircleSmall24Regular/>
      </n-icon>
      <span>Ta’limga oid statistikalar</span>
    </div>
    <div class="text-[#C9D2EE] flex gap-4 mb-2">
      <n-icon size="24">
        <CircleSmall24Regular/>
      </n-icon>
      <span>Sayt xaritasi</span>
    </div>
  </div>
  <div class="xl:col-span-4 lg:col-span-4 md:col-span-6 col-span-12 px-4">
    <h6 class="text-lg text-white mb-4">Xaritada joylashuv</h6>
    <LMap/>
  </div>

</div>



  <div class="w-full border-t border-[#6a9cd25c] p-4 flex justify-center items-center">
    <span class="text-xs text-center text-[#C9D2EE] font-normal">Copyright © 2024. Materialdan to‘liq yoki qisman foydalanganda,   <a href="https://trm.uz" target="_blank" class="hover:text-primary cursor-pointer">trm.uz</a> manbasi ko‘rsatilishi shart.</span>
  </div>
  <div class="text-[#C9D2EE] flex justify-center text-xs pb-2">Saytda mehmonlar soni: {{visitor}} ta</div>
</div>
</template>

<style scoped>

</style>