<template>
  <div>
    <TopbarMy />
    <main>
      <Flex direction="column" gap="12px">
        <Title>{{ post.projectName }}</Title>
        <Flex direction="column" gap="8px">
          <img
            class="images"
            :src="imageURLParser(post.images[0].url)"
            alt="main사진"
          />
          <p>
            <span class="num">{{ participants }} 명</span>
            <span class="text"> 참여중</span>
          </p>
          <p>
            <span class="num">{{ money }} 원</span>
            <span class="text"> 달성</span>
          </p>
          <p class="desc">{{ post.projectDescription }}</p>
          <Flex />
          <img
            v-for="image in post.images.slice(1)"
            :key="image"
            :src="imageURLParser(image.url)"
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
import DonationBar from "@/components/mypage/myproject/DonationBar.vue";

import { useProjectStore } from "@/stores/project";
import { imageURLParser } from "@/utils/imageURLParser";
import { onMounted } from "vue";
import { getProjectDetail } from "@/apis/project/getProjectDetail";
import { ref } from "vue";
import TopbarMy from "@/components/common/topbar/TopbarMy.vue";
const store = useProjectStore();
const post = store.project;
const money = ref(0);
const participants = ref(0);
onMounted(async () => {
  try {
    const response = await getProjectDetail(post.projectId);
    console.log(response.data);
    money.value = response.data.currentDonationAmount;
    participants.value = response.data.participants;
  } catch (error) {
    console.log(error);
  }

  //projectId요청
});

console.log(post);
// projectName: props.project.projectName, projectDescription:
//         props.project.projectDescription, boast: props.project.boast, images:
//         feed.feedPictures,
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
