import { defineStore } from "pinia";

export const useBlogStore = defineStore("blog-store", {
  state: () => ({
    categories: [] as any[],
    posts: [],
  }),

  actions: {
    setCategories(cateogires: any[]) {
      this.categories = [...this.categories, ...cateogires];
    },
    async fetchPosts() {
      const supabase = useSupabaseClient();
      try {
        const { data, error } = await supabase
          .from("Posts")
          .select()
          .order("created_at", { ascending: false });

        if (error) {
          throw error;
        }

        this.posts = [...this.posts, ...data];
      } catch (err) {
        console.error("Error fetching posts:", err);
      }
    },
  },
});
