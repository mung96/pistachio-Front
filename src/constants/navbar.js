import FeedIcon from "@/assets/svg/feedIcon.svg";
import MypageIcon from "@/assets/svg/mypageIcon.svg";
import PostIcon from "@/assets/svg/postIcon.svg";
import SearchIcon from "@/assets/svg/searchIcon.svg";
import { PATH } from "@/constants/router";

export const pages = [
  { name: "피드", icon: FeedIcon, path: PATH.FEED },
  { name: "검색", icon: SearchIcon, path: PATH.SEARCH },
  { name: "글쓰기", icon: PostIcon, path: PATH.CREATE_POST },
  { name: "마이페이지", icon: MypageIcon, path: PATH.MY_PAGE },
];
