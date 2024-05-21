import { createRouter, createWebHistory } from "vue-router";

import FeedPage from "@/pages/feed/FeedPage.vue";

import SearchPage from "@/pages/search/SearchPage.vue";

import PostPage from "@/pages/post/PostPage.vue";

import MyPage from "@/pages/mypage/Mypage.vue";

import MyFeedPage from "@/pages/mypage/myfeed/MyFeedPage.vue";

import MyProjectPage from "@/pages/mypage/myproject/MyProjectPage.vue";
import ProjectDetailPage from "@/pages/mypage/myproject/ProjectDetailPage.vue";

import LoginPage from "@/pages/login/LoginPage.vue";
import SignupPage from "@/pages/signup/SignupPage.vue";
import UpdatePasswordPage from "@/pages/mypage/updatepassword/UpdatePasswordPage.vue";

import FeedDetailPage from "@/pages/feed/FeedDetailPage.vue";
import { PATH, NAME } from "@/constants/router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    //피드페이지
    { path: PATH.FEED, name: NAME.FEED, component: FeedPage },

    //검색페이지
    { path: PATH.SEARCH, name: NAME.SEARCH, component: SearchPage },

    // 게시글 추가
    {
      path: PATH.POST,
      name: NAME.POST,
      component: PostPage,
    },
    // {
    //   path: PATH.POST,
    //   name: NAME.POST,
    //   component: PostProjectPage,
    // },

    // 마이페이지
    { path: PATH.MY_PAGE, name: NAME.MY_PAGE, component: MyPage },

    //마이페이지 - 프로젝트, 기부
    { path: PATH.MY_PROJECT, name: NAME.MY_PROJECT, component: MyProjectPage },
    {
      path: PATH.PROJECT_DETAIL(":projectId"),
      name: NAME.PROJECT_DETAIL,
      component: ProjectDetailPage,
      props: true,
    },

    //마이페이지 - 내가 쓴 글
    { path: PATH.MY_POST, name: NAME.MY_POST, component: MyFeedPage },

    //마이페이지 - 좋아요 누른 글
    { path: PATH.MY_LIKE, name: NAME.MY_LIKE, component: MyFeedPage },

    //마이페이지 - 피드상세
    {
      path: PATH.FEED_DETAIL(":postId"),
      name: NAME.FEED_DETAIL,
      component: FeedDetailPage,
    },

    {
      path: PATH.UPDATE_PASSWORD,
      name: NAME.UPDATE_PASSWORD,
      component: UpdatePasswordPage,
    },

    //auth 페이지
    { path: PATH.LOGIN, name: NAME.LOGIN, component: LoginPage },
    { path: PATH.SIGNUP, name: NAME.SIGNUP, component: SignupPage },
  ],
});

export default router;
