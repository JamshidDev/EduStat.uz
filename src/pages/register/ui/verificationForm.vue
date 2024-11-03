<script setup>
import {ArrowLeft24Regular} from "@vicons/fluent"
import ValidationRules from "@/utils/validationRules.js";
import Utils from "@/utils/Utils.js";
import {useRegisterStore} from "@/store/modules/index.js";

const formRef = ref(null)
const store = useRegisterStore()
const onSubmit = () => {
  formRef.value?.validate((error) => {
    if (!error) {
    }
  })
}

</script>

<template>
  <n-form
      :rules="ValidationRules.verificationEmail"
      v-model="store.verificationPayload"
      ref="formRef"
      class="flex flex-col xl:w-[440px] rounded w-[360px] px-[30px] py-[40px] bg-surface-section"
  >
    <div class="w-full">
      <div>
        <n-button
            @click="store.activeTab=1"
            quaternary circle>
          <template #icon>
            <n-icon size="24" class="text-surface-600"><ArrowLeft24Regular /></n-icon>
          </template>
        </n-button>
      </div>
      <span class="font-bold text-3xl block text-center uppercase text-primary">{{ $t('verificationEmail.title') }}</span>
      <span class="block mt-5 text-sm text-center bg-blue-100 border border-blue-300 p-[10px] text-blue-600 rounded">{{ $t('verificationEmail.subtitle', {email: 'raximovj662@gamil.com'}) }}</span>
    </div>
    <n-form-item class="mb-5" path="code">
      <n-input
          type="text"
          maxlength="6"
          show-count
          :allow-input="Utils.onlyAllowNumber"
          :placeholder="$t(`verificationEmail.placeholder`)"
          v-model:value.number="store.verificationPayload.code"
      />
    </n-form-item>
    <n-button
        type="primary"
        :loading="store.verificationLoading"
        @click="onSubmit"
    >{{ $t(`verificationEmail.verification`) }}
    </n-button>
  </n-form>
</template>

<style scoped>

</style>