<template>
  <button @click="handleFollowBtnClick" class="follow" v-if="!follow">
    팔로우
  </button>
</template>

<script setup>
import { FOOLLW_TRUE_BTN_TEXT, FOLLOW_FALSE_BTN_TEXT } from "@/constants/ui";
import { followLocalStorage } from "@/utils/followLocalStorage";
import { postFollow } from "@/apis/follow/postFollow";
import { ref } from "vue";
import { postLogin } from "@/apis/login/postLogin";
import { useUserStore } from "@/stores/user";
const userStore = useUserStore();
const props = defineProps({
  isFollow: Boolean,
  userId: Number,
});
import { HTTP_STATUS_CODE } from "@/constants/api";
const follow = ref(props.isFollow);

const handleFollowBtnClick = async () => {
  try {
    const response = await postFollow(props.userId);
    follow.value = true;
    try {
      console.log({
        email: userStore.getUser().email,
        password: "ssafy1234*",
      });
      const response = await postLogin({
        email: userStore.getUser().email,
        password: "ssafy1234*",
      });

      if (response.status === HTTP_STATUS_CODE.SUCCESS) {
        //이후 피드페이지로 이동
        userStore.setUser(response.data);
        userStore.setUserType(response.data.userType);
      }
    } catch (error) {
      console.log(error);
    }
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
</script>

<style scoped>
button {
  border: none;
  outline: none;
  background-color: white;

  font: var(--sm-mm-font);
}
.follow {
  color: var(--sub-color);
}
</style>
