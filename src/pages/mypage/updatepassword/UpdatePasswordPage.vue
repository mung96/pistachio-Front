<template>
  <main>
    <Flex direction="column" gap="40px"
      ><Title>비밀번호 변경</Title>
      <Flex direction="column" gap="20px">
        <Title>기존 비밀번호</Title>
        <Input
          @input="handlePwdInput"
          placeholder="비밀번호를 입력해주세요"
          :type="isPwdVisible ? 'text' : 'password'"
          :icon="isPwdVisible ? VisibleIcon : InVisibleIcon"
          @icon-click="handlePwdIconClick"
        />
        <Title>새 비밀번호</Title>
        <Input
          @input="handleNewPwdInput"
          :message="newPwdMessage"
          placeholder="새 비밀번호를 입력해주세요"
          :type="isNewPwdVisible ? 'text' : 'password'"
          :icon="isNewPwdVisible ? VisibleIcon : InVisibleIcon"
          :color="isPwdConfirmValid ? palette.green : palette.pinkred"
          @icon-click="handleNewPwdIconClick"
        />

        <Title>새 비밀번호 확인</Title>
        <Input
          @input="handleNewPwdConfirmInput"
          :message="newPwdConfirmMessage"
          placeholder="새 비밀번호를 한번 더입력해주세요"
          :type="isNewPwdConfirmVisible ? 'text' : 'password'"
          :color="isPwdConfirmValid ? palette.green : palette.pinkred"
          :icon="isNewPwdConfirmVisible ? VisibleIcon : InVisibleIcon"
          @icon-click="handleNewPwdConfirmIconClick"
        />

        <p v-if="!isValid" class="error-message">
          비밀번호가 올바르지 않습니다.
        </p>
        <rect v-else></rect> </Flex
      ><Button @click="handleUpdateBtnClick">수정하기</Button>
    </Flex>
  </main>
</template>

<script setup>
import Flex from "@/design/Flex.vue";
import Input from "@/components/common/input/Input.vue";
import Button from "@/components/common/button/Button.vue";
import Title from "@/components/common/title/Title.vue";
import { ref } from "vue";

import { HTTP_STATUS_CODE } from "@/constants/api";
import { patchPassword } from "@/apis/mypage/patchPassword";
import VisibleIcon from "@/assets/svg/visibleIcon.svg";
import InVisibleIcon from "@/assets/svg/inVisibleIcon.svg";
import { useRouter } from "vue-router";
import { PATH } from "@/constants/router";
import { checkPwd, checkPwdConfirm } from "@/utils/validator";
import { palette } from "@/constants/color";
import {
  FORMAT_SUCCESS_MESSAGE,
  FORMAT_ERROR_MESSAGE,
  FIELD,
} from "@/constants/ui";

const user = ref({ password: "", newPassword: "", newPasswordConfirm: "" });
const isValid = ref(true);

const password = ref("");
const newPassword = ref("");
const newPasswordConfirm = ref("");

const isPwdValid = ref(false);
const isNewPwdValid = ref(false);
const isNewPwdConfirmValid = ref(false);

const isPwdVisible = ref(false);
const isNewPwdVisible = ref(false);
const isNewPwdConfirmVisible = ref(false);

const newPwdMessage = ref("");
const newPwdConfirmMessage = ref("");

const router = useRouter();

//눈모양 아이콘 클릭
const handlePwdIconClick = () => {
  isPwdVisible.value = !isPwdVisible.value;
};
const handleNewPwdIconClick = () => {
  isNewPwdVisible.value = !isNewPwdVisible.value;
};
const handleNewPwdConfirmIconClick = () => {
  isNewPwdConfirmVisible.value = !isNewPwdConfirmVisible.value;
};

//input값 변경
const handlePwdInput = (e) => {
  value.password.value = e.target.value;
};
const handleNewPwdInput = (e) => {
  newPassword.value = e.target.value;

  if (checkPwd(e.target.value)) {
    isNewPwdValid.value = true;
    newPwdMessage.value = FORMAT_SUCCESS_MESSAGE[FIELD.PWD];
  } else {
    isNewPwdValid.value = false;
    newPwdMessage.value = FORMAT_ERROR_MESSAGE[FIELD.PWD];
  }
};

const handleNewPwdConfirmInput = (e) => {
  newPasswordConfirm.value = e.target.value;

  if (checkPwdConfirm(newPassword.value, e.target.value)) {
    isNewPwdConfirmValid.value = true;
    newPwdConfirmMessage.value = FORMAT_SUCCESS_MESSAGE[FIELD.PWD_CONFIRM];
  } else {
    isNewPwdConfirmValid.value = false;
    newPwdConfirmMessage.value = FORMAT_ERROR_MESSAGE[FIELD.PWD_CONFIRM];
  }
};

const handleUpdateBtnClick = async () => {
  try {
    await patchPassword(user.value);

    if (response.status === HTTP_STATUS_CODE.SUCCESS) {
      router.push(PATH.MY_PAGE);
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
</script>

<style scoped>
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
