import MypageIcon from "@/assets/svg/mypageIcon.svg";
import { PATH } from "@/constants/router";
import { USER_TYPE } from "./user";
export const CATEGORIES = {
  [USER_TYPE.USER]: [
    { name: "내가 한 기부", icon: MypageIcon, path: PATH.MY_PROJECT },
    { name: "내가 쓴 글", icon: MypageIcon, path: PATH.MY_POST },
    { name: "좋아요 누른 글", icon: MypageIcon, path: PATH.MY_LIKE },
    { name: "비밀번호 변경", icon: MypageIcon, path: PATH.UPDATE_PASSWORD },
    { name: "로그아웃", icon: MypageIcon },
  ],
  [USER_TYPE.PISTACHIO]: [
    { name: "나의 프로젝트", icon: MypageIcon, path: PATH.MY_PROJECT },
    { name: "내가 쓴 글", icon: MypageIcon, path: PATH.MY_POST },
    { name: "좋아요 누른 글", icon: MypageIcon, path: PATH.MY_LIKE },
    { name: "비밀번호 변경", icon: MypageIcon, path: PATH.UPDATE_PASSWORD },
    { name: "로그아웃", icon: MypageIcon },
  ],
  [USER_TYPE.AGENCY]: [
    { name: "프로젝트 보기", icon: MypageIcon, path: PATH.MY_PROJECT },
    { name: "좋아요 누른 글", icon: MypageIcon, path: PATH.MY_LIKE },
    { name: "기관정보 변경", icon: MypageIcon, path: PATH.UPDATE_PASSWORD },
    { name: "로그아웃", icon: MypageIcon },
  ],
};
