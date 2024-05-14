<template>
  <Flex direction="column">
    <Flex position="relative">
      <input :placeholder="placeholder" />
      <component v-if="icon" :is="icon" width="16" class="input-icon" />
    </Flex>
    <p v-show="message" class="message">{{ message }}</p>
  </Flex>
</template>

<script setup>
import Flex from "@/design/Flex.vue";

const props = defineProps({
  icon: Object,
  placeholder: String,
  message: String,
});
</script>

<style scoped>
input {
  width: 100%;
  height: 44px;
  background-color: var(--gray100-color);
  color: black;

  border: none;
  outline: none;

  padding-left: var(--spacing-4);
  padding-right: 40px;
  padding-top: var(--spacing-3);
  padding-bottom: var(--spacing-3);

  border-radius: var(--spacing-2);
}

input::placeholder {
  color: var(--gray700-color);
}

.message {
  font: var(--xs-pre-font);
  color: var(--gray600-color);
}

.input-icon {
  position: absolute;
  top: 50%;
  right: 16px;
  transform: translateY(-50%);
}
</style>
