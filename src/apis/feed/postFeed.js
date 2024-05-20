import { END_POINTS } from "@/constants/api";
import { axiosInstance } from "../axiosInstance";
import { usePostStore } from "@/stores/post";

export const postFeed = async () => {
  const store = usePostStore();
  const formData = new FormData();
  store.getImages().map((image) => formData.append("images", image));
  console.log(formData);

  const response = await axiosInstance.post(
    END_POINTS.FEED,
    {
      content: store.getContent(),
      pictures: formData,
    },
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
  return response;
};

//이런식으로 해주면 됨.
// const formData = new FormData();
//     images.forEach((image) => {
//       formData.append('images', image.file as File);
//     });

//     // 이미지
//     await axios.post(`/item/upload/${idx}/picture`, formData, {
//       headers: {
//         'Content-Type': 'multipart/form-data',
//         Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
//       },
//     });
