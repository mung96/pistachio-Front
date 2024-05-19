import { END_POINTS } from "@/constants/api";
import { axiosInstance } from "../axiosInstance";

export const postLogin = async (user) => {
  const response = await axiosInstance.post(END_POINTS.LOGIN, {
    email: user.email,
    password: user.password,
  });
  return response;
};
