<template>
  <main>
    <Auth
      v-if="step === FIELD.EMAIL"
      :field="FIELD.EMAIL"
      title="이메일"
      btnText="인증번호 전송하기"
      :next="FIELD.USER_NAME"
    />
    <!-- <Auth
      v-if="step === FIELD.EMAIL_AUTH"
      :field="FIELD.EMAIL_AUTH"
      title="이메일 인증"
      btnText="인증하기"
      :next="FIELD.USER_NAME"
    /> -->
    <Auth
      v-if="step === FIELD.USER_NAME"
      :field="FIELD.USER_NAME"
      title="이름"
      btnText="이름 사용하기"
      :next="FIELD.PWD"
    />
    <Auth
      v-if="step === FIELD.PWD"
      :field="FIELD.PWD"
      title="비밀번호"
      btnText="가입하기"
      :next="FIELD.EMAIL"
    />
  </main>
</template>

<script setup>
import { useSignupStore } from "@/stores/signup";
import { storeToRefs } from "pinia";
import Auth from "@/components/signup/Auth.vue";
import { FIELD } from "@/constants/ui";
const store = useSignupStore();
const { user, step } = storeToRefs(store);
</script>

<style>
main {
  padding: 0 12px;
}
</style>
