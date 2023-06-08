<template>
  <div class="rounded shadow mt-20">
    <CarMessageCard />
    <CarMessageCard />
    <CarMessageCard />
    <CarMessageCard />
  </div>
</template>

<script>
export default {
  methods: {
    setHead() {
      definePageMeta({
        layout: "custom",
        middleware: ["auth"],
      });
    },
  },
  created() {
    this.setHead();
  },
};
</script>