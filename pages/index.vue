<script setup>
import { storeToRefs } from "pinia";

const store = useBlogStore();
const { posts } = storeToRefs(store);
</script>

<template>
  <div class="wrapper">
    <HeroSection />
    <v-divider :thickness="1" class="divider" color="#6A6A6A"></v-divider>
    <div class="mainContentSection">
      <h5 class="text-h5 font-weight-bold pb-12">Popular Articles</h5>
      <v-row>
        <v-col cols="4" v-for="item in posts">
          <ArticleCard :article="item" />
        </v-col>
      </v-row>
      <v-btn class="viewMore py-4 px-9" density="comfortable">View More</v-btn>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  .divider {
    margin: 80px 0 74px;
  }
  .viewMore {
    margin-top: 74px;
    font-size: 14px;
    font-weight: 500;
    color: rgba(34, 34, 34, 0.7);
    border-radius: 100px;
    box-shadow: none;
    border: 1px solid rgba(106, 106, 106, 0.8);
    height: 48px;
    text-transform: capitalize;
  }
}
</style>
