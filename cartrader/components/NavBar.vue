<template>
  <div>
    <header
      class="sticky top-0 z-50 flex justify-between items-center space-x-1 border-b bg-white p-4 shadow-md"
    >
      <NuxtLink class="text-3xl font-mono" to="/">cartrader</NuxtLink>
      <div v-if="user" class="flex">
        <NuxtLink to="/profile/listings" class="text-2xl text-blue-400 ml-2"
          >profile</NuxtLink
        >
        <p class="cursor-pointer text-2xl text-red-400 ml-10" @click="logOut">
          Log out
        </p>
      </div>
      <NuxtLink v-else to="/login" class="text-2xl text-blue-400"
        >Log In</NuxtLink
      >
    </header>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: null,
    };
  },
  methods: {
    getUser() {
      this.user = useSupabaseUser();
    },
    async logOut() {
      this.user = null;

      const supabase = useSupabaseClient();
      const { error } = await supabase.auth.signOut();

      try {
        await $fetch("/api/_supabase/session", {
          method: "POST",
          body: {
            event: "SIGNED_OUT",
            session: null,
          },
        });
      } catch (error) {
        console.log(error);
      }

      navigateTo("/");
    },
  },
  created() {
    this.getUser();
  },
};
</script>

<style scoped></style>
