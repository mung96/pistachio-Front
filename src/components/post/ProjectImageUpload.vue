<template>
  <section>
    <Flex direction="column" gap="8px">
      <div class="img-container" v-for="preview in previews" :key="preview.id">
        <button @click="handleDeleteImageBtn(preview.id)">X</button>
        <img :src="preview.data" />
      </div>
      <div v-if="previews.length < imageLen">
        <label class="postImg" for="img"><p>+</p></label>
        <input
          @change="handleFileChange"
          id="img"
          type="file"
          accept="image/*"
          ref="fileInput"
        />
      </div>
    </Flex>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { usePostStore } from "@/stores/post";
import Flex from "@/design/Flex.vue";
const store = usePostStore();

const previews = ref([]);
const fileInput = ref(null);
let id = 0;

const props = defineProps({
  imageLen: Number,
});

console.log(props.imageLen);
const handleFileChange = (e) => {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.readAsDataURL(file);

  reader.onload = () => {
    const data = reader.result;
    previews.value.push({ id: id++, data });
    store.setImages([...store.getImages(), file]);

    e.target.value = "";
  };
};

const handleDeleteImageBtn = (targetId) => {
  previews.value = previews.value.filter((preview) => preview.id !== targetId);

  const updatedImages = store
    .getImages()
    .filter((_, index) => index !== targetId);
  store.setImages(updatedImages);

  console.log(store.getImages());
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
  width: 360px;
  height: 200px;
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
