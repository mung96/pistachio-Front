import { ref } from "vue";
import { defineStore } from "pinia";

export const useFeedStore = defineStore("feed", (feedId) => {
  // const project = ref({});

  const feed = ref({});
  // const feedPictures = ref([]);
  // const comment = ref([]);
  // const user = ref({});

  const setFeed = (newFeed) => {
    // [feed.value, feedPictures.value, comment.value, user.value] = newFeed;
    feed.value = newFeed;
  };

  const getFeed = () => {
    return feed.value;
  };
  return { feed, setFeed, getFeed };
});
