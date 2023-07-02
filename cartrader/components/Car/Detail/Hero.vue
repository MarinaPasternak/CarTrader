<template>
  <div>
    <div class="mt-10">
      <NuxtImg :src="imageURL" class="w-full" :alt="car.name" />
      <h1 class="mt-10 text-4xl">{{ car.name }}</h1>
      <div
        class="text-slate-500 flex text-lg mt-3 border-b pb-5 justify-between"
      >
        <div class="flex">
          <p class="mr-2">{{ car.numberOfSeats }} seats</p>
          <p class="mr-2">|</p>
          <p class="mr-2">{{ car.miles }} miles</p>
        </div>
        <div>
          <p class="font-bold text-2xl">${{ car.price }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["car"],
  computed: {
    imageURL() {
      return `https://wcawhpkxzhesddyoafuk.supabase.co/storage/v1/object/public/images/${this.car.image}`;
    },
  },
};
</script>

<style scoped></style>
