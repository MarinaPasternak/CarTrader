<template>
  <div>
    <nav-bar></nav-bar>
    <slot></slot>
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
export default {
  components: { NavBar },
};
</script>

<style scoped></style>
