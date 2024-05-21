import Logo from "@/assets/svg/logo.svg";
import BellIcon from "@/assets/svg/bellIcon.svg";
import ArrowLeftIcon from "@/assets/svg/arrowLeftIcon.svg";

export const PATH = {
  FEED: "/",
  SEARCH: "/search",
  POST: "/post",

  MY_PAGE: "/my-page",
  MY_PROJECT: "/my-project",
  PROJECT_DETAIL: (projectId) => `/my-donation/${projectId}`,
  MY_LIKE: "/my-feed/like",
  MY_LIKE_DETAIL: (postId) => `/my-like/${postId}`,
  MY_POST: "/my-feed/post",
  FEED_DETAIL: (postId) => `/feed/${postId}`,
  UPDATE_PASSWORD: "/update-password",

  LOGIN: "/login",
  SIGNUP: "/signup",
};

export const NAME = {
  FEED: "feed",
  SEARCH: "search",
  POST: "post",

  MY_PAGE: "my-page",
  MY_PROJECT: "my-donation",
  PROJECT_DETAIL: "my-donation-project",

  MY_LIKE: "my-like",
  MY_LIKE_DETAIL: "my-like-detail",

  MY_POST: "my-post",
  FEED_DETAIL: "feed-detail",
  UPDATE_PASSWORD: "update-password",

  LOGIN: "login",
  SIGNUP: "signup",
};

export const TOP_BAR_CONTENT = {
  MAIN: { left: Logo, right: BellIcon },
  POST: { left: ArrowLeftIcon, center: "글쓰기", right: "완료" },
  BACK: { left: ArrowLeftIcon },
};

export const TOP_BAR_TYPE = {
  FEED: TOP_BAR_CONTENT.MAIN,
  SEARCH: TOP_BAR_CONTENT.MAIN,
  POST: TOP_BAR_CONTENT.POST,

  MY_PAGE: TOP_BAR_CONTENT.MAIN,
  MY_PROJECT: TOP_BAR_CONTENT.BACK,
  PROJECT_DETAIL: TOP_BAR_CONTENT.BACK,
  MY_LIKE: TOP_BAR_CONTENT.BACK,
  MY_LIKE_DETAIL: TOP_BAR_CONTENT.BACK,
  MY_POST: TOP_BAR_CONTENT.BACK,
  FEED_DETAIL: TOP_BAR_CONTENT.BACK,
  UPDATE_PASSWORD: TOP_BAR_CONTENT.BACK,

  LOGIN: TOP_BAR_CONTENT.BACK,
  SIGNUP: TOP_BAR_CONTENT.BACK,
};
