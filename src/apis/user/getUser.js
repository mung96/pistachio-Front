import { END_POINTS } from "@/constants/api";
import { axiosInstance } from "../axiosInstance";

export const getUser = async (userId) => {
  const response = await axiosInstance.get(END_POINTS.USER(userId));
  return response;
};
