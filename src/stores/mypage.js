import { ref } from "vue";
import { defineStore } from "pinia";

export const useMypageStore = defineStore("post", () => {
  const project = ref({});

  const setProject = (newProject) => {
    project.value = newProject;
  };

  const getProject = () => {
    return project.value;
  };

  return { project, setProject, getProject };
});
