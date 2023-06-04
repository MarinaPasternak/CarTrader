<template>
  <div>
    <div class="mt-32 flex">
      <CarSideBar></CarSideBar>
      <NuxtPage></NuxtPage>
    </div>
  </div>
</template>

<script>
import { useUtilities } from "~~/composables/useUtilities";
export default {
  methods: {
    setHead() {
      const { capitalizeFirstLetter } = useUtilities();

      useHead({
        title: `${
          this.$route.params.make
            ? capitalizeFirstLetter(this.$route.params.make)
            : "Cars"
        } in ${capitalizeFirstLetter(this.$route.params.city)}`,
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
