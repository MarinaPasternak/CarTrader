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
import { useCars } from "~~/composables/useCars";
export default {
  components: { NavBar },
  computed: {
    car() {
      const { cars } = useCars();
      const carID = parseInt(this.$route.params.id);

      const foundedCar = cars.find((car) => {
        return car.id === carID;
      });

      if (!foundedCar) {
        this.throwError();
      }

      return foundedCar;
    },
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
  },
  created() {
    this.setHead();
  },
};
</script>

<style scoped></style>
