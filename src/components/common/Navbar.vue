<template>
  <nav>
    <RouterLink :to=PATH.FEED><div class="navbar-item">피드</div></RouterLink>
    <RouterLink :to=PATH.SEARCH><div class="navbar-item">검색</div></RouterLink>
    <RouterLink :to=PATH.CREATE_POST><div class="navbar-item">게시글 추가</div></RouterLink>
    <RouterLink :to=PATH.MY_PAGE><div class="navbar-item">마이페이지</div></RouterLink>
  </nav>
</template>

<script setup>
    import { RouterLink } from "vue-router";
    import {PATH} from "@/constants/router"
</script>

<style scoped>
nav{
    display: flex;
    gap:56px;
}
</style>