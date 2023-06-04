<template>
  <div>
    <div class="mr-10 mt-5 border-b pb-5">
      <div
        class="flex text-lg mt-2"
        v-for="attribute in features"
        :key="attribute"
      >
        <p class="rounded text-lime-800 mr-3">✔</p>
        <p>{{ attribute }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["features"],
};
</script>

<style scoped></style>
