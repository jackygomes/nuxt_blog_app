<script setup>
import { storeToRefs } from "pinia";

const supabase = useSupabaseClient();
const store = useBlogStore();
const { categories } = storeToRefs(store);

const title = ref("");
const selectedCategory = ref(null);
const description = ref("");
const imageFile = ref(null);
const alert = ref(false);

const createPost = async () => {
  let uploadedFilePath = "";
  const timeStamp = Date.now() - 5 * 60 * 1000;
  try {
    const imageName = imageFile.value.name.split(" ");
    const filePath = `post-image/${timeStamp}_${imageName.join("_")}`;

    if (!imageFile.value) return;
    const { data, error } = await supabase.storage
      .from("nuxt_blog_app_storage")
      .upload(filePath, imageFile.value);

    if (data) {
      const { data } = supabase.storage
        .from("nuxt_blog_app_storage")
        .getPublicUrl(filePath);

      uploadedFilePath = data.publicUrl;
    }
  } catch (error) {
    console.log("Post Image Upload error: ", error);
  }
  try {
    const insertPost = {
      title: title.value,
      category: selectedCategory.value.id,
      description: description.value,
      imageUrl: uploadedFilePath,
    };
    const { data, error } = await supabase.from("Posts").insert(insertPost);
    title.value = "";
    selectedCategory.value = null;
    description.value = "";
    imageFile.value = null;
    alert.value = true;
    setTimeout(() => {
      alert.value = false;
    }, [3000]);
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

const InputRules = {
  fileUpload: [
    (value) => {
      return (
        !value ||
        !value.length ||
        value[0].size < 4000000 ||
        "Image size should be less than 4 MB!"
      );
    },
  ],
};

definePageMeta({
  middleware: ["auth"],
});
</script>

<template>
  <v-container>
    <h5 class="text-h5 font-weight-bold pb-2 text-center">Create Article</h5>
    <v-sheet class="mx-auto pt-12" width="500">
      <v-alert
        v-if="alert"
        class="mb-4"
        title="Posted Successfully"
        type="success"
        variant="tonal"
        border="start"
      ></v-alert>
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

        <v-file-input
          v-model="imageFile"
          :rules="InputRules.fileUpload"
          accept="image/png, image/jpeg, image/bmp"
          label="Upload Image"
          placeholder="Upload Image"
          prepend-icon="mdi-camera"
          variant="outlined"
        ></v-file-input>

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
