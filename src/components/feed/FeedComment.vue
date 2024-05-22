<template>
  <section>
    <Flex
      padding-left="16px"
      padding-right="16px"
      justify="space-between"
      direction="column"
    >
      <Flex align="center" gap="8px">
        <div class="profile-img">
          <BasicProfileIcon width="24px" v-if="!comment.userProfile" />
          <img
            v-if="comment.userProfile"
            :src="imageURLParser(comment.userProfile)"
            alt="유저사진"
          />
        </div>
        <p class="name" v-if="comment.userId !== userStore.getUser().userId">
          {{ comment.username }}
        </p>
        <p class="name" v-if="comment.userId === userStore.getUser().userId">
          {{ "나 (me)" }}
        </p>
      </Flex>

      <Flex gap="8px" align="center">
        <p class="comment">{{ comment.content }}</p>
      </Flex>
    </Flex>
  </section>
</template>

<script setup>
import Flex from "@/design/Flex.vue";
import { imageURLParser } from "@/utils/imageURLParser";
import { useUserStore } from "@/stores/user";
import BasicProfileIcon from "@/assets/svg/basicProfileIcon.svg";

const userStore = useUserStore();
const props = defineProps({
  comment: Object,
});
console.log(userStore.getUser().userId);
</script>

<style scoped>
.profile-img img {
  border-radius: 50%;
  width: 24px;
  height: 24px;
}
.name {
  font: var(--xs-pre-font);
  font-weight: 700;
}
.comment {
  font: var(--sm-pre-font);
}
</style>
