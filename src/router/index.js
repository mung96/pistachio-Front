import { createRouter, createWebHistory } from 'vue-router';
import FeedPage from '@/pages/feed/FeedPage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    //피드페이지
    { path: '/', component: FeedPage },

    //검색페이지
    { path: '/search', component: LoginPage },

    //auth 페이지
    { path: '/login', component: LoginPage },
    { path: '/signup', component: SignupPage },

    // 마이페이지
    { path: '/my-page', component: MypagePage },
    { path: '/my-donation', component: FeedPage },
    { path: '/my-like', component: FeedPage },
    { path: '/my-post', component: FeedPage },
  ],
});

export default router;
