<template>
  <main>
    <Flex direction="column" align="center" gap="60px">
      <Logo width="200" />
      <Flex direction="column" gap="12px" align="center">
        <Input
          @input="handleEmailInput"
          placeholder="이메일을 입력해주세요."
          type="email"
        />
        <Input
          @input="handlePwdInput"
          placeholder="비밀번호를 입력해주세요"
          :type="isPwdVisible ? 'text' : 'password'"
          :icon="isPwdVisible ? VisibleIcon : InVisibleIcon"
          @icon-click="handlePwdIconClick"
        />
        <Button @click="handleLoginBtnClick">로그인 하기</Button>
        <p v-if="!isValid" class="error-message">
          이메일 혹은 비밀번호가 올바르지 않습니다.
        </p>
        <rect v-else></rect>
        <p class="find-password">비밀번호를 잊으셨나요?</p>
        <Button class="signup-btn" @click="handleSignupBtnClick"
          >회원가입하기</Button
        >
      </Flex>
    </Flex>
  </main>
</template>

<script setup>
import Flex from "@/design/Flex.vue";
import Logo from "@/assets/svg/logo.svg";
import Input from "@/components/common/input/Input.vue";
import Button from "@/components/common/button/Button.vue";

import { ref } from "vue";

import { HTTP_STATUS_CODE } from "@/constants/api";
import VisibleIcon from "@/assets/svg/visibleIcon.svg";
import InVisibleIcon from "@/assets/svg/inVisibleIcon.svg";

const user = ref({ email: "", password: "" });
const isValid = ref(true);
const isPwdVisible = ref(false);

const handlePwdIconClick = () => {
  isPwdVisible.value = !isPwdVisible.value;
};

const handleEmailInput = (e) => {
  user.value.email = e.target.value;
};
const handlePwdInput = (e) => {
  user.value.password = e.target.value;
};
const handleLoginBtnClick = () => {
  //로그인 api요청
  //성공하면 세션 저장
  //이후 피드페이지로 이동
};
const handleSignupBtnClick = () => {};
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

<style scoped>
main {
  padding-top: 80px;
}
div {
  width: 100%;
}
rect {
  height: 14px;
}
.signup-btn {
  background-color: var(--main-color);
  margin-top: 130px;
}
.error-message {
  color: var(--pinkred-color);
  font: var(--xs-pre-font);
}
.find-password {
  color: var(--gray600-color);
  font: var(--xs-pre-font);
}
</style>
