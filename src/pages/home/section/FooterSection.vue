<script setup>
import {Location20Regular, Mail20Regular, Call28Regular, GlobeSearch20Filled, CircleSmall24Regular} from "@vicons/fluent"
import Map from "@/components/yandexMap/Map.vue"
</script>

<template>
<div class="w-full bg-[#071633] min-h-[300px] flex flex-col">
<div class="grid grid-cols-12 p-10">
  <div class="col-span-3 px-4">
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

  <div class="col-span-3 px-4">
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

  <div class="col-span-3 px-4">
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
  <div class="col-span-3 px-4">
    <h6 class="text-lg text-white mb-4">Xaritada joylashuv</h6>
    <div class="rounded">
      <Map />
    </div>
  </div>

</div>



  <div class="w-full border-t border-[#6a9cd25c] p-4 flex justify-center items-center">
    <span class="text-xs text-center text-[#C9D2EE] font-normal">Copyright © 2024. Materialdan to‘liq yoki qisman foydalanganda, trm.uz manbasi ko‘rsatilishi shart.</span>
  </div>
</div>
</template>

<style scoped>

</style>