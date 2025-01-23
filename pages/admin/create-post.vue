<script setup>
import { storeToRefs } from "pinia";

const supabase = useSupabaseClient();
const store = useBlogStore();
const { categories } = storeToRefs(store);

const title = ref("");
const selectedCategory = ref("");
const description = ref("");

const createPost = async () => {
  try {
    const { id } = selectedCategory.value;
    const insertPost = {
      title: title.value,
      category: selectedCategory.value,
      description: description.value,
    };
    const { data, error } = await supabase.from("Posts").insert(insertPost);
    title.value = "";
    selectedCategory.value = "";
    description.value = "";
  } catch (error) {
    console.log("Post insert error: ", error);
  }
};

const itemProps = (item) => {
  return {
    title: item.name,
    subtitle: item.department,
  };
};

definePageMeta({
  middleware: ["auth"],
});
</script>

<template>
  <v-container>
    <h5 class="text-h5 font-weight-bold pb-2 text-center">Create Article</h5>
    <v-sheet class="mx-auto pt-12" width="500">
      <v-form fast-fail @submit.prevent="createPost()">
        <v-text-field
          v-model="title"
          variant="outlined"
          label="Title"
        ></v-text-field>

        <v-select
          v-model="selectedCategory"
          variant="outlined"
          :items="categories"
          label="Select Category"
          :item-props="itemProps"
        ></v-select>

        <v-textarea
          v-model="description"
          clearable
          variant="outlined"
          label="Description"
        ></v-textarea>

        <v-btn
          class="mt-2 py-7"
          color="primary"
          density="comfortable"
          type="submit"
          block
          >Post</v-btn
        >
      </v-form>
    </v-sheet>
  </v-container>
</template>
