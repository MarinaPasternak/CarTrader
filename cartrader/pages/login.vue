<template>
  <div class="mt-10">
    <section class="h-screen">
      <div class="container h-full px-6 py-24">
        <div
          class="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between"
        >
          <!-- Left column container with background-->
          <div class="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
            <img
              src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
              class="w-full"
              alt="Phone image"
            />
          </div>
          <!-- Right column container with form -->
          <div class="md:w-8/12 lg:ml-6 lg:w-5/12">
            <h1 class="text-5xl font-bold mb-7 text-blue-400">Log In</h1>
            <!-- Divider -->
            <div
              class="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300"
            ></div>

            <!-- Social login buttons -->
            <a
              class="mb-3 flex w-full items-center justify-center rounded bg-primary px-7 pb-2.5 pt-3 text-center text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
              style="background-color: #3b5998"
              href="#!"
              role="button"
              data-te-ripple-init
              data-te-ripple-color="light"
              @click="logIn"
            >
              <!-- Facebook -->
              Continue with Google
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  methods: {
    setPageMeta() {
      definePageMeta({
        layout: "custom",
      });
    },
    logIn() {
      const supabase = useSupabaseClient();
      const { error } = supabase.auth.signInWithOAuth({
        provider: "google",
      });
    },
  },
  created() {
    this.setPageMeta();
  },
};
</script>

<style scoped></style>
