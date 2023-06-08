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
        middleware: [
          function (to, from) {
            const user = useSupabaseUser();
            if (user.value) {
              return;
            } else {
              return navigateTo("/login");
            }
          },
        ],
      });
    },
  },
  created() {
    this.setHead();
  },
};
</script>