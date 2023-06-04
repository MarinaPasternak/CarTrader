<template>
  <div>
    <CarDetailHero></CarDetailHero>
    <CarDetailAttributes></CarDetailAttributes>
    <CarDetailContact></CarDetailContact>
  </div>
</template>

<script>
import NavBar from "../../components/NavBar.vue";
import { useUtilities } from "~~/composables/useUtilities";
export default {
  components: { NavBar },
  methods: {
    setHead() {
      const { capitalizeFirstLetter } = useUtilities();

      useHead({
        title: `${capitalizeFirstLetter(this.$route.params.name)}`,
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
