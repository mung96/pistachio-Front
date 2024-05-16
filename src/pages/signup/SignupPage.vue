<template>
  <main>
    <Email />
    <EmailAuth />
    <Nickname />
    <Password />
  </main>
</template>

<script setup>
import { ref } from "vue";
import Email from "@/components/signup/Email.vue";
import EmailAuth from "@/components/signup/EmailAuth.vue";
import Nickname from "@/components/signup/Nickname.vue";
import Password from "@/components/signup/Password.vue";

const step = ref("");
</script>

<style>
main {
  padding: 0 12px;
}
</style>
