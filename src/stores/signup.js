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
import { getEmailNumValid } from "@/apis/signup/getEmailNumValid";
import { postUser } from "@/apis/signup/postUser";
export const useSignupStore = defineStore("signup", () => {
  const user = ref({ role: 1 });
  const step = ref(FIELD.USER_TYPE);

  const setUser = (key, value) => {
    user.value[key] = value;
  };

  const getUser = () => {
    return user.value;
  };

  const setStep = (newStep) => {
    step.value = newStep;
  };

  const getStep = () => {
    return step.value;
  };

  const checkFormat = (field, inputData) => {
    if (field === FIELD.EMAIL) {
      return checkEmail(inputData);
    }
    if (field === FIELD.EMAIL_AUTH) {
      return true;
    }
    if (field === FIELD.USER_NAME) {
      return checkUsername(inputData);
    }
    if (field === FIELD.PWD) {
      return checkPwd(inputData);
    }
    if (field === FIELD.PWD_CONFIRM) {
      return checkPwdConfirm(inputData);
    }
  };

  const checkValidate = (field, inputData) => {
    if (field === FIELD.EMAIL) {
      return getEmailDuplicate(inputData);
    }
    if (field === FIELD.EMAIL_AUTH) {
      return true;
      // return getEmailNumValid(inputData);
    }
    if (field === FIELD.USER_NAME) {
      return getUsernameDuplicate(inputData);
    }
    if (field === FIELD.PWD) {
      //비밀번호 등록
      return postUser(inputData);
    }
  };

  return {
    user,
    step,
    setUser,
    setStep,
    getUser,
    getStep,
    checkFormat,
    checkValidate,
  };
});
