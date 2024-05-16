export const BASE_URL = import.meta.env.VITE_APP_API_URL;

export const END_POINTS = {
  LOGIN: "/user",
  SIGNUP: "user/signup",
  DUPLICATE_NAME: (name) => `/user/validate/names/${name}/exists`,
  DUPLICATE_EMAIL: (email) => `/user/validate/emails/${email}/exists`,
  SEND_EMAIL_NUM: (email) => `/api/user/validate/emails/${email}`,
};
