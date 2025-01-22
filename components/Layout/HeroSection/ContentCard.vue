<template>
  <v-card class="wrap" color="#FFFFFF" rounded="xl">
    <div class="d-flex flex-no-wrap justify-space-between">
      <v-row>
        <v-col :cols="6">
          <v-avatar class="" rounded="0" size="100%">
            <v-img src="~/assets/images/HeroImage.png"></v-img>
          </v-avatar>
        </v-col>
        <v-col :cols="6">
          <div class="content pa-5">
            <p class="Date">Jan 24, 2024</p>
            <h1 class="title text-h4 py-5">
              How to Plan a Successful Team-Building Retreat for Your Company
            </h1>

            <div class="description">
              Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit
              phasellus mollis sit aliquam sit nullam neque ultrices. Lorem
              ipsum dolor sit amet consectetur adipiscing eli mattis sit
              phasellus mollis sit aliquam sit nullam neque ultrices.
            </div>
            <v-divider :thickness="1" class="my-4" color="#6A6A6A"></v-divider>
            <div class="bottom-actions d-flex justify-space-between">
              <Button2 name="Corporate Events" />
              <v-btn
                class="text-none read-more px-2 py-3"
                append-icon="mdi-arrow-right"
                variant="text"
                size="x-large"
              >
                Read
              </v-btn>
            </div>
          </div>
        </v-col>
      </v-row>
    </div>
  </v-card>
</template>

<style lang="scss" scoped>
.wrap {
  box-shadow: 6px 6px 54px 0px rgba(0, 0, 0, 0.05);

  .content {
    color: rgba(34, 34, 34, 0.7);
    .date {
      font-size: 14px;
    }
    .title {
      color: rgba(34, 34, 34, 1);
      line-height: 46px;
      font-weight: 500;
    }
    .description {
      font-size: 16px;
    }
    .read-more {
      font-size: 16px;
      color: rgba(34, 34, 34, 1);
      font-weight: 500;
    }
  }
}
</style>
