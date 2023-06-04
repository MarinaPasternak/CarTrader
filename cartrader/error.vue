<template>
  <div class="flex h-screen justify-center items-center flex-col">
    <h1 class="text-7xl text-blue-400">Oops, something went wrong</h1>
    <h3 class="mt-7 text-4xl">
      <span class="text-blue-400">{{ error.value.statusCode }}</span>
      {{ error.value.message }}
    </h3>
    <button
      class="rounded mt-7 test-2xl bg-blue-400 px-7 py-4 text-white"
      @click="goHomePage"
    >
      Home
    </button>
  </div>
</template>

<script>
export default {
  computed: {
    error() {
      const error = useError();

      return error;
    },
  },
  methods: {
    goHomePage() {
      navigateTo(`/`);
    },
  },
};
</script>

<style lang="scss" scoped></style>
