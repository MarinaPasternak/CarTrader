<template>
  <div>
    <CarHero></CarHero>
  </div>
</template>

<script>
export default {
  methods: {
    setHead() {
      useHead({
        title: "CarTrader",
      });
    },
  },
  created() {
    this.setHead();
  },
};
</script>

<style scoped></style>
