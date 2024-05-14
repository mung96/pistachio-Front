<template>
  <main>
    <Flex direction="column" gap="16px">
      <Feed v-for="feed in response" :feed="feed" :key="feed" />
    </Flex>
  </main>
</template>

<script setup>
import Feed from "@/components/feed/Feed.vue";
import Flex from "@/design/Flex.vue";
import { faker } from "@faker-js/faker/locale/ko";
import { ref, onMounted } from "vue";

const response = Array.from({ length: 10 }, () => ({
  id: faker.string.uuid(),
  profile: {
    image: faker.image.url(),
    nickname: faker.lorem.word({ min: 2, max: 12 }),
    location: faker.lorem.word(),
    project: faker.lorem.word({ min: 2, max: 20 }),
    organization: faker.lorem.word({ min: 10, max: 12 }),
    isFollow: faker.datatype.boolean(),
  },
  content: {
    images: Array.from({ length: 10 }, () => faker.image.url()),
    likeCnt: faker.number.int({ min: 0, max: 1000000 }),
    title: faker.lorem.word({ min: 10, max: 30 }),
    body: faker.lorem.sentence(),
  },
}));

const feeds = ref([]);
feeds.value = response;
onMounted(() => {
  //API 요청
});
</script>

<style></style>
