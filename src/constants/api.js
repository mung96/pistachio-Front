export const BASE_URL = import.meta.env.VITE_APP_API_URL;

export const END_POINTS = {
  LOGIN: "/user",
  SIGNUP: "user/signup",
  DUPLICATE_NAME: (name) => `/user/validate/names/${name}/exists`,
  DUPLICATE_EMAIL: (email) => `/user/validate/emails/${email}/exists`,
  SEND_EMAIL_NUM: (email) => `/api/user/validate/emails/${email}`,
};

export const HTTP_STATUS_CODE = {
  SUCCESS: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  CONFLICT: 409,
  NOT_FOUND: 404,
  CONTENT_TOO_LARGE: 413,
  INTERNAL_SERVER_ERROR: 500,
};
