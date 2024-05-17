<template>
  <main>
    <Auth
      v-if="step === FIELD.EMAIL"
      :field="FIELD.EMAIL"
      title="이메일"
      btnText="이메일 인증"
      :next="FIELD.EMAIL_AUTH"
    />
    <Auth
      v-if="step === FIELD.EMAIL_AUTH"
      :field="FIELD.EMAIL_AUTH"
      title="이메일 인증"
      btnText="인증하기"
      :next="FIELD.USER_NAME"
    />
    <!-- <EmailAuth v-if="step === STEP.EMAIL_AUTH" />
    <Username v-if="step === STEP.USER_NAME" />
    <Password v-if="step === STEP.PASSWORD" /> -->
  </main>
</template>

<script setup>
import Email from "@/components/signup/Email.vue";
import EmailAuth from "@/components/signup/EmailAuth.vue";
import Username from "@/components/signup/Username.vue";
import Password from "@/components/signup/Password.vue";
import { useSignupStore } from "@/stores/signup";
import { storeToRefs } from "pinia";
import Auth from "@/components/signup/Auth.vue";
import { FIELD } from "@/constants/ui";

const store = useSignupStore();
const { user, step } = storeToRefs(store);

console.log(store.getStep());
console.log(store.getUser());
</script>

<style>
main {
  padding: 0 12px;
}
</style>
