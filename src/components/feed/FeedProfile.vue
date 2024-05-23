<template>
  <Flex
    padding-left="16px"
    padding-right="32px"
    justify="space-between"
    align="center"
  >
    <Flex align="center" gap="8px">
      <div class="profile-img" onClick="handleProfileClick">
        <BasicProfileIcon width="24px" v-if="!feedWriter.userProfile" />
        <img
          v-if="feedWriter.userProfile"
          :src="imageURLParser(feedWriter.userProfile)"
          alt="유저사진"
        />
      </div>
      <p
        class="nickname"
        v-if="feedWriter.userId !== userStore.getUser().userId"
      >
        {{ feedWriter.name }}
      </p>
      <p
        class="my-name"
        v-if="feedWriter.userId === userStore.getUser().userId"
      >
        {{ "나 (me)" }}
      </p>
    </Flex>

    <Flex gap="8px" align="center">
      <p class="project" v-if="props.feed.feed.projectId !== 1">
        {{ projectName }}
      </p>
      <p
        class="organization"
        v-if="feedWriter.userType === USER_TYPE.PISTACHIO"
      >
        {{ feedWriter.membershipName }}
      </p>
      <FollowBtn
        v-if="feedWriter.userId !== userStore.getUser().userId && !isFollow"
        :userId="feedWriter.userId"
      />
    </Flex>
  </Flex>
</template>

<script setup>
import Flex from "@/design/Flex.vue";
import FollowBtn from "../common/button/FollowBtn.vue";
import { USER_TYPE } from "@/constants/user";
import { useUserStore } from "@/stores/user";
import { imageURLParser } from "@/utils/imageURLParser";
import BasicProfileIcon from "@/assets/svg/basicProfileIcon.svg";
import { useFeedStore } from "@/stores/feed";
import { onMounted } from "vue";
import { getProjectDetail } from "@/apis/project/getProjectDetail";
import { ref } from "vue";
const userStore = useUserStore();
const props = defineProps({
  feedWriter: Object,
  isFollow: Boolean,
  feed: Object,
});
const projectName = ref();
console.log(props.feed.feed.projectId);
onMounted(async () => {
  try {
    const response = await getProjectDetail(props.feed.feed.projectId);
    projectName.value = response.data.name;
    console.log(response.data.name);
  } catch (error) {
    console.log(error);
  }
});
</script>

<style scoped>
.my-name {
  font: var(--base-mm-font);
  color: var(--sub-color);
}
.profile-img {
  border-radius: 50%;
  width: 24px;
  height: 24px;
}
img {
  border-radius: 50%;
  width: 24px;
  height: 24px;
}

.nickname {
  font: var(--xs-pre-font);
  font-weight: 700;
}
.location {
  font: var(--xxs-pre-font);
  color: var(--gray600-color);
}
.project {
  font: var(--lg-mm-font);
  color: var(--gray700-color);
}
.organization {
  font: var(--lg-mm-font);
  font-weight: 700;
}
</style>
