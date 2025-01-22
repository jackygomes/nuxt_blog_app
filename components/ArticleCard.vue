<template>
  <v-card class="mx-auto wrapper" max-width="400">
    <v-img
      class="align-end text-white coverImage"
      height="280"
      src="~/assets/images/article_1.png"
      cover
    >
    </v-img>
    <v-btn class="category" position="absolute" density="comfortable"
      >Corporate Events</v-btn
    >

    <v-card-subtitle class="pt-4 px-0 date">08.08.2021</v-card-subtitle>

    <v-card-text class="px-0 py-0">
      <div class="title">
        Top Trends in Corporate Event Design and Engagement
      </div>
      <div class="description">
        Progressively incentivize cooperative systems through technically sound
        functionalities. Credibly productivate seamless data with flexible
        schemas.
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
  }
}
</style>
