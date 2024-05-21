import { createRouter, createWebHistory } from "vue-router";

import FeedPage from "@/pages/feed/FeedPage.vue";
import SearchPage from "@/pages/search/SearchPage.vue";
import PostPage from "@/pages/post/PostPage.vue";
import MyPage from "@/pages/mypage/Mypage.vue";
import MyFeedPage from "@/pages/mypage/myfeed/MyFeedPage.vue";
import MyDonationPage from "@/pages/mypage/mydonation/MyDonationPage.vue";
import LoginPage from "@/pages/login/LoginPage.vue";
import SignupPage from "@/pages/signup/SignupPage.vue";
import UpdateInfoPage from "@/pages/mypage/updateinfo/UpdateInfoPage.vue";
import ProjectPage from "@/pages/mypage/mydonation/ProjectPage.vue";
import FeedDetailPage from "@/pages/feed/FeedDetailPage.vue";

import { PATH, NAME } from "@/constants/router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    //피드페이지
    { path: PATH.FEED, name: NAME.FEED, component: FeedPage },

    //검색페이지
    { path: PATH.SEARCH, name: NAME.SEARCH, component: SearchPage },

    //게시글 추가
    {
      path: PATH.POST,
      name: NAME.POST,
      component: PostPage,
    },

    // 마이페이지
    { path: PATH.MY_PAGE, name: NAME.MY_PAGE, component: MyPage },
    { path: PATH.MY_DONATION, name: NAME.DONATION, component: MyDonationPage },
    {
      path: PATH.MY_DONATION_PROJECT(":projectId"),
      name: NAME.MY_DONATION_PROJECT,
      component: ProjectPage,
      props: true,
    },
    { path: PATH.MY_POST, name: NAME.MY_POST, component: MyFeedPage },
    {
      path: PATH.FEED_DETAIL(":postId"),
      name: NAME.FEED_DETAIL,
      component: FeedDetailPage,
    },
    { path: PATH.MY_LIKE, name: NAME.MY_LIKE, component: MyFeedPage },

    {
      path: PATH.UPDATE_INFO,
      name: NAME.UPDATE_INFO,
      component: UpdateInfoPage,
    },

    //auth 페이지
    { path: PATH.LOGIN, name: NAME.LOGIN, component: LoginPage },
    { path: PATH.SIGNUP, name: NAME.SIGNUP, component: SignupPage },
  ],
});

export default router;
