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
      <!-- {{ isLike ? feed.feed.likeCnt : feed.feed.likeCnt }} LIKES -->
      {{ like }} LIKES
    </p>
    <!-- <p class="title">{{ feed.content }}</p> -->
    <Flex align="center" gap="8px" @click="handleSeeMoreClick">
      <p v-if="!isSeeMore" class="body">{{ feed.feed.content.slice(0, 20) }}</p>
      <p v-if="!isSeeMore" class="more">...더보기</p>
      <p v-if="isSeeMore" class="full-body">{{ feed.feed.content }}</p>
    </Flex>
    <RouterLink :to="PATH.FEED_DETAIL(feed.feed.id)">
      <p class="see-comment">댓글 모두 보기</p></RouterLink
    >
  </Flex>
</template>

<script setup>
import Flex from "@/design/Flex.vue";
import MoneyIcon from "@/assets/svg/moneyIcon.svg";
import HeartIcon from "@/assets/svg/heartIcon.svg";
import { ref } from "vue";
import { RouterLink } from "vue-router";
import { PATH } from "@/constants/router";

const props = defineProps({
  feed: Object,
});

const isLike = ref(false); //응답에서 isLike 긁어오기
const like = ref(props.feed.feed.likeCnt);
const isSeeMore = ref(false);

//unmounted되는 순간 좋아요상태랑 좋아요수 댓글을 보낸다.
const handleSeeMoreClick = () => {
  isSeeMore.value = !isSeeMore.value;
};
const handleClickHeart = () => {
  if (isLike.value) {
    like.value--;
  } else {
    like.value++;
  }
  isLike.value = !isLike.value;
  console.log(1);
};
</script>

<style scoped>
.like-cnt {
  font: var(--base-mm-font);
  color: var(--sub-color);
}
/* .title {
  font: var(--sm-pre-font);
  font-weight: 700;
} */
.body {
  font: var(--sm-pre-font);
  font-weight: 700;
}
.full-body {
  font: var(--sm-pre-font);
}
.see-comment,
.more {
  font: var(--xs-pre-font);
  color: var(--gray600-color);
}
</style>
