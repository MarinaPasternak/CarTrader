<template>
  <div>
    <CarCard></CarCard>
  </div>
</template>

<script>
export default {
  methods: {
    setHead() {
      useHead({
        title: `${this.capitalizeFirstLetter(this.$route.params.name)}`,
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
