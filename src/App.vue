<script setup>
import { RouterView } from "vue-router";
import Navbar from "@/components/common/navbar/Navbar.vue";
import DonationBar from "./components/mypage/myproject/DonationBar.vue";

import { useRouter } from "vue-router";
const router = useRouter();
console.log(router.name);
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
