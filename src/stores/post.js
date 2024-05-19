import { ref } from "vue";
import { defineStore } from "pinia";
import { FIELD } from "@/constants/ui";
import {
  checkEmail,
  checkUsername,
  checkPwd,
  checkPwdConfirm,
} from "@/utils/validator";
import { getEmailDuplicate } from "@/apis/signup/getEmailDuplicate";
import { getUsernameDuplicate } from "@/apis/signup/getUsernameDuplicate";
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
