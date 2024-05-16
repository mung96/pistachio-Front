<template>
  <Flex direction="column">
    <div>
      <Title>비밀번호</Title>
      <Input :placeholder="PWD_PLACEHOLDER" :message="PWD_MESSAGE" />
    </div>
    <div>
      <Title>비밀번호 확인</Title>
      <Input :placeholder="PWD_CONFIRM_PLACEHOLDER" />
      <Button /></div
  ></Flex>
</template>

<script setup>
import { ref } from "vue";
import Flex from "@/design/Flex.vue";
import Title from "@/components/signup/Title.vue";
import Input from "@/components/common/input/Input.vue";
import Button from "@/components/common/button/Button.vue";
import {
  PWD_PLACEHOLDER,
  PWD_MESSAGE,
  PWD_CONFIRM_PLACEHOLDER,
} from "@/constants/ui";
</script>

<style></style>
