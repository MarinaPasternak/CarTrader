<template>
  <div>
    <CarCards :cars="cars"></CarCards>
  </div>
</template>

<script>
import useFetchCars from "~~/composables/useFetchCars";

export default {
  data() {
    return {
      cars: null,
    };
  },
  methods: {
    async getFilteredCars() {
      this.cars = await useFetchCars(this.$route.params.city, {
        minPrice: this.$route.query.minPrice,
        maxPrice: this.$route.query.maxPrice,
        make: this.$route.params.make,
      });
    },
  },
  created() {
    this.getFilteredCars();
  },
};
</script>

<style scoped></style>
