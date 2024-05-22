<template>
  <button :class="isFollow ? 'follow' : 'unfollow'">
    {{ isFollow ? FOOLLW_TRUE_BTN_TEXT : FOLLOW_FALSE_BTN_TEXT }}
  </button>
</template>

<script setup>
import { FOOLLW_TRUE_BTN_TEXT, FOLLOW_FALSE_BTN_TEXT } from "@/constants/ui";
defineProps({
  isFollow: Boolean,
});
</script>

<style scoped>
button {
  border: none;
  outline: none;
  background-color: white;

  font: var(--sm-mm-font);
}
.follow {
  color: var(--gray600-color);
}
.unfollow {
  color: var(--sub-color);
}
</style>
