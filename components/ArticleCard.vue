<script setup>
const props = defineProps({
  article: {
    type: Object,
    required: true,
  },
});
const { formatDate } = useDateUtils();

const getCategoryName = (stringObj) => {
  const obj = JSON.parse(stringObj);
  return obj.name;
};
</script>

<template>
  <v-card class="mx-auto wrapper" max-width="400">
    <v-img
      class="align-end text-white coverImage"
      height="280"
      :src="article.imageUrl"
      cover
    >
    </v-img>
    <v-btn class="category" position="absolute" density="comfortable">{{
      getCategoryName(article.category)
    }}</v-btn>

    <v-card-subtitle class="pt-4 px-0 date">
      {{ formatDate(article.created_at, "short") }}</v-card-subtitle
    >

    <v-card-text class="px-0 py-0">
      <div class="title">
        {{ article.title }}
      </div>
      <div class="description">
        {{ article.description }}
      </div>
    </v-card-text>
  </v-card>
</template>

<style lang="scss" scoped>
.wrapper {
  box-shadow: none;
  .category {
    top: 15px;
    right: 2px;
    padding: 8px 10px;
    border-radius: 8px;
    backdrop-filter: blur(4px);
    background: rgba(0, 0, 0, 0.25);
    font-size: 10px;
    color: #ffffff;
    text-transform: uppercase;
  }
  .date {
    font-size: 12px;
  }
  .coverImage {
    border-radius: 12px;
  }
  .title {
    padding: 14px 0 18px;
    font-size: 16px;
    font-weight: 600;
    color: rgba(73, 80, 87, 1);
  }
  .description {
    font-size: 14px;
    color: rgba(73, 80, 87, 1);
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
}
</style>
