<template>
  <div v-if="car">
    <CarDetailHero :car="car"></CarDetailHero>
    <CarDetailAttributes :features="car.features"></CarDetailAttributes>
    <CarDetailDescription :description="car.description"></CarDetailDescription>
    <CarDetailContact></CarDetailContact>
  </div>
</template>

<script>
import NavBar from "../../components/NavBar.vue";
import { useUtilities } from "~~/composables/useUtilities";
import useFetchCar from "~~/composables/useFetchCar";
export default {
  components: { NavBar },
  data() {
    return {
      car: null,
    };
  },
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
    throwError() {
      throw createError({
        statusCode: 404,
        message: `Car with id of ${this.$route.params.id} doesn't exist`,
      });
    },
    async getCar() {
      const { data: car } = await useFetchCar(this.$route.params.id);
      this.car = car;
    },
  },
  created() {
    this.setHead();
    this.getCar();
  },
};
</script>

<style scoped></style>
