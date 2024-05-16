<template>
  <div>
    <Title>닉네임</Title>
    <Input :placeholder="NICKNAME_PLACEHOLDER" :message="NICKNAME_MESSAGE" />
    <Button />
  </div>
</template>

<script setup>
import { ref } from "vue";
import Title from "@/components/signup/Title.vue";
import Input from "@/components/common/input/Input.vue";
import Button from "@/components/common/button/Button.vue";
import { NICKNAME_PLACEHOLDER, NICKNAME_MESSAGE } from "@/constants/ui";
</script>

<style></style>
