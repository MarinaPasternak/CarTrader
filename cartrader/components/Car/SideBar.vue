<template>
  <div>
    <div class="shadow border w-64 mr-10 z-30 h-[190px]">
      <!--Location-->
      <div class="p-5 flex justify-between relative cursor-pointer border-b">
        <h3>Location</h3>
        <h3 class="text-blue-400 capitalize" @click="updateModal('location')">
          {{ $route.params.city }}
        </h3>
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
      <!--Location-->
      <!--Make-->
      <div class="p-5 flex justify-between relative cursor-pointer border-b">
        <h3>Make</h3>
        <h3 class="text-blue-400 capitalize" @click="updateModal('make')">
          {{ $route.params.make || "any" }}
        </h3>
        <div
          class="absolute border shadow left-56 p-5 top-1 -m-1 bg-white w-[600px] flex justify-between flex-wrap z-30"
          v-if="modal.make"
        >
          <h4
            v-for="make in allMakes"
            :key="make"
            class="w-1/3"
            @click="onChangeMake(make)"
          >
            {{ make }}
          </h4>
        </div>
      </div>
      <!--Make-->
      <!--Price-->
      <div class="p-5 flex justify-between relative cursor-pointer border-b">
        <h3>Price</h3>
        <h3 class="text-blue-400 capitalize" @click="updateModal('price')">
          {{ priceRangeText }}
        </h3>
        <div
          class="absolute border shadow left-56 p-5 top-1 -m-1 bg-white w-[600px] flex justify-between flex-wrap z-30"
          v-if="modal.price"
        >
          <input
            class="border p-1 rounded"
            type="number"
            :class="{ 'border-red-500': priceError }"
            placeholder="Min"
            v-model="priceRange.min"
          />
          <input
            class="border p-1 rounded"
            :class="{ 'border-red-500': priceError }"
            type="number"
            placeholder="Max"
            v-model="priceRange.max"
          />
          <button
            class="bg-blue-400 w-full mt-2 rounded text-white p-1"
            @click="onChangePrice"
          >
            Apply
          </button>
          <p class="text-red-500" v-if="priceError">{{ priceErrorMessage }}</p>
        </div>
      </div>
      <!--Price-->
    </div>
  </div>
</template>

<script>
import { useMakes } from "~~/composables/useMake";
export default {
  data() {
    return {
      modal: {
        make: false,
        location: false,
        price: false,
      },
      priceRange: {
        min: null,
        max: null,
      },
      priceError: false,
      priceErrorMessage: "",
      city: "",
    };
  },
  computed: {
    allMakes() {
      const { makes } = useMakes();
      return makes;
    },
    priceRangeText() {
      const minPrice = parseInt(this.$route.query.minPrice);
      const maxPrice = parseInt(this.$route.query.maxPrice);

      if (!minPrice && !maxPrice) {
        return "any";
      } else if (!minPrice && maxPrice) {
        return `< $${maxPrice}`;
      } else if (minPrice && !maxPrice) {
        return `$${minPrice} >`;
      } else {
        return `$${minPrice}-$${maxPrice}`;
      }
    },
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
    onChangeMake(make) {
      this.updateModal("make");
      navigateTo(`/city/${this.$route.params.city}/car/${make}`);
    },
    onChangePrice() {
      this.priceError = false;
      this.priceErrorMessage = "";

      if (this.priceRange.min && this.priceRange.max) {
        if (this.priceRange.min > this.priceRange.max) {
          this.priceError = true;
          this.priceErrorMessage = "Invalid price range.";
          return;
        } else {
          this.updateModal("price");
        }
      }

      this.$router.push({
        query: {
          minPrice: this.priceRange.min,
          maxPrice: this.priceRange.max,
        },
      });
    },
    updateModal(key) {
      this.modal[key] = !this.modal[key];
    },
  },
};
</script>

<style scoped></style>
