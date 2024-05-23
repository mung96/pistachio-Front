import { END_POINTS } from "@/constants/api";
import { axiosInstance } from "../axiosInstance";

export const getProject = async (membershipId) => {
  const response = await axiosInstance.get(
    END_POINTS.MEMBERSHIP + "/" + membershipId
  );
  return response;
};
