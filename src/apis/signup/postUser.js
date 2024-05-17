import { END_POINTS } from "@/constants/api";
import { axiosInstance } from "../axiosInstance";
import { useSignupStore } from "@/stores/signup";

export const postUser = async () => {
  const store = useSignupStore();
  const user = store.getUser();
  console.log(user);
  const { status } = await axiosInstance.post(END_POINTS.SIGNUP, {
    email: user.email,
    name: user.name,
    password: user.password,
  });
  return status;
};
