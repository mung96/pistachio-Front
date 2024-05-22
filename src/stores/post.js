import { ref } from "vue";
import { defineStore } from "pinia";

export const usePostStore = defineStore("post", () => {
  const content = ref("");
  const images = ref([]);
  const projectName = ref("");
  const postType = ref(""); //new아니면 project
  const isInput = ref(true);

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

  const getProjectName = () => {
    return projectName.value;
  };

  const setProjectName = (newProjectName) => {
    projectName.value = newProjectName;
  };

  const getPostType = () => {
    return postType.value;
  };

  const setPostType = (newPostType) => {
    postType.value = newPostType;
  };

  const getIsInput = () => {
    return isInput.value;
  };

  const setIsInput = (newIsInput) => {
    isInput.value = newIsInput;
  };
  return {
    content,
    images,
    projectName,
    isInput,
    postType,
    getContent,
    setContent,
    setImages,
    getImages,
    setProjectName,
    getProjectName,
    getPostType,
    setPostType,
    getIsInput,
    setIsInput,
  };
});
