import { ref } from "vue";
import { defineStore } from "pinia";

export const useUserStore = defineStore("user", () => {
  const userType = ref(1);

  const setUserType = (newUserType) => {
    userType.value = newUserType;
  };

  const getUserType = () => {
    return userType.value;
  };
  return { userType, getUserType, setUserType };
});
