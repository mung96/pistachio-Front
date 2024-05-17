<template>
  <main>
    <!-- <SignupCompleteModal /> -->
    <Flex direction="column" gap="16px">
      <Feed v-for="feed in response" :feed="feed" :key="feed" />
    </Flex>
  </main>
</template>

<script setup>
import Feed from "@/components/feed/Feed.vue";
import Flex from "@/design/Flex.vue";
import { ref, onMounted } from "vue";
import { response } from "@/dummy/feed";
import SignupCompleteModal from "@/modals/SignupCompleteModal.vue";

const feeds = ref([]);
feeds.value = response;
onMounted(() => {
  //API 요청
});
</script>

<style></style>
