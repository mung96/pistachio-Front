<template>
  <div>
    <main>
      <Flex direction="column" gap="12px">
        <Title>{{ project.name }}</Title>
        <Flex direction="column" gap="8px">
          <img class="images" :src="project.images[0]" alt="main사진" />
          <p>
            <span class="num">{{ project.people }} 명</span>
            <span class="text"> 참여중</span>
          </p>
          <p>
            <span class="num">{{ project.money }} 원</span>
            <span class="text"> 달성</span>
          </p>
          <p class="desc">{{ project.desc }}</p>
          <Flex />
          <img
            v-for="image in project.images.slice(1)"
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

import { useMypageStore } from "@/stores/mypage";

const store = useMypageStore();
const project = store.getProject();
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
