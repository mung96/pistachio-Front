<template>
  <main>
    <PistaModal v-if="isModalOpen" @pistaModalOpen="handleModalOpen" />
    <Flex direction="column" gap="12px">
      <Title>{{ user.name }}</Title>
      <Profile @pistaModalOpen="handleModalOpen2" :tempPista="pista" />
      <Category />
    </Flex>
  </main>
</template>

<script setup>
import Profile from "@/components/mypage/Profile.vue";
import Category from "@/components/mypage/Category.vue";
import Flex from "@/design/Flex.vue";
import Title from "@/components/common/title/Title.vue";
import { useUserStore } from "@/stores/user";
import PistaModal from "@/modals/PistaModal.vue";
import { ref } from "vue";
const userStore = useUserStore();
const user = userStore.getUser();
const isModalOpen = ref(false);
const pista = ref();

const handleModalOpen = () => {
  console.log(111);
  isModalOpen.value = !isModalOpen.value;
  pista.value = localStorage.getItem("pista");
  if (isModalOpen) {
    document.querySelector("#pista").click();
  }
  isModalOpen.value = !isModalOpen.value;
};
const handleModalOpen2 = () => {
  isModalOpen.value = !isModalOpen.value;
  pista.value = localStorage.getItem("pista");
};
</script>

<style scoped>
h2 {
  font: var(--xl-pre-font);
  font-weight: 700;
}
</style>
