<template>
  <Flex class="container" gap="45px" align="center">
    <div>
      <label class="postImg" for="img"
        ><div onClick="handleProfileClick">
          <BasicProfileIcon width="60px" v-if="!user.userProfile" />
          <img
            v-if="user.userProfile"
            :src="imageURLParser(user.userProfile)"
          /></div
      ></label>
      <input @change="handleFileChange" id="img" type="file" accept="image/*" />
    </div>

    <Flex gap="48px">
      <Flex direction="column" align="center" gap="4px"
        ><span>{{ user.followerCnt }}</span
        ><span>팔로워</span></Flex
      >
      <Flex direction="column" align="center" gap="4px"
        ><span>{{ user.followingCnt }}</span
        ><span>팔로잉</span></Flex
      >
      <Flex
        id="pista"
        direction="column"
        align="center"
        gap="4px"
        @click="handlePistaClick"
      >
        <span>{{ pista }}</span>
        <span class="pista">pista</span></Flex
      >
    </Flex>
  </Flex>
</template>

<script setup>
import Flex from "@/design/Flex.vue";
import BasicProfileIcon from "@/assets/svg/basicProfileIcon.svg";
import { useUserStore } from "@/stores/user";
import { postProfile } from "@/apis/mypage/postProfile";
import { imageURLParser } from "@/utils/imageURLParser";
import PistaIcon from "@/assets/svg/pistaIcon.svg";
import { computed, onMounted, ref } from "vue";
import { postLogin } from "@/apis/login/postLogin";
const { user } = useUserStore();
const userStore = useUserStore();
const pista = ref(localStorage.getItem("pista") || user.pista);
const emit = defineEmits(["pistaModalOpen"]);

const handlePistaClick = () => {
  console.log(1);
  pista.value = localStorage.getItem("pista");
  emit("pistaModalOpen");
};
localStorage.setItem("pista", user.pista);
console.log(user.pista);

onMounted(async () => {
  try {
    const response = await postLogin({
      email: userStore.getUser().email,
      password: "ssafy1234*",
    });
    console.log(response.data);
    userStore.setUser(response.data);
  } catch (error) {
    console.log(error);
  }
  pista.value = userStore.getUser().pista;
});

const handleFileChange = async (e) => {
  //바꾸면 요청 보내고 응답으로 아예 프로필을 바꾸자.
  try {
    const response = await postProfile(e.target.files[0]);
    user.userProfile = response.data;
  } catch (error) {
    console.log(error);
  }
};
</script>

<style scoped>
h3 {
  font: var(--xl-pre-font);
  font-weight: 700;
}
.pista {
  font: var(--sm-mm-font);
  white-space: nowrap;
}

span {
  font: var(--sm-pre-font);
  white-space: nowrap;
}
img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
}
.container {
  border: 1px solid black;
  border-radius: 12px;
  padding: 12px;
}

input[type="file"] {
  position: absolute;
  opacity: 0;
  top: 0;
  width: 0;
  height: 0;
  overflow: hidden;
}
</style>
