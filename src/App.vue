<script setup>
import { RouterView } from "vue-router";
import Navbar from "@/components/common/navbar/Navbar.vue";
import Topbar from "./components/common/topbar/Topbar.vue";
</script>

<template>
  <div>
    <!-- <Topbar /> -->
    <div class="layout">
      <RouterView />
    </div>
    <Navbar />
  </div>
</template>

<style scoped>
.layout {
  margin-top: 56px;
  padding-top: var(--spacing-4);
  padding-bottom: 56px;
}
</style>
