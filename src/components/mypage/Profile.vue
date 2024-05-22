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
      <Flex direction="column" align="center"
        ><span>36</span><span>게시물</span></Flex
      >
      <Flex direction="column" align="center"
        ><span>36</span><span>팔로워</span></Flex
      >
      <Flex direction="column" align="center"
        ><span>36</span><span>팔로잉</span></Flex
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

const { user } = useUserStore();
const userStore = useUserStore();
console.log(user);

const handleProfileClick = () => {};

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
