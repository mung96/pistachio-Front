<template>
  <div>
    <TopbarMain />
    <Searchbar class="searchbar" />
    <main>
      <Flex direction="column" class="results">
        <Result v-for="result in results" :key="result" :result="result" />
      </Flex>
    </main>
  </div>
</template>

<script setup>
import Flex from "@/design/Flex.vue";
import Result from "@/components/search/Result.vue";
import TopbarMain from "@/components/common/topbar/TopbarMain.vue";
import Searchbar from "@/components/search/Searchbar.vue";
import { searchResult } from "@/dummy/search";
import { ref } from "vue";

const results = ref([]);

results.value = searchResult;
</script>

<style scoped>
.results {
  padding-left: var(--spacing-4);
  padding-right: var(--spacing-4);
}
</style>
