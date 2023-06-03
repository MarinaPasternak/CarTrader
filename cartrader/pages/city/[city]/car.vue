<template>
  <div>
    <NavBar></NavBar>
    <div
      class="mx-auto mt-4 max-w-7xl space-y-4 px-4 xs:px-8 sm:px-10 lg:px-16 pb-16 w-3/5"
    >
      <div class="mt-32 flex">
        <CarSideBar></CarSideBar>
        <NuxtPage></NuxtPage>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    setHead() {
      useHead({
        title: `${
          this.$route.params.make
            ? this.capitalizeFirstLetter(this.$route.params.make)
            : "Cars"
        } in ${this.capitalizeFirstLetter(this.$route.params.city)}`,
      });
    },
    capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
  },
  created() {
    this.setHead();
  },
};
</script>

<style scoped></style>
