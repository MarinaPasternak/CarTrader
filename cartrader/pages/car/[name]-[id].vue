<template>
  <div>
    <nav-bar></nav-bar>
    <div
      class="mx-auto mt-4 max-w-7xl space-y-4 px-4 xs:px-8 sm:px-10 lg:px-16 pb-16 w-3/5"
    >
      <CarDetailHero></CarDetailHero>
      <CarDetailAttributes></CarDetailAttributes>
      <CarDetailContact></CarDetailContact>
    </div>
  </div>
</template>

<script>
import NavBar from "../../components/NavBar.vue";
export default {
  components: { NavBar },
};
</script>

<style scoped></style>
