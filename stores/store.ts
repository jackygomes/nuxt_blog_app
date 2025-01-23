import { defineStore } from "pinia";

export const useBlogStore = defineStore("blog-store", {
  state: () => ({
    categories: [] as any[],
    posts: [],
  }),

  getters: {
    getCategories: (state) => {
      return state.categories;
    },
  },

  actions: {
    setCategories(cateogires: any[]) {
      cateogires.map((item, i) => {
        this.categories.push(item);
      });
    },
  },
});
