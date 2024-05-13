<template>
  <div :style="flexStyle">
    <slot> </slot>
  </div>
</template>

<script setup>
import { watchEffect } from "vue";

const props = defineProps({
  direction: String,
  gap: String,
  justify: String,
  align: String,
  paddingTop: String,
  paddingBottom: String,
  paddingLeft: String,
  paddingRight: String,
  width: String,
  height: String,
  postition: String,
  basis: String,
});

let flexStyle = {
  display: "flex",
  "justify-content": "center",
  "align-items": "center",
};

watchEffect(() => {
  flexStyle = {
    ...flexStyle, // 기존 스타일 유지
    "flex-direction": props.direction,
    gap: props.gap,
    "justify-content": props.justify,
    "align-items": props.align,
    "padding-top": props.paddingTop,
    "padding-bottom": props.paddingBottom,
    "padding-left": props.paddingLeft,
    "padding-right": props.paddingRight,
    width: props.width,
    height: props.height,
    postition: props.postition,
    "flex-basis": props.basis,
  };
});
</script>

<style scoped></style>
