import FeedIcon from "@/assets/svg/feedIcon.svg";
import MypageIcon from "@/assets/svg/mypageIcon.svg";
import PostIcon from "@/assets/svg/postIcon.svg";
import SearchIcon from "@/assets/svg/searchIcon.svg";

import FeedFillIcon from "@/assets/svg/feedfillIcon.svg";
import MypageFillIcon from "@/assets/svg/mypagefillIcon.svg";
import PostFillIcon from "@/assets/svg/postfillIcon.svg";
import SearchFillIcon from "@/assets/svg/searchfillIcon.svg";

import { PATH } from "@/constants/router";

export const pages = [
  { name: "피드", icon: FeedIcon, fill: FeedFillIcon, path: PATH.FEED },
  { name: "검색", icon: SearchIcon, fill: SearchFillIcon, path: PATH.SEARCH },
  {
    name: "글쓰기",
    icon: PostIcon,
    fill: PostFillIcon,
    path: PATH.POST,
  },
  {
    name: "마이페이지",
    icon: MypageIcon,
    fill: MypageFillIcon,
    path: PATH.MY_PAGE,
  },
];
