import { END_POINTS } from "@/constants/api";
import { axiosInstance } from "../axiosInstance";
import { jsonLocalStorage } from "@/utils/jsonLocalStorage";
import { KEY } from "@/utils/followLocalStorage";

export const postFollow = async (userId) => {
  const response = await axiosInstance.post(END_POINTS.FOLLOW, {
    [userId]: true,
  });
  return response;
};
