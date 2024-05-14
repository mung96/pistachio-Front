<template>
  <Flex class="container">
    <div class="profile-img">asdasd</div>
    <p class="nickname">닉네임</p>
    <FollowBtn />
  </Flex>
</template>

<script setup>
import Flex from "@/design/Flex.vue";
import FollowBtn from "../common/button/FollowBtn.vue";
</script>

<style scoped>
.container {
  border-bottom: 1px solid var(--gray200-color);
}
.profile-img img {
  border-radius: 50%;
  width: 24px;
  height: 24px;
}
.nickname {
  font: var(--base-pre-font);
  font-weight: 700;
}
</style>
