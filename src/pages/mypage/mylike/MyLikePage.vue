<template>
  <main>
    <Flex direction="column" gap="12px">
      <Title>좋아요 누른 글</Title>
      <div class="grid-container">
        <PostItem v-for="i in 100" :key="i" />
      </div>
    </Flex>
  </main>
</template>

<script setup>
import Title from "@/components/common/title/Title.vue";
import PostItem from "@/components/mypage/common/PostItem.vue";
import Flex from "@/design/Flex.vue";
</script>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, fit-content(400px));
  gap: 12px;
}
</style>
