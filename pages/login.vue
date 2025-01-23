<template>
  <v-sheet class="mx-auto pt-12" width="400">
    <v-form fast-fail @submit.prevent="login()">
      <v-text-field
        variant="outlined"
        v-model="email"
        label="Email"
      ></v-text-field>

      <v-text-field
        variant="outlined"
        v-model="password"
        label="Password"
      ></v-text-field>

      <v-btn
        class="mt-2 py-7"
        color="primary"
        density="comfortable"
        type="submit"
        block
        >Login</v-btn
      >
    </v-form>
  </v-sheet>
</template>

<script setup>
const email = ref("");
const password = ref("");
const supabase = useSupabaseClient();

const login = async () => {
  const { user, error } = await supabase.auth.signInWithPassword({
    email: email.value,
    password: password.value,
  });

  navigateTo("/");
};
</script>
