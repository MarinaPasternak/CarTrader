<template>
  <div>
    <div
      class="font-serif w-[1000px] text-2xl rounded-full bg-white flex justify-between overflow-hidden drop-shadow-2xl mx-auto"
    >
      <input
        type="text"
        class="py-3 px-5 w-full text-2xl rounded-full focus:outline-none"
        :class="
          requestError ? 'bg-gradient-to-r from-red-300 to-white-500' : ''
        "
        placeholder="Search by city..."
        v-model="city"
      />
      <button class="bg-sky-500 px-10 text-white" @click="searchCar">
        Search
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      city: "",
      requestError: false,
    };
  },
  methods: {
    searchCar() {
      if (this.city.length > 0) {
        this.requestError = false;
        navigateTo(`/city/${this.city}/car`);
      } else {
        this.requestError = true;
      }
    },
  },
};
</script>

<style scoped></style>
