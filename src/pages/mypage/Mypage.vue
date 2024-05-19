<template>
  <main>
    <Flex direction="column" gap="12px">
      <Title>닉네임</Title>
      <Profile />
      <Category />
    </Flex>
  </main>
</template>

<script setup>
import Profile from "@/components/mypage/Profile.vue";
import Category from "@/components/mypage/Category.vue";
import Flex from "@/design/Flex.vue";
import Title from "@/components/common/title/Title.vue";
</script>

<style scoped>
h2 {
  font: var(--xl-pre-font);
  font-weight: 700;
}
</style>
