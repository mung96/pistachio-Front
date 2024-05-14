<template>
  <Flex
    padding-left="16px"
    padding-right="16px"
    justify="space-between"
    align="center"
  >
    <Flex align="center" gap="8px">
      <div class="profile-img"><img :src="props.profile.image" /></div>
      <Flex direction="column">
        <p class="nickname">{{ profile.nickname }}</p>
        <p class="location">{{ profile.location }}</p>
      </Flex>
    </Flex>

    <Flex gap="8px" align="center">
      <p class="project">{{ profile.project }}</p>
      <p class="organization">{{ profile.organization }}</p>
      <FollowBtn />
    </Flex>
  </Flex>
</template>

<script setup>
import Flex from "@/design/Flex.vue";
import FollowBtn from "../common/button/FollowBtn.vue";
const props = defineProps({
  profile: Object,
});
</script>

<style scoped>
.profile-img img {
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
