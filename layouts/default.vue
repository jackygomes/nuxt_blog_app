<script setup>
const store = useBlogStore();
const { categories, posts } = store;
const supabase = useSupabaseClient();

const getCategories = async () => {
  try {
    const { data, error } = await supabase.from("Categories").select();
    store.setCategories(data);
  } catch (error) {
    console.log("category fetch error:", error);
  }
};

onMounted(() => {
  if (categories.length <= 0) {
    getCategories();
  }
  if (posts.length <= 0) {
    store.fetchPosts();
  }
});
</script>

<template>
  <div class="layoutContainer">
    <LayoutAppHeader />
    <v-container>
      <slot />
    </v-container>
    <LayoutAppFooter />
  </div>
</template>

<style>
html {
  font-family: "Inter";
  color: #222222;
}
</style>
