<template>
  <main>
    <Flex direction="column" gap="16px">
      <Feed />
      <Feed />
      <Feed />
    </Flex>
  </main>
</template>

<script setup>
import Feed from "@/components/feed/Feed.vue";
import Flex from "@/design/Flex.vue";
</script>

<style></style>
