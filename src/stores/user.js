import { ref } from "vue";
import { defineStore } from "pinia";

export const useUserStore = defineStore("user", () => {
  const user = ref({});
  const userType = ref();

  const setUser = (newUser) => {
    user.value = newUser;
  };

  const getUser = () => {
    return user.value;
  };
  const setUserType = (newUserType) => {
    userType.value = newUserType;
  };

  const getUserType = () => {
    return userType.value;
  };
  return { userType, getUserType, setUserType, user, setUser, getUser };
});
