<template>
  <div>
    <Flex
      v-if="isUserProject"
      direction="column"
      gap="16px"
      padding-left="16px"
    >
      <Tag :color="palette.main" :text="postStore.projectName" />
    </Flex>

    <Flex
      v-if="isPistachioProject"
      direction="column"
      gap="16px"
      padding-left="16px"
    >
      <Tag :color="palette.main" :text="postStore.projectName" />
    </Flex>

    <Flex v-if="isAgencyNew" direction="column" gap="16px" padding-left="16px">
      <TagInput v-if="postStore.getIsInput()" />
      <Tag
        v-if="!postStore.getIsInput()"
        :color="palette.main"
        :text="postStore.projectName"
      />
    </Flex>
  </div>
</template>
<script setup>
import Flex from "@/design/Flex.vue";
import Tag from "@/components/post/Tag.vue";
import TagInput from "@/components/post/TagInput.vue";
import { usePostStore } from "@/stores/post";
import { useUserStore } from "@/stores/user";
import { ref } from "vue";
import { USER_TYPE } from "@/constants/user";
import { palette } from "@/constants/color";

const postStore = usePostStore();
const userStore = useUserStore();

const { userType } = userStore;
const { postType, isInput } = postStore;

const isUserProject = userType === USER_TYPE.USER && postType === "project";
const isPistachioProject =
  userType === USER_TYPE.PISTACHIO && postType === "project";
const isAgencyNew = userType === USER_TYPE.AGENCY && postType === "new";
</script>

<style scoped></style>
