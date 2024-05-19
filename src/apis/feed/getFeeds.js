import { END_POINTS } from "@/constants/api";
import { axiosAuthInstance } from "../axiosInstance";

export const getFeeds = async () => {
  const response = await axiosAuthInstance.get(END_POINTS.FEED);
  return response;
};
