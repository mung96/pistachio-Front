import { END_POINTS } from "@/constants/api";
import { axiosInstance } from "../axiosInstance";

export const getFeeds = async () => {
  const response = await axiosInstance.get(END_POINTS.FEED);
  return response;
};
