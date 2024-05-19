export const BASE_URL = import.meta.env.VITE_APP_API_URL;

export const END_POINTS = {
  LOGIN: "/user/login",
  SIGNUP: "/user",

  DUPLICATE_USERNAME: (username) => `/user/validate/names/${username}/exists`,
  DUPLICATE_EMAIL: (email) => `/user/validate/emails/${email}/exists`,
  EMAIL_NUM_VALID: (num) => `/user/validate/emails/${num}`,

  FEED: "/feed",
  FEED_ONE: (feedId) => `/feed/${feedId}`,
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
