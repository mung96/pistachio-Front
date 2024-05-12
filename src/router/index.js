import { createRouter, createWebHistory } from 'vue-router';

import FeedPage from '@/pages/feed/FeedPage.vue';
import SearchPage from '@/pages/search/SearchPage.vue';
import CreatePostPage from '@/pages/createpost/CreatePostPage.vue';
import MyPage from '@/pages/mypage/MyPage.vue';
import MyLikePage from '@/pages/mypage/MyLikePage.vue';
import MyPostPage from '@/pages/mypage/MyPostPage.vue';
import MyDonationPage from '@/pages/mypage/MyDonationPage.vue';
import LoginPage from '@/pages/auth/LoginPage.vue';
import SignupPage from '@/pages/auth/SignupPage.vue';

import { PATH, NAME } from '@/constants/router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    //피드페이지
    { path: PATH.FEED, name: NAME.FEED, component: FeedPage },

    //검색페이지
    { path: PATH.SEARCH, name: NAME.SEARCH, component: SearchPage },

    //게시글 추가
    { path: PATH.CREATE_POST, name: NAME.CREATE_POST, component: CreatePostPage },

    // 마이페이지
    { path: PATH.MY_PAGE, name: NAME.MY_PAGE, component: MyPage },
    { path: PATH.MY_DONATION, name: NAME.DONATION, component: MyDonationPage },
    { path: PATH.MY_LIKE, name: NAME.MY_LIKE, component: MyLikePage },
    { path: PATH.MY_POST, name: NAME.MY_POST, component: MyPostPage },

    //auth 페이지
    { path: PATH.LOGIN, name: NAME.LOGIN, component: LoginPage },
    { path: PATH.SIGNUP, name: NAME.SIGNUP, component: SignupPage },
  ],
});

export default router;
