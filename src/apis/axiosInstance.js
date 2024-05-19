import axios from "axios";

import { BASE_URL } from "@/constants/api";

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

export const axiosAuthInstance = axios.create({
  baseURL: BASE_URL,
  //세션 포함
});
