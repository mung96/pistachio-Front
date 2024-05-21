import { ref } from "vue";
import { defineStore } from "pinia";

export const usePostStore = defineStore("post", () => {
  const content = ref("");
  const images = ref([]);

  const setContent = (newContent) => {
    content.value = newContent;
  };

  const getContent = () => {
    return content.value;
  };

  const setImages = (newImages) => {
    images.value = newImages;
  };

  const getImages = () => {
    return images.value;
  };

  return { content, images, getContent, setContent, setImages, getImages };
});
