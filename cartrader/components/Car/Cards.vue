<template>
  <div>
    <div class="w-full">
      <CarCard v-for="car in cars" :key="car.id" :car="car"></CarCard>
    </div>
  </div>
</template>

<script>
export default {
  props: ["cars"],
};
</script>

<style scoped></style>
