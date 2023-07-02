<template>
  <div class="shadow rounded overflow-hidden flex justify-between mb-4">
    <div class="flex">
      <img :src="imageURL" alt="" class="w-80 mr-3 h-44" />
      <div class="p-3">
        <h1 class="text-2xl">{{ listing.name }}</h1>
        <p class="text-blue-400">${{ listing.price }}</p>
      </div>
    </div>
    <div class="p-3 flex">
      <NuxtLink
        class="text-blue-400 mr-4"
        :to="`/profile/listings/view/${listing.id}`"
        >View</NuxtLink
      >
      <p class="text-red-400 cursor-pointer" @click="handleDeleteClick">
        Delete
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    listing: {
      type: Object,
      required: true,
    },
  },
  computed: {
    imageURL() {
      return `https://wcawhpkxzhesddyoafuk.supabase.co/storage/v1/object/public/images/${this.listing.image}`;
    },
  },
  methods: {
    handleDeleteClick() {
      this.$emit("handleDelete", this.listing.id);
    },
  },
};
</script>
