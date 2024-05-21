<template>
  <div>
    <main>
      <Flex direction="column" gap="12px">
        <Title>{{ post.name }}</Title>
        <Flex direction="column" gap="8px">
          <img class="images" :src="post.images[0]" alt="main사진" />
          <p>
            <span class="num">{{ post.people }} 명</span>
            <span class="text"> 참여중</span>
          </p>
          <p>
            <span class="num">{{ post.money }} 원</span>
            <span class="text"> 달성</span>
          </p>
          <p class="desc">{{ post.desc }}</p>
          <Flex />
          <img
            v-for="image in post.images.slice(1)"
            :key="image"
            :src="image"
            alt="서브 사진들"
            class="images"
          />
        </Flex>
      </Flex>
    </main>
    <DonationBar />
  </div>
</template>

<script setup>
import Title from "@/components/common/title/Title.vue";
import Flex from "@/design/Flex.vue";
import DonationBar from "@/components/mypage/mydonation/DonationBar.vue";

import { useProjectStore } from "@/stores/project";

const store = useProjectStore();
const post = store.getPost();
</script>

<style scoped>
.images {
  width: 360px;
  height: 200px;
}
.num {
  color: var(--sub-color);
  font: var(--xl-mm-font);
}
.text {
  font: var(--sm-pre-font);
  font-weight: 700;
}
.desc {
  font: var(--sm-pre-font);
}
</style>
