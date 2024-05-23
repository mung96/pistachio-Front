<template>
  <Dim />
  <Flex direction="column" class="modal" align="center" gap="16px">
    <h3>회원 가입 성공!</h3>
    <Flex direction="column" align="center" gap="4px">
      <p>가입을 축하합니다!</p>
      <p>기부로 세상을 따듯하게 만들어주세요.</p>
    </Flex>
    <Button @click="handleBtnClick">자동로그인 히기</Button>
  </Flex>
</template>

<script setup>
import Dim from "@/modals/Dim.vue";
import Flex from "@/design/Flex.vue";
import Button from "@/components/common/button/Button.vue";
import { useRouter } from "vue-router";
import { PATH } from "@/constants/router";
import { postLogin } from "@/apis/login/postLogin";
import { postMembership } from "@/apis/donate/postMembership";
import { useSignupStore } from "@/stores/signup";
import { useUserStore } from "@/stores/user";
import { HTTP_STATUS_CODE } from "@/constants/api";
const signupStore = useSignupStore();
const userStore = useUserStore();
const router = useRouter();
const handleBtnClick = async () => {
  try {
    const response = await postLogin({
      email: signupStore.getUser().email,
      password: signupStore.getUser().password,
    });
    if (response.status === HTTP_STATUS_CODE.SUCCESS) {
      //이후 피드페이지로 이동
      userStore.setUser(response.data);
      console.log(userStore.getUser());
      userStore.setUserType(response.data.userType);

      try {
        const response = await postMembership(userStore.getUser().name);
        console.log(response);
      } catch (error) {
        console.log(error);
      }

      router.push(PATH.FEED);
    }
  } catch (error) {
    console.log(error);
  }
  // router.push(PATH.LOGIN);
};
</script>

<style scoped>
.modal {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  padding: 24px;
  border-radius: 16px;
  background-color: var(--gray100-color);
  min-width: 300px;
  width: fit-content;
  z-index: 600;
}

h3 {
  font: var(--xl-pre-font);
  font-weight: 700;
}

p {
  font: var(--sm-pre-font);
}
</style>
