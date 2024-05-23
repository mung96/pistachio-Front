<template>
  <Flex direction="column" padding-left="16px" padding-right="16px" gap="4px">
    <Flex align="center" gap="8px">
      <div @click="handleClickHeart">
        <HeartIcon :fill="isLike ? '#50d6b0' : 'none'" />
      </div>
      <div @click="handleMoneyClick">
        <MoneyIcon />
      </div>
    </Flex>
    <p class="like-cnt">{{ like }} LIKES</p>
    <Flex align="center" gap="8px" @click="handleSeeMoreClick">
      <p v-if="!isSeeMore" class="body">{{ feed.feed.content.slice(0, 20) }}</p>
      <p v-if="!isSeeMore" class="more">...더보기</p>
      <p v-if="isSeeMore" class="full-body">{{ feed.feed.content }}</p>
    </Flex>
    <p
      v-if="type !== 'detail'"
      @click="handleSeeCommentClick"
      class="see-comment"
    >
      댓글 모두 보기
    </p>
  </Flex>
</template>

<script setup>
import Flex from "@/design/Flex.vue";
import MoneyIcon from "@/assets/svg/moneyIcon.svg";
import HeartIcon from "@/assets/svg/heartIcon.svg";
import { onMounted, ref } from "vue";
import { PATH } from "@/constants/router";
import { useFeedStore } from "@/stores/feed";
import { useRouter } from "vue-router";
import { likeLocalStorage } from "@/utils/likeLocalStorage";

const props = defineProps({
  feed: Object,
  type: String,
});
const router = useRouter();

const store = useFeedStore();

const isLike = ref(props.feed.userLike); //응답에서 isLike 긁어오기
const like = ref(props.feed.feed.likeCnt);
const isSeeMore = ref(false);
const emit = defineEmits(["donationModalOpen"]);

const handleMoneyClick = () => {
  console.log(1);
  emit("donationModalOpen");
};

const handleSeeCommentClick = () => {
  store.setFeed(props.feed);
  router.push(PATH.FEED_DETAIL(props.feed.feed.id));
};

//unmounted되는 순간 좋아요상태랑 좋아요수 댓글을 보낸다.
const handleSeeMoreClick = () => {
  isSeeMore.value = !isSeeMore.value;
};

const handleClickHeart = () => {
  if (isLike.value) {
    like.value--;
    //false판정.
    likeLocalStorage(props.feed.feed.id, false);
  } else {
    like.value++;
    likeLocalStorage(props.feed.feed.id, true);
  }
  isLike.value = !isLike.value;
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
