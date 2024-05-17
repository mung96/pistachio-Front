<template>
  <div>
    <Title>{{ title }}</Title>
    <Input
      @input="handleInput"
      v-model="inputData"
      :placeholder="PLACEHOLDER[field]"
      :message="message"
      :color="isValid ? palette.green : palette.pinkred"
    />

    <Button :disabled="!isValid" @click="handleBtnClick">{{ btnText }}</Button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Title from "@/components/signup/Title.vue";
import Input from "@/components/common/input/Input.vue";
import Button from "@/components/common/button/Button.vue";
import { palette } from "@/constants/color";
import {
  PLACEHOLDER,
  MESSAGE,
  DUPLICATE_ERROR_MESSAGE,
  FORMAT_ERROR_MESSAGE,
  FORMAT_SUCCESS_MESSAGE,
  DUPLICATE_SUCCESS_MESSAGE,
  FIELD,
} from "@/constants/ui";
import { checkEmail } from "@/utils/validator";
import { HTTP_STATUS_CODE } from "@/constants/api";
import { getEmailDuplicate } from "@/apis/signup/getEmailDuplicate";
import { isAxiosError } from "axios";
import { useSignupStore } from "@/stores/signup";

const props = defineProps({
  title: String,
  btnText: String,
  next: String,
  field: String,
});

const inputData = ref();
const message = ref(MESSAGE[props.field]);
const isValid = ref(false);
const store = useSignupStore();
const handleInput = (e) => {
  inputData.value = e.target.value;
  //여기 추상화
  //input 변화가 있을때마다 format관련 체크
  if (checkEmail(inputData.value)) {
    isValid.value = true;
    message.value = FORMAT_SUCCESS_MESSAGE[props.field];
  } else {
    isValid.value = false;
    message.value = FORMAT_ERROR_MESSAGE[props.field];
  }
};

const handleBtnClick = async () => {
  try {
    //여기 추상화
    const status = await getEmailDuplicate(inputData.value);
    if (status === HTTP_STATUS_CODE.SUCCESS) {
      store.setUser(props.field, inputData.value);
      console.log(store.getUser());
      store.setStep(props.next);
      console.log(store.getStep());
    } else if (status === HTTP_STATUS_CODE.CONFLICT) {
      message.value = DUPLICATE_ERROR_MESSAGE[props.field];
      isValid.value = false;
    }
  } catch (error) {
    if (isAxiosError(error)) {
      console.log("백엔드잘못인듯");
    }
  }
};
</script>

<style></style>
