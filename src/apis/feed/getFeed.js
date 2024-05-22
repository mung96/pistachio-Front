import { END_POINTS } from "@/constants/api";
import { axiosInstance } from "../axiosInstance";

export const getFeed = async (feedId) => {
  const response = await axiosInstance.get(END_POINTS.FEED_ONE(feedId));
  return response;
};
