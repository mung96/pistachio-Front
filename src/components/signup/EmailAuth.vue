<template>
  <div>
    <Title>이메일 인증</Title>
    <Input
      :placeholder="EMAIL_AUTH_PLACEHOLDER"
      :message="EMAIL_AUTH_MESSAGE"
    />
    <Button />
  </div>
</template>

<script setup>
import { ref } from "vue";
import Title from "@/components/signup/Title.vue";
import Input from "@/components/common/input/Input.vue";
import Button from "@/components/common/button/Button.vue";
import { EMAIL_AUTH_PLACEHOLDER, EMAIL_AUTH_MESSAGE } from "@/constants/ui";
</script>

<style></style>
