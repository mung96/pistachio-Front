<template>
  <input
    type="radio"
    name="role"
    :value="value"
    @click="handleBtnClick"
    :id="value"
  />
  <label :for="value">{{ text }}</label>
</template>

<script setup>
import { useSignupStore } from "@/stores/signup";

const signupStore = useSignupStore();

const props = defineProps({
  text: String,
  value: Number,
});

const handleBtnClick = (e) => {
  console.log(e.target.value);
  signupStore.setUser("role", e.target.value);
  console.log(signupStore.getUser());
};
</script>

<style scoped>
label {
  width: 100%;
  background-color: white;
  min-height: 44px;
  color: var(--gray600-color);
  border: 1px solid var(--gray600-color);
  outline: none;
  text-align: center;
  padding: 16px 20px;
  border-radius: var(--spacing-3);

  font-weight: 700;
  display: inline-block;
  cursor: pointer;
}

input[type="radio"] {
  position: absolute;
  top: 0;
  opacity: 0;
  width: 0;
  height: 0;
  vertical-align: middle;
  appearance: none;
}

input[type="radio"]:checked + label {
  border: 1px solid var(--sub-color);
  color: var(--sub-color);
  vertical-align: middle;
  appearance: none;
}
</style>
