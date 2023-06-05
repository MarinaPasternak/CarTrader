<template>
  <div>
    <div class="shadow border w-64 mr-10 z-30 h-[190px]">
      <div class="p-5 flex justify-between relative cursor-pointer border-b">
        <h3 @click="updateModal('location')">Location</h3>
        <h3 class="text-blue-400 capitalize">{{ $route.params.city }}</h3>
        <div
          class="absolute border shadow left-56 p-5 top-1 -m-1 bg-white z-10"
          v-if="modal.location"
        >
          <input type="text" class="border p-1 rounded" v-model="city" />
          <button
            class="bg-blue-400 w-full mt-2 rounded text-white p-1"
            @click="onChangeLocation()"
          >
            Apply
          </button>
        </div>
      </div>

      <div class="p-5 flex justify-between relative cursor-pointer border-b">
        <h3>Make</h3>
        <h3 class="text-blue-400 capitalize">Toyota</h3>
      </div>

      <div class="p-5 flex justify-between relative cursor-pointer border-b">
        <h3>Price</h3>
        <h3 class="text-blue-400 capitalize"></h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      modal: {
        make: false,
        location: false,
        price: false,
      },
      city: "",
    };
  },
  methods: {
    onChangeLocation() {
      if (!isNaN(parseInt(this.city))) {
        throw createError({
          statusCode: 400,
          message: "Invalid city format",
        });
      }

      this.updateModal("location");

      if (this.city.length > 0) {
        navigateTo(`/city/${this.city}/car/${this.$route.params.make}`);
      }

      this.city = "";
    },
    updateModal(key) {
      this.modal[key] = !this.modal[key];
    },
  },
};
</script>

<style scoped></style>
