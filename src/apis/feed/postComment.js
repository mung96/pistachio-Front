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

//해시태그를 받아서 =>

//내가 기부한 프로젝트 => 제목, 내용들 => 지피티 =>
