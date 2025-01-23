<script setup>
import { storeToRefs } from "pinia";

const store = useBlogStore();
const { posts } = storeToRefs(store);

const { formatDate } = useDateUtils();

const getCategoryName = (id) => {
  const info = store.categories.find((item) => item.id === parseInt(id));
  return info.name;
};
</script>

<template>
  <v-card v-if="posts.length > 0" class="wrap" color="#FFFFFF" rounded="xl">
    <div class="d-flex flex-no-wrap justify-space-between">
      <v-row>
        <v-col :cols="6">
          <v-avatar class="" rounded="0" size="100%">
            <v-img :src="posts[0].imageUrl"></v-img>
          </v-avatar>
        </v-col>
        <v-col :cols="6">
          <div class="content pa-5">
            <p class="Date">
              {{ formatDate(posts[0].created_at, "long") }}
            </p>
            <h1 class="title text-h4 py-5">
              {{ posts[0].title }}
            </h1>

            <div class="description">
              {{ posts[0].description }}
            </div>
            <v-divider :thickness="1" class="my-4" color="#6A6A6A"></v-divider>
            <div class="bottom-actions d-flex justify-space-between">
              <Button2 :name="getCategoryName(posts[0].category)" />
              <v-btn
                class="text-none read-more px-2 py-3"
                append-icon="mdi-arrow-right"
                variant="text"
                size="x-large"
                :to="'post/article_' + posts[0].id"
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
      display: -webkit-box;
      -webkit-line-clamp: 6;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    .read-more {
      font-size: 16px;
      color: rgba(34, 34, 34, 1);
      font-weight: 500;
    }
  }
}
</style>
