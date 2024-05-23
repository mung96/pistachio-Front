import { END_POINTS } from "@/constants/api";
import { axiosInstance } from "../axiosInstance";

export const getMyFeed = async () => {
  const response = await axiosInstance.get(END_POINTS.MY_FEED);
  return response;
};
