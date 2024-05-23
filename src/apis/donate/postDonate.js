import { END_POINTS } from "@/constants/api";
import { axiosInstance } from "../axiosInstance";
import { usePostStore } from "@/stores/post";

export const postDonate = async (data) => {
  const store = usePostStore();
  const response = await axiosInstance.post(END_POINTS.DONATE, data);
  return response;
};
