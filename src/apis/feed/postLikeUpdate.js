import { END_POINTS } from "@/constants/api";
import { axiosInstance } from "../axiosInstance";
import { jsonLocalStorage } from "@/utils/jsonLocalStorage";
import { KEY } from "@/utils/likeLocalStorage";

export const postLikeUpdate = async () => {
  const response = await axiosInstance.post(
    END_POINTS.LIKE_UPDATE,
    jsonLocalStorage.getItem(KEY)
  );
  localStorage.removeItem(KEY);
  return response;
};
