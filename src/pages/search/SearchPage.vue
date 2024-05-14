<template>
  <Flex direction="column">
    <Searchbar />
    <Result />
    <Result />
    <Result />
  </Flex>
</template>

<script setup>
import Flex from "@/design/Flex.vue";
import Result from "@/components/search/Result.vue";

import Searchbar from "@/components/search/Searchbar.vue";
</script>

<style scoped></style>
