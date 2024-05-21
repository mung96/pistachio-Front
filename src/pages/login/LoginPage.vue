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
import { postLogin } from "@/apis/login/postLogin";
import VisibleIcon from "@/assets/svg/visibleIcon.svg";
import InVisibleIcon from "@/assets/svg/inVisibleIcon.svg";

const user = ref({ email: "", password: "" });
const isValid = ref(true);
const isPwdVisible = ref(false);
import { useRouter } from "vue-router";
import { PATH } from "@/constants/router";
import { useUserStore } from "@/stores/user";

const userStore = useUserStore();
const router = useRouter();
const handlePwdIconClick = () => {
  isPwdVisible.value = !isPwdVisible.value;
};

const handleEmailInput = (e) => {
  user.value.email = e.target.value;
};
const handlePwdInput = (e) => {
  user.value.password = e.target.value;
};
const handleLoginBtnClick = async () => {
  try {
    //로그인 api요청
    const response = await postLogin(user.value);
    console.log(response);
    console.log(response.status);
    if (response.status === HTTP_STATUS_CODE.SUCCESS) {
      //이후 피드페이지로 이동
      userStore.setUser(response.data);
      console.log(userStore.getUser());
      userStore.setUserType(response.data.userType);
      router.push(PATH.FEED);
    }
  } catch (error) {
    console.log(error);
    const status = error.response.status;
    if (
      status === HTTP_STATUS_CODE.BAD_REQUEST ||
      status === HTTP_STATUS_CODE.UNAUTHORIZED
    ) {
      isValid.value = false;
    } else {
      console.log("서버이슈");
    }
  }
};
const handleSignupBtnClick = () => {
  router.push(PATH.SIGNUP);
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
