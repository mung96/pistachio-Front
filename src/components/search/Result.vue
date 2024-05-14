<template>
  <Flex class="container" align="center" justify="space-between">
    <Flex gap="8px" align="center">
      <Flex class="profile-img" align="center"
        ><img :src="result.image"
      /></Flex>
      <p class="nickname">{{ result.nickname }}</p>
    </Flex>
    <FollowBtn />
  </Flex>
</template>

<script setup>
import Flex from "@/design/Flex.vue";
import FollowBtn from "../common/button/FollowBtn.vue";

const props = defineProps({
  result: Object,
});
</script>

<style scoped>
.container {
  padding: var(--spacing-3) 0;
  border-bottom: 1px solid var(--gray200-color);
}

.nickname {
  font: var(--base-pre-font);
}

.profile-img img {
  border-radius: 50%;
  width: 40px;
  height: 40px;
}
.nickname {
  font: var(--base-pre-font);
  font-weight: 700;
}
</style>
