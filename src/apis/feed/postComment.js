import { END_POINTS } from "@/constants/api";
import { axiosInstance } from "../axiosInstance";
import { usePostStore } from "@/stores/post";

export const postComment = (comment) => {
  console.log("댓글 등록 " + comment);
  //   const response = await axiosInstance.post(
  //     END_POINTS.FEED,

  //     formData
  //   );
  //   return response;
};
