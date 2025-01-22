<template>
  <div class="wrapper">
    <LayoutHeroSection />
    <v-divider
      :thickness="1"
      class="divider font-weight-bold"
      color="#6A6A6A"
    ></v-divider>
    <div class="mainContentSection">
      <h5 class="text-h5 font-weight-bold pb-12">Popular Articles</h5>
      <v-row>
        <v-col cols="4" v-for="item in articles">
          <ArticleCard />
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script setup>
const articles = Array(9);
</script>

<style lang="scss" scoped>
.wrapper {
  .divider {
    margin: 80px 0 74px;
  }
}
</style>
