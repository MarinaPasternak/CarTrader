export default defineNuxtRouteMiddleware((to, from) => {
  const user = useSupabaseUser();
  if (to.path.includes("profile")) {
    if (user.value) {
      return;
    } else {
      return navigateTo("/login");
    }
  }
});
