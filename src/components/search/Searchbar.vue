<template>
  <div ref="search" :class="isTop ? 'container-top' : 'container'">
    <Input
      :class="isTop && 'top'"
      :icon="SearchIcon"
      placeholder="닉네임검색"
    />
  </div>
</template>

<script setup>
import Input from "@/components/common/input/Input.vue";
import SearchIcon from "@/assets/svg/searchIcon.svg";
import { ref, onMounted } from "vue";

const search = ref(null);
const isTop = ref(false);
onMounted(() => {
  // input.value.focus();
  console.log(search.value);
});

window.addEventListener("scroll", () => {
  isTop.value = search.value.getBoundingClientRect().y <= 0;
});
</script>

<style scoped>
.container,
.container-top {
  transition: all 0.7s ease-in-out;
}
.container {
  padding: 0 var(--spacing-4);
}
.container-top {
  padding: 0;
}
.top {
  position: fixed;
  width: 100%;
  top: 0;
  border-radius: 0;
  border-bottom: 2px solid var(--sub-color);
}
</style>
