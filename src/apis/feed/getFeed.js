import { END_POINTS } from "@/constants/api";
import { axiosAuthInstance } from "../axiosInstance";

export const getFeeds = async (feedId) => {
  const response = await axiosAuthInstance.get(END_POINTS.FEED_ONE(feedId));
  return response;
};
