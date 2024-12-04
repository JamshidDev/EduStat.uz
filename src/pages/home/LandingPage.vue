<script setup>
import AppHeader from "@/pages/home/ui/AppHeader.vue"
import AppLogo from "@/pages/home/ui/AppLogo.vue"
import MainSection from "@/pages/home/section/MainSection.vue"
import PortalSection from "@/pages/home/section/PortalSection.vue"
</script>

<template>
  <div class="grid grid-cols-12">
    <div class="col-span-12">
      <AppHeader>
        <template #app-logo>
          <AppLogo/>
        </template>
      </AppHeader>
      <MainSection/>
      <PortalSection/>
    </div>
  </div>
</template>

<style scoped>

</style>