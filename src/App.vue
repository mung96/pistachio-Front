<script setup>
import { RouterView } from "vue-router";
import Navbar from "@/components/common/navbar/Navbar.vue";
import Topbar from "./components/common/topbar/Topbar.vue";
</script>

<template>
  <div>
    <Topbar />
    <div class="layout">
      <RouterView />
    </div>
    <Navbar />
    <p>앱</p>
    <p>앱</p>
  </div>
</template>

<style scoped>
p {
  height: 500px;
}
.layout {
  margin-top: 56px;
  padding-top: --var(--spacing-4);
}
</style>
