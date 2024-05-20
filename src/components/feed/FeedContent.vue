<template>
  <Flex direction="column" padding-left="16px" padding-right="16px" gap="4px">
    <Flex align="center" gap="8px">
      <div @click="handleClickHeart">
        <HeartIcon :fill="isLike ? '#50d6b0' : 'none'" />
      </div>
      <div>
        <MoneyIcon />
      </div>
    </Flex>
    <p class="like-cnt">
      {{ isLike ? content.likeCnt-- : content.likeCnt++ }} LIKES
    </p>
    <!-- <p class="title">{{ feed.content }}</p> -->
    <Flex align="center" gap="8px">
      <p class="body">{{ feed.content }}</p>
      <p class="more">...더보기</p>
    </Flex>
    <p class="see-comment">댓글 모두 보기</p>
  </Flex>
</template>

<script setup>
import Flex from "@/design/Flex.vue";
import MoneyIcon from "@/assets/svg/moneyIcon.svg";
import HeartIcon from "@/assets/svg/heartIcon.svg";
import { ref } from "vue";

const props = defineProps({
  feed: Object,
});

const { feed, content } = props.feed;

const isLike = ref(true);

const handleClickHeart = () => {
  isLike.value = !isLike.value;
  console.log(1);
};
</script>

<style scoped>
.like-cnt {
  font: var(--base-mm-font);
  color: var(--sub-color);
}
.title {
  font: var(--sm-pre-font);
  font-weight: 700;
}
.body {
  font: var(--sm-pre-font);
  font-weight: 700;
}

.see-comment,
.more {
  font: var(--xs-pre-font);
  color: var(--gray600-color);
}
</style>
