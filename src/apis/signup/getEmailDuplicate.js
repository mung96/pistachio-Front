import { END_POINTS } from "@/constants/api";
import { axiosInstance } from "../axiosInstance";

export const getEmailDuplicate = async (email) => {
  const { status } = await axiosInstance.get(END_POINTS.DUPLICATE_EMAIL(email));
  console.log(status);
  return status;
};
