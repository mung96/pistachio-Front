import { END_POINTS } from "@/constants/api";
import { axiosInstance } from "../axiosInstance";

export const getDonate = async () => {
  const response = await axiosInstance.get(END_POINTS.DONATE);
  return response;
};
