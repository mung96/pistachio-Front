<template>
  <div>
    <Title>이메일</Title>
    <Input
      @input="handleInput"
      v-model="email"
      :placeholder="EMAIL_PLACEHOLDER"
      :message="
        !email
          ? EMAIL_MESSAGE
          : isFormatValid
            ? EMAIL_FORMAT_SUCCESS_MESSAGE
            : EMAIL_FORMAT_ERROR_MESSAGE
      "
      :color="palette.pinkred"
    />

    <Button :disabled="!isFormatValid" @click="handleBtnClick"
      >이메일 인증</Button
    >
  </div>
</template>

<script setup>
import { ref } from "vue";
import Title from "@/components/signup/Title.vue";
import Input from "@/components/common/input/Input.vue";
import Button from "@/components/common/button/Button.vue";
import { palette } from "@/constants/color";
import {
  EMAIL_PLACEHOLDER,
  EMAIL_MESSAGE,
  EMAIL_FORMAT_ERROR_MESSAGE,
  EMAIL_FORMAT_SUCCESS_MESSAGE,
} from "@/constants/ui";
import { checkEmail } from "@/utils/validator";
import { BASE_URL } from "@/constants/api";
import { getEmailDuplicate } from "@/apis/signup/getEmailDuplicate";

const email = ref("");
const isFormatValid = ref(false);

const handleInput = (e) => {
  email.value = e.target.value;
  isFormatValid.value = checkEmail(email.value);
  console.log(BASE_URL);
};
const handleBtnClick = () => {
  const response = getEmailDuplicate(email.value);
  response.then((res) => console.log(res.status));
  //이메일 중복확인 보내기 API
  //실패하면 가입된 메일입니다.
  //성공하면 인증메일 발송하고 다음 페이지
};
</script>

<style></style>
