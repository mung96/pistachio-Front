import { ref } from "vue";
import { defineStore } from "pinia";

export const useFeedStore = defineStore("feed", (feedId) => {
  // const project = ref({});

  const feed = ref({});
  const feedPictures = ref([]);
  const comment = ref([]);
  const user = ref({});

  const setFeed = (newFeed) => {
    // {feed.value,feedPictures,comment} = newFeed;
  };

  const getFeed = () => {
    return feed.value;
  };
  // return { project, setProject, getProject, post, setPost, getPost };
  return { feed, setFeed, getFeed };
});
