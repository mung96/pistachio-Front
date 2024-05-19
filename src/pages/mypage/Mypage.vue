<template>
  <main>
    <Flex direction="column" gap="12px">
      <h2>닉네임</h2>
      <Profile />
      <Category />
    </Flex>
  </main>
</template>

<script setup>
import Profile from "@/components/mypage/Profile.vue";
import Category from "@/components/mypage/Category.vue";
import Flex from "@/design/Flex.vue";
</script>

<style scoped>
h2 {
  font: var(--xl-pre-font);
  font-weight: 700;
}
</style>
