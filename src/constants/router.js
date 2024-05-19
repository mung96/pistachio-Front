import Logo from "@/assets/svg/logo.svg";
import BellIcon from "@/assets/svg/bellIcon.svg";
import ArrowLeftIcon from "@/assets/svg/arrowLeftIcon.svg";

export const PATH = {
  FEED: "/",
  SEARCH: "/search",
  POST: "/post",

  MY_PAGE: "/my-page",
  MY_DONATION: "/my-donation",
  MY_LIKE: "/my-like",
  MY_POST: "/my-post",
  UPDATE_INFO: "/update-info",

  LOGIN: "/login",
  SIGNUP: "/signup",
};

export const NAME = {
  FEED: "feed",
  SEARCH: "search",
  POST: "post",

  MY_PAGE: "my-page",
  MY_DONATION: "my-donation",
  MY_LIKE: "my-like",
  MY_POST: "my-post",
  UPDATE_INFO: "update-info",

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
  MY_DONATION: TOP_BAR_CONTENT.BACK,
  MY_LIKE: TOP_BAR_CONTENT.BACK,
  MY_POST: TOP_BAR_CONTENT.BACK,
  UPDATE_INFO: TOP_BAR_CONTENT.BACK,

  LOGIN: TOP_BAR_CONTENT.BACK,
  SIGNUP: TOP_BAR_CONTENT.BACK,
};
