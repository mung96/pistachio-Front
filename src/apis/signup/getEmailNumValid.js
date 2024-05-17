import { END_POINTS } from "@/constants/api";
import { axiosInstance } from "../axiosInstance";

export const getEmailNumValid = async (num) => {
  const { status } = await axiosInstance.get(END_POINTS.EMAIL_NUM_VALID(num));
  console.log(status);
  return status;
};
