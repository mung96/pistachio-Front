import { AWS_BUCKET_URL } from "@/constants/api";

export const imageURLParser = (url) => {
  return AWS_BUCKET_URL + "/" + url;
};
