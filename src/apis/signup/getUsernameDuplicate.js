import { END_POINTS } from "@/constants/api";
import { axiosInstance } from "../axiosInstance";

export const getUsernameDuplicate = async (username) => {
  const { status } = await axiosInstance.get(
    END_POINTS.DUPLICATE_USERNAME(username)
  );
  console.log(status);
  return status;
};
