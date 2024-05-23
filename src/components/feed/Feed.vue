<template>
  <section>
    <DonationModal v-if="isModalOpen" @donationModalOpen="handleModalOpen" />
    <Flex gap="8px" direction="column">
      <FeedProfile
        :feedWriter="props.feed.userResponse"
        :isFollow="props.feed.userFollow"
      />
      <FeedPictures :pictures="props.feed.feedPictures" />
      <FeedContent
        @donationModalOpen="handleModalOpen"
        :feed="props.feed"
        :type="type"
      />
    </Flex>
  </section>
</template>

<script setup>
import FeedProfile from "./FeedProfile.vue";
import FeedContent from "./FeedContent.vue";
import FeedPictures from "./FeedPictures.vue";
import { postLikeUpdate } from "@/apis/feed/postLikeUpdate";
import Flex from "@/design/Flex.vue";
import { onMounted, onUnmounted, ref } from "vue";

import DonationModal from "@/modals/DonationModal.vue";

const isModalOpen = ref(false);

const handleModalOpen = () => {
  console.log(111);
  isModalOpen.value = !isModalOpen.value;
};
const user = ref({});
const props = defineProps({
  feed: Object,
  type: String,
});
</script>

<style scoped></style>
