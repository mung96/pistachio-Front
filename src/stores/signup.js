import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useSignupStore = defineStore("signup", () => {
  const email = ref(0);
  //   const doubleCount = computed(() => count.value * 2);
  //   function increment() {
  //     count.value++;
  //   }

  return { email };
});
