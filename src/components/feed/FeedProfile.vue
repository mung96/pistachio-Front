<template>
  <Flex
    padding-left="16px"
    padding-right="16px"
    justify="space-between"
    align="center"
  >
    <Flex align="center" gap="8px">
      <div class="profile-img" onClick="handleProfileClick">
        <BasicProfileIcon v-if="!feedWriter.userProfile" />
        <img
          v-if="feedWriter.userProfile"
          :src="imageURLParser(feedWriter.userProfile)"
          alt="유저사진"
        />
      </div>
    </Flex>

    <Flex gap="8px" align="center">
      <p class="project" v-if="feedWriter.userType !== USER_TYPE.USER">
        {{ feedWriter.project }}
      </p>
      <p
        class="organization"
        v-if="feedWriter.userType === USER_TYPE.PISTACHIO"
      >
        {{ feedWriter.membershipName }}
      </p>
      <FollowBtn />
    </Flex>
  </Flex>
</template>

<script setup>
import Flex from "@/design/Flex.vue";
import FollowBtn from "../common/button/FollowBtn.vue";
import { USER_TYPE } from "@/constants/user";
import { imageURLParser } from "@/utils/imageURLParser";
const props = defineProps({
  feedWriter: Object,
});
console.log(props.feedWriter);
</script>

<style scoped>
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
  color: var(--sub-color);
}
.organization {
  font: var(--lg-mm-font);
  font-weight: 700;
}
</style>
