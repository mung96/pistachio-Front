import { END_POINTS } from "@/constants/api";
import { axiosInstance } from "../axiosInstance";
import { usePostStore } from "@/stores/post";

export const postComment = async (feedId, comment) => {
  console.log(comment);
  const response = await axiosInstance.post(
    END_POINTS.COMMENT(feedId),
    comment
  );
  return response;
};
