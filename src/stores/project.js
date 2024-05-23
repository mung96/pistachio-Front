import { ref } from "vue";
import { defineStore } from "pinia";

export const useProjectStore = defineStore("project", () => {
  const project = ref({});

  const setProject = (newProject) => {
    project.value = newProject;
  };

  const getProject = () => {
    return project.value;
  };

  return { project, setProject, getProject };
});
