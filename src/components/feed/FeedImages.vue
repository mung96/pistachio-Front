<template>
  <Flex class="carousel-container">
    <div
      class="carousel"
      :style="{ transform: `translateX(-${activeIndex * 100}%)` }"
    >
      <img v-for="(image, index) in props.images" :src="image" :key="index" />
    </div>
    <button class="prev" @click="handleCarouselMinus">-넘기기</button>
    <button class="next" @click="handleCarouselPlus">+넘기기</button>
  </Flex>
</template>

<script setup>
import Flex from "@/design/Flex.vue";
import { ref } from "vue";

const props = defineProps({
  images: Array,
});

const activeIndex = ref(0);

const handleCarouselMinus = () => {
  activeIndex.value =
    (activeIndex.value - 1 + props.images.length) % props.images.length;
};

const handleCarouselPlus = () => {
  activeIndex.value = (activeIndex.value + 1) % props.images.length;
};
</script>

<style scoped>
.carousel-container {
  position: relative;
  width: 360px;
  height: 360px;
  overflow: hidden;
}

.carousel {
  display: flex;
  transition: transform 0.5s ease-in-out;
  width: 100%;
  height: 100%;
}

img {
  flex-shrink: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
}

button.prev {
  left: 10px;
}

button.next {
  right: 10px;
}
</style>

<!-- <template>
  <div>
    <button @click="handleCarouselMinus">-넘기기</button>
    <button @click="handleCarouselPlus">+넘기기</button>
    <Flex class="images">
      <img
        v-for="(image, index) in props.images"
        :src="image"
        :key="index"
        :class="{ active: index === activeIndex }"
      />
    </Flex>
  </div>
</template>

<script setup>
import Flex from "@/design/Flex.vue";

import { ref } from "vue";

const props = defineProps({
  images: Array,
});

const activeIndex = ref(0);
const width = 360;
const handleCarouselMinus = () => {
  activeIndex.value =
    (activeIndex.value - 1 + props.images.length) % props.images.length;
  console.log(activeIndex.value);
};

const handleCarouselPlus = () => {
  activeIndex.value = (activeIndex.value + 1) % props.images.length;
  console.log(activeIndex.value);
};
</script>

<style scoped>
div {
  height: 360px;
  /* overflow: hidden; */
}
img {
  border: 1px solid red;
  max-width: 360px;
}
.images {
  display: flex;
  transition: transform 0.5s ease-in-out;
  width: 100%;
  height: 100%;
}
button {
  z-index: 200;
}
</style> -->
