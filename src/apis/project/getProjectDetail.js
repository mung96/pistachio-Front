import { END_POINTS } from "@/constants/api";
import { axiosInstance } from "../axiosInstance";

export const getProjectDetail = async (projectId) => {
  const response = await axiosInstance.get(
    END_POINTS.PROJECT + "/" + projectId
  );
  return response;
};
