<template>
  <main>
    <Email />
  </main>
</template>

<script setup>
import { ref } from "vue";
import Email from "@/components/signup/Email.vue";

const step = ref("");
</script>

<style>
main {
  padding: 0 12px;
}
</style>
