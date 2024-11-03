<script setup>
import {useRegisterStore} from "@/store/modules/index.js";

const store = useRegisterStore()
const formRef = ref(null)
import validationRules from "@/utils/validationRules.js";

const onSubmit = ()=>{
  formRef.value?.validate((error)=>{
    if(!error){
      store._register()
    }
  })
}
</script>

<template>
  <n-form
      ref="formRef"
      :rules="validationRules.register"
      :model="store.payload"
      class="w-[400px] p-[20px] flex flex-col"
  >
    <div class="w-full">
      <span class="text-2xl font-medium text-center block">{{ $t(`registerPage.title`) }}</span>
    </div>
    <n-form-item :label="$t(`registerPage.firstName`)" path="first_name">
      <n-input
          type="text"
          :placeholder="$t(`registerPage.firstName`)"
          v-model:value="store.payload.first_name"
      />
    </n-form-item>
    <n-form-item :label="$t(`registerPage.lastName`)" path="last_name">
      <n-input
          type="text"
          :placeholder="$t(`registerPage.lastName`)"
          v-model:value="store.payload.last_name"
      />
    </n-form-item>
    <n-form-item :label="$t(`loginPage.email`)" path="email">
      <n-input
          type="text"
          name="email"
          :placeholder="$t(`loginPage.email`)"
          v-model:value="store.payload.email"
      />
    </n-form-item>
    <n-form-item :label="$t(`loginPage.password`)" path="password">
      <n-input
          name="password"
          type="text"
          :placeholder="$t(`loginPage.password`)"
          v-model:value="store.payload.password"
      />
    </n-form-item>
    <n-form-item>
      <n-button
          class="mt-4 flex !w-full"
          type="info"
          :loading="store.loading"
          @click="onSubmit"
      >{{$t(`registerPage.title`)}}</n-button>
    </n-form-item>
  </n-form>
</template>

<style scoped>

</style>