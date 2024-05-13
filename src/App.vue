<script setup>
import { RouterView } from "vue-router";
import Navbar from "@/components/common/navbar/Navbar.vue";
import Topbar from "./components/common/topbar/Topbar.vue";
</script>

<template>
  <div>
    <Topbar />
    <Navbar />
    <p>앱</p>
    <p>앱</p>
  </div>
  <RouterView />
</template>

<style scoped>
p {
  height: 500px;
}
</style>
