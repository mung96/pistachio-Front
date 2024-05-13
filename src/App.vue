<script setup>
import { RouterView } from "vue-router";
import Navbar from "@/components/common/navbar/Navbar.vue";
</script>

<template>
  <div>
    <Navbar />
    <p>앱</p>
  </div>
  <RouterView />
</template>

<style scoped></style>
