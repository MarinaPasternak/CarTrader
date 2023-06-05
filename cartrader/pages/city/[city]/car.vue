<template>
  <div>
    <div class="mt-32 flex">
      <NuxtErrorBoundary>
        <CarSideBar></CarSideBar>
        <NuxtPage></NuxtPage>
        <template #error="{ error }">
          <div class="text-center mx-auto flex flex-col items-center">
            <h1 class="text-7xl text-blue-400">Sorry, something went wrong</h1>
            <code class="mt-7 text-4xl">{{ error }}</code>
            <button
              class="w-fit rounded mt-7 test-2xl bg-blue-400 px-7 py-4 text-white"
              @click="error.value = null"
            >
              Go Back
            </button>
          </div>
        </template>
      </NuxtErrorBoundary>
    </div>
  </div>
</template>

<script>
import { useUtilities } from "~~/composables/useUtilities";
export default {
  methods: {
    setHead() {
      const { capitalizeFirstLetter } = useUtilities();

      useHead({
        title: `${
          this.$route.params.make
            ? capitalizeFirstLetter(this.$route.params.make)
            : "Cars"
        } in ${capitalizeFirstLetter(this.$route.params.city)}`,
      });

      definePageMeta({
        layout: "custom",
      });
    },
  },
  created() {
    this.setHead();
  },
};
</script>

<style scoped></style>
