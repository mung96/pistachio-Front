import { END_POINTS } from "@/constants/api";
import { axiosInstance } from "../axiosInstance";

export const getEmailDuplicate = async (email) => {
  console.log(email);
  const response = await axiosInstance.get(END_POINTS.DUPLICATE_EMAIL(email));

  return response;
};
