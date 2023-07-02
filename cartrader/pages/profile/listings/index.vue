<template>
  <div>
    <div class="flex justify-between mt-24 items-center">
      <h1 class="text-6xl text-blue-400">My Listings</h1>
      <NuxtLink
        to="/profile/listings/create"
        class="w-9 h-9 bg-blue-400 flex justify-center items-center rounded-full text-white font-bold cursor-pointer"
        >+</NuxtLink
      >
    </div>
    <div class="shadow rounded p-3 mt-5">
      <CarListingCard
        v-for="listing in listings"
        :key="listing.id"
        :listing="listing"
        @handleDelete="deleteItem"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      listings: [],
      user: null,
    };
  },
  methods: {
    setHead() {
      definePageMeta({
        layout: "custom",
        middleware: ["auth"],
      });
    },
    getUser() {
      this.user = useSupabaseUser();
    },
    async fetchListings() {
      try {
        const response = await fetch(`/api/car/listings/user/${this.user.id}`);
        const data = await response.json();
        this.listings = data;
      } catch (error) {
        console.log(error);
        this.listings = [];
      }
    },
    async deleteItem(listingId) {
      await $fetch(`/api/car/listings/${listingId}`, {
        method: "delete",
      });

      this.listings = this.listings.filter(
        (listing) => listing.id !== listingId
      );
    },
  },
  created() {
    this.setHead();
    this.getUser();
    this.fetchListings();
  },
};
</script>

<style scoped>
</style>