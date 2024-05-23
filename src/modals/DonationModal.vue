<template>
  <Dim @click="handleDimClick" />
  <Flex direction="column" class="modal" align="center" gap="14px">
    <h3>기부금액을 입력해주세요</h3>
    <Flex align="center" gap="16px">
      <input @input="handleInput" type="number" class="pista-input" />
      <label class="pista">pista</label>
    </Flex>
    <svg v-if="isValid" width="100" height="12">
      <rect width="100" height="12" style="fill: none"></rect>
    </svg>
    <p v-if="!isValid" class="error-msg">pista가 부족합니다</p>
    <Button :disabled="!money" @click="handleBtnClick">기부하기</Button>
  </Flex>
</template>

<script setup>
import Dim from "@/modals/Dim.vue";
import Flex from "@/design/Flex.vue";
import Button from "@/components/common/button/Button.vue";
import { useRouter } from "vue-router";
import { PATH } from "@/constants/router";
import { ref } from "vue";
import { postDonate } from "@/apis/donate/postDonate";
import { useFeedStore } from "@/stores/feed";
import { useUserStore } from "@/stores/user";

const router = useRouter();
const money = ref(null);

const feedStore = useFeedStore();
const userStore = useUserStore();

console.log(feedStore.getFeed());
console.log(userStore.getUser());

const emit = defineEmits(["donationModalOpen"]);
const isValid = ref(true);
const handleInput = (e) => {
  money.value = e.target.value;
  isValid.value = true;
};

const handleDimClick = () => {
  emit("donationModalOpen");
};

const handleBtnClick = async () => {
  //API요청
  try {
    const response = await postDonate({
      projectId: feedStore.getFeed().feed.projectId,
      amount: money.value,
    });
    emit("donationModalOpen");

    console.log(response);
  } catch (error) {
    if (error.code === "ERR_BAD_REQUEST") {
      isValid.value = false;
    }
  }
};
</script>

<style scoped>
.pista-input {
  border: 1px solid var(--sub-color);
  outline: none;
  border-radius: 8px;
  min-height: 28px;
  width: 120px;
  padding: 12px 12px;
}
.pista {
  color: var(--sub-color);
  font: var(--xl-mm-font);
}

.error-msg {
  color: var(--pinkred-color);
  font-size: 12px;
  line-height: 12px;
}

.modal {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  padding: 24px;
  border-radius: 16px;
  background-color: var(--gray100-color);
  min-width: 300px;
  width: fit-content;
  z-index: 600;
}

h3 {
  font: var(--xl-pre-font);
  font-weight: 700;
}

p {
  font: var(--sm-pre-font);
}
</style>
