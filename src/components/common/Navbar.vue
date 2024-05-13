<template>
  <nav>
    <span>안녕하세요</span>
     <Flex gap="32px" >
        <RouterLink :to=PATH.FEED><div class="navbar-item"><FeedIcon width="24"/>피드</div></RouterLink>
        <RouterLink :to=PATH.SEARCH><div class="navbar-item"><SearchIcon width="24"/>검색</div></RouterLink>
        <RouterLink :to=PATH.CREATE_POST><div class="navbar-item"> <PostIcon width="24"/>게시글 추가</div></RouterLink>
        <RouterLink :to=PATH.MY_PAGE><div class="navbar-item"> <MypageIcon width="24"/>마이페이지</div></RouterLink>
      </Flex>
  </nav>
</template>

<script setup>
    import { RouterLink } from "vue-router";
    import {PATH} from "@/constants/router"
    import Flex from "@/design/Flex.vue";
    import FeedIcon from "@/assets/svg/feedIcon.svg";
    import MypageIcon from "@/assets/svg/mypageIcon.svg";
    import PostIcon from "@/assets/svg/postIcon.svg";
    import SearchIcon from "@/assets/svg/searchIcon.svg";
    
</script>

<style scoped>

div{
  background-color: var(--main-color);
 
}
span{
  font: var(--xl-font) sans-serif ;
}

</style>