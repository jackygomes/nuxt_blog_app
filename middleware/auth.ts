export default defineNuxtRouteMiddleware((to) => {
  const user = useSupabaseUser();

  if (!user.value && to.path === "/admin/create-post") {
    navigateTo("/");
  }
  if (user.value && to.path === "/admin/create-post") {
    navigateTo("/admin/create-post");
  }
});
