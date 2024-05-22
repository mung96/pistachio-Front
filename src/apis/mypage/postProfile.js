import { END_POINTS } from "@/constants/api";
import { axiosInstance } from "../axiosInstance";
import { useUserStore } from "@/stores/user";

export const postProfile = async (file) => {
  const userStore = useUserStore();
  const formData = new FormData();
  console.log(userStore);
  //   formData.append("files", userStore.getUser().userProfile);

  formData.append("files", file);
  console.log(formData);

  const response = await axiosInstance.post(
    END_POINTS.PROFILE,

    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
  return response;
};
