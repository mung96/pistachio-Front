import { END_POINTS } from "@/constants/api";
import { axiosInstance } from "../axiosInstance";
import { usePostStore } from "@/stores/post";

export const postMembership = async (name) => {
  const store = usePostStore();
  const response = await axiosInstance.post(END_POINTS.MEMBERSHIP, {
    name: name,
  });
  return response;
};
