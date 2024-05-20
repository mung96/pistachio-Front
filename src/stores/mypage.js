import { ref } from "vue";
import { defineStore } from "pinia";

export const useMypageStore = defineStore("post", () => {
  const project = ref({});
  const post = ref({});

  const setProject = (newProject) => {
    project.value = newProject;
  };

  const getProject = () => {
    return project.value;
  };
  const setPost = (newPost) => {
    post.value = newPost;
  };

  const getPost = () => {
    return post.value;
  };
  return { project, setProject, getProject, post, setPost, getPost };
});
