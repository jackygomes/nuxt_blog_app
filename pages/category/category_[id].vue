<script setup>
import { useRoute } from "#app";

const supabase = useSupabaseClient();

const route = useRoute();
const categoryId = route.params.id;
const articles = ref([]);
const categoryInfo = ref({});

const fetchArticlesByCategory = async (id) => {
  const { data, error } = await supabase
    .from("Posts")
    .select()
    .eq("category", categoryId);

  if (data) {
    articles.value = data;
    return;
  }
};
const fetchCategoryInfo = async () => {
  const { data, error } = await supabase
    .from("Categories")
    .select("*")
    .eq("id", categoryId)
    .single();

  if (data) {
    categoryInfo.value = data;
    return;
  }
};
onMounted(() => {
  fetchCategoryInfo();
  fetchArticlesByCategory();
});
</script>

<template>
  <div class="mainContentSection">
    <h5 v-if="articles.length > 0" class="text-h5 font-weight-bold pt-12 pb-12">
      {{ categoryInfo.name }} Articles
    </h5>
    <v-row>
      <v-col cols="4" v-for="item in articles">
        <ArticleCard :article="item" />
      </v-col>
    </v-row>
    <h5
      v-if="articles.length === 0"
      class="text-h5 font-weight-bold pt-12 pb-12"
    >
      Sorry! No article available.
    </h5>
  </div>
</template>
