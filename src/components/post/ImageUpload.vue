<template>
  <section>
    <Flex
      align="center"
      gap="8px"
      padding-right="16px"
      padding-left="16px"
      padding-top="12px"
      padding-bottom="12px"
      class="container"
      ref="postImg"
    >
      <div class="img-container" v-for="preview in previews" :key="preview">
        <button @click="handleDeleteImageBtn(preview.id)">X</button>
        <img :src="preview.data" />
      </div>
      <div v-if="previews.length < POST_IMAGE_MAX">
        <label class="postImg" for="img"><p>+</p></label>
        <input
          @change="handleFileChange"
          id="img"
          type="file"
          accept="image/*"
        />
      </div>
    </Flex>
  </section>
</template>
<script setup>
import Flex from "@/design/Flex.vue";
import { ref } from "vue";
import { POST_IMAGE_MAX } from "@/constants/ui";

const previews = ref([]);
const postImg = ref(null);
let id = 0;
const handleFileChange = (e) => {
  const reader = new FileReader();
  reader.readAsDataURL(e.target.files[0]);
  reader.onload = () => {
    const data = reader.result;
    previews.value = [...previews.value, { id: id++, data: data }];
    e.target.value = "";
  };
  console.log(postImg.value);
  postImg.value.scrollLeft = postImg.value.scrollWidth;
};

const handleDeleteImageBtn = (targetId) => {
  previews.value = previews.value.filter((preview) => {
    if (preview.id !== targetId) return preview;
  });
};
</script>

<style scoped>
.container {
  width: 100%;
  height: 100px;
  background-color: var(--gray200-color);
  overflow: scroll;
}
.img-container {
  position: relative;
}

.postImg,
.img-container,
img {
  width: 76px;
  height: 76px;
  border: none;
}

.postImg {
  background-color: var(--gray600-color);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  color: var(--gray100-color);
}

img {
  background-color: white;
}

button {
  width: 16px;
  height: 16px;
  font-size: 12px;
  border: none;
  background-color: var(--gray700-color);
  color: var(--gray200-color);

  position: absolute;
  right: 0;
  top: 0;
}

input[type="file"] {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}

p {
  line-height: 16px;
}
</style>
