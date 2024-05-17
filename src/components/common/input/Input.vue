<template>
  <Flex direction="column" gap="4px">
    <Flex position="relative">
      <input :placeholder="placeholder" />
      <component v-if="icon" :is="icon" width="16" class="input-icon" />
    </Flex>
    <p v-if="message" class="message" :style="{ color: color }">
      {{ message }}
    </p>
  </Flex>
</template>

<script setup>
import Flex from "@/design/Flex.vue";

const props = defineProps({
  icon: Object,
  placeholder: String,
  message: String,
  color: String,
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
  right: var(--spacing-4);
  transform: translateY(-50%);
}

.error {
  color: var(--pinkred-color);
}

.success {
  color: var(--pinkred-green);
}
</style>
