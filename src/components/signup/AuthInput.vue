<template>
  <Flex direction="column" gap="16px">
    <Title>{{ title }}</Title>
    <Input
      @input="handleInput"
      v-model="inputData"
      :placeholder="PLACEHOLDER[field]"
      :message="message"
      :type="type"
      :color="
        !inputData ? palette.gray600 : isValid ? palette.green : palette.pinkred
      "
      :icon="
        field === FIELD.PWD && (isPwdVisible ? VisibleIcon : InVisibleIcon)
      "
      @icon-click="handlePwdIconClick"
    />

    <Title v-if="field === FIELD.PWD">비밀번호 확인</Title>
    <Input
      v-if="field === FIELD.PWD"
      @input="handlePwdConfirm"
      v-model="pwdConfirm"
      :placeholder="PLACEHOLDER[FIELD.PWD_CONFIRM]"
      :message="pwdConfirmMessage"
      :type="isPwdConfirmVisible ? 'text' : 'password'"
      :color="isPwdConfirmValid ? palette.green : palette.pinkred"
      :icon="isPwdConfirmVisible ? VisibleIcon : InVisibleIcon"
      @icon-click="handlePwdConfirmIconClick"
    />

    <Button
      :disabled="
        field === FIELD.PWD ? !(isValid && isPwdConfirmValid) : !isValid
      "
      @click="handleBtnClick"
      >{{ btnText }}</Button
    >
  </Flex>
</template>

<script setup>
import { ref } from "vue";
import Title from "@/components/signup/Title.vue";
import Input from "@/components/common/input/Input.vue";
import Button from "@/components/common/button/Button.vue";
import { palette } from "@/constants/color";
import {
  TYPE,
  PLACEHOLDER,
  MESSAGE,
  DUPLICATE_ERROR_MESSAGE,
  FORMAT_ERROR_MESSAGE,
  FORMAT_SUCCESS_MESSAGE,
  FIELD,
} from "@/constants/ui";
import { HTTP_STATUS_CODE } from "@/constants/api";
import { useSignupStore } from "@/stores/signup";
import { checkPwdConfirm } from "@/utils/validator";
import VisibleIcon from "@/assets/svg/visibleIcon.svg";
import InVisibleIcon from "@/assets/svg/inVisibleIcon.svg";
import Flex from "@/design/Flex.vue";

const props = defineProps({
  title: String,
  btnText: String,
  next: String,
  field: String,
});
const emit = defineEmits(["modalOpen"]);
const inputData = ref();
const message = ref(MESSAGE[props.field]);
const isValid = ref(false);
const type = ref(TYPE[props.field]);

const pwdConfirm = ref();
const pwdConfirmMessage = ref(MESSAGE[FIELD.PWD_CONFIRM]);
const isPwdConfirmValid = ref(false);

const isPwdVisible = ref(false);
const isPwdConfirmVisible = ref(false);

const store = useSignupStore();

const handlePwdIconClick = () => {
  isPwdVisible.value = !isPwdVisible.value;
  type.value = isPwdVisible.value ? "text" : "password";
};

const handlePwdConfirmIconClick = () => {
  isPwdConfirmVisible.value = !isPwdConfirmVisible.value;
};

const handleInput = (e) => {
  inputData.value = e.target.value;
  if (!inputData.value) {
    message.value = MESSAGE[props.field];
  } else if (store.checkFormat(props.field, inputData.value)) {
    isValid.value = true;
    message.value = FORMAT_SUCCESS_MESSAGE[props.field];
  } else {
    isValid.value = false;
    message.value = FORMAT_ERROR_MESSAGE[props.field];
  }
};

const handlePwdConfirm = (e) => {
  pwdConfirm.value = e.target.value;
  if (checkPwdConfirm(inputData.value, pwdConfirm.value)) {
    isPwdConfirmValid.value = true;
    pwdConfirmMessage.value = FORMAT_SUCCESS_MESSAGE[FIELD.PWD_CONFIRM];
  } else {
    isPwdConfirmValid.value = false;
    pwdConfirmMessage.value = FORMAT_ERROR_MESSAGE[FIELD.PWD_CONFIRM];
  }
};

const handleBtnClick = async () => {
  try {
    store.setUser(props.field, inputData.value);
    const status = await store.checkValidate(props.field, inputData.value);
    //기타 로직 성공
    if (status === HTTP_STATUS_CODE.SUCCESS) {
      store.setUser(props.field, inputData.value);
      store.setStep(props.next);
      return;
    }
    //회원가입성공
    if (status === HTTP_STATUS_CODE.CREATED) {
      // TODO: 모달을 띄우고 로그인하러가기 누르면 로그인 페이지로 이동
      emit("modalOpen");
      return;
    }
  } catch (error) {
    console.log(error);
    const status = error.response.status;
    if (status === HTTP_STATUS_CODE.CONFLICT) {
      message.value = DUPLICATE_ERROR_MESSAGE[props.field];
      isValid.value = false;
    } else {
      console.log("서버이슈");
    }
  }
};
</script>

<style></style>
