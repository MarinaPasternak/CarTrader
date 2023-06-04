<template>
  <div>
    <div class="w-full">
      <CarCard v-for="car in allCars" :key="car.id" :car="car"></CarCard>
    </div>
  </div>
</template>

<script>
import { useCars } from "~~/composables/useCars";
export default {
  computed: {
    allCars() {
      const { cars } = useCars();

      return cars;
    },
  },
};
</script>

<style scoped></style>
