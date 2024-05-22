<template>
  <section>
    <Flex
      padding-left="16px"
      padding-right="16px"
      justify="space-between"
      direction="column"
    >
      <Flex align="center" gap="8px">
        <div class="profile-img"><img src="" alt="프사" /></div>
        <Flex direction="column">
          <p class="nickname">{{ comment.content }}</p>
        </Flex>
      </Flex>

      <Flex gap="8px" align="center">
        <p class="comment">{{ "댓글내용내용" }}</p>
      </Flex>
    </Flex>
  </section>
</template>

<script setup>
import Flex from "@/design/Flex.vue";
import { onMounted, ref } from "vue";

const props = defineProps({
  comment: Object,
});

onMounted(async () => {});
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
.comment {
  font: var(--sm-pre-font);
}
</style>
