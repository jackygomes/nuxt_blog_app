<script setup>
// definePageMeta({
//   ssr: true, // Explicitly enable SSR for this page
// });

import { useRoute } from "#app";

const supabase = useSupabaseClient();
const { formatDate } = useDateUtils();

const route = useRoute();
const postId = route.params.id;
const article = ref(null);
const isArticle = ref(true);

const fetchArticle = async (id) => {
  const { data, error } = await supabase
    .from("Posts") // Replace with your table name
    .select("*")
    .eq("id", id)
    .single();

  if (data) {
    article.value = data;
    return;
  }
  isArticle.value = false;
};

onMounted(() => {
  fetchArticle(postId);
});
</script>

<template>
  <div class="wrapper">
    <v-container>
      <div v-if="article">
        <div class="banner">
          <img :src="article.imageUrl" class="w-100" alt="" />
        </div>
        <p class="py-4">{{ formatDate(article.created_at, "long") }}</p>
        <h1 class="pb-4">{{ article.title }}</h1>
        <p>
          {{ article.description }}
        </p>
      </div>
      <h1 v-if="!isArticle">Sorry! No article available.</h1>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  h1 {
    color: rgba(34, 34, 34, 1);
  }
  p {
    color: rgba(34, 34, 34, 0.7);
  }
}
</style>
