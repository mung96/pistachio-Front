import { END_POINTS } from "@/constants/api";
import { axiosInstance } from "../axiosInstance";
import { usePostStore } from "@/stores/post";

export const postProject = async () => {
  const store = usePostStore();
  const response = await axiosInstance.post(END_POINTS.PROJECT, {
    name: store.getProjectName(),
    description: store.getContent(),
    targetDonationAmount: 20000,
    startTime: new Date(),
    endTime: new Date(),
  });
  return response;
};
// const formData = new FormData();
//   store.getImages().forEach((image) => {
//     console.log(image);
//     formData.append("pictures", image);
//     formData.append(
//       "feedRequest",
//       new Blob(
//         [
//           JSON.stringify({
//             projectId: 1,
//             content: store.getContent(),
//           }),
//         ],
//         { type: "application/json" }
//       )
//     );
//   });
//   console.log(store.getImages());
//   console.log(formData);

//   const response = await axiosInstance.post(
//     END_POINTS.PROJECT,

//     formData,
//     {
//       headers: {
//         "Content-Type": "multipart/form-data",
//       },
//     }
//   );
