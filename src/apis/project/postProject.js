import { END_POINTS } from "@/constants/api";
import { axiosInstance } from "../axiosInstance";
import { usePostStore } from "@/stores/post";
import { useUserStore } from "@/stores/user";
export const postProject = async () => {
  const store = usePostStore();
  const userStore = useUserStore();
  const formData = new FormData();
  store.getImages().forEach((image) => {
    console.log(image);
    formData.append("file", image);
    formData.append(
      "projectRequest",
      new Blob(
        [
          JSON.stringify({
            agencyId: userStore.getUser().membershipId,
            name: store.getProjectName(),
            description: store.getContent(),
            targetDonationAmount: 20000,
            image: "",
            startTime: new Date(),
            endTime: new Date(),
          }),
        ],
        { type: "application/json" }
      )
    );
  });

  const response = await axiosInstance.post(END_POINTS.PROJECT, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  console.log(response);
  return response;
};

// @RequestPart("projectRequest") AddDonateProjectRequest addDonateProjectRequest,
// @RequestPart("file") List<MultipartFile> multipartFiles
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
