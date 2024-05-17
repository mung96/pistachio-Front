import { ref } from "vue";
import { defineStore } from "pinia";
import { FIELD } from "@/constants/ui";
import { checkEmail } from "@/utils/validator";

export const useSignupStore = defineStore("signup", () => {
  const user = ref({});
  const step = ref(FIELD.EMAIL);

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

  // const checkFormat =(field,inputData) =>{
  //   if(field === FIELD.EMAIL){
  //     return checkEmail(inputData);
  //   }
  //   if(field === FIELD.USER_NAME){
  //     return check(inputData);
  //   }
  //   if(field === FIELD.EMAIL){
  //     return checkEmail(inputData);
  //   }
  // }

  // const checkDuplicate =(field,inputData) =>{
  //   if(field)
  // }

  return { user, step, setUser, setStep, getUser, getStep };
});
