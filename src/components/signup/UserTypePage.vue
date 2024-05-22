<template>
  <Flex direction="column" gap="32px">
    <Title> 권한 </Title>
    <Flex direction="column" gap="40px">
      <Flex direction="column" gap="20px">
        <UserTypeInput :value="USER_TYPE.USER" text="일반" />
        <UserTypeInput :value="USER_TYPE.PISTACHIO" text="피스타치오" />
        <UserTypeInput :value="USER_TYPE.AGENCY" text="기관" />
      </Flex>
      <Button @click="handleBtnClick" :v-else-if="!isValid"
        >권한 선택하기</Button
      >
    </Flex></Flex
  >
</template>

<script setup>
import Logo from "@/assets/svg/logo.svg";
import Button from "@/components/common/button/Button.vue";
import UserTypeInput from "@/components/signup/UserTypeInput.vue";
import { USER_TYPE } from "@/constants/user";
import { useSignupStore } from "@/stores/signup";
import Flex from "@/design/Flex.vue";
import Title from "../common/title/Title.vue";
import { FIELD } from "@/constants/ui";
import { ref } from "vue";

const isValid = ref(true);
const signupStore = useSignupStore();

const handleBtnClick = (e) => {
  signupStore.setStep(FIELD.EMAIL);
};
</script>

<style scoped>
.container {
  width: 100%;
  border: 1px solid red;
}
</style>
