<template>
  <div>
    <div class="mt-24">
      <h1 class="text-6xl text-blue-400">Create a New Listing</h1>
    </div>
    <div class="shadow rounded p-6 mt-5 flex flex-wrap justify-between">
      <CarAdSelect
        title="Make *"
        :options="makes"
        name="make"
        @change-input="onChangeInput"
      />
      <CarAdInput
        v-for="input in inputs"
        :key="input.id"
        :title="input.title"
        :name="input.name"
        :placeholder="input.placeholder"
        @change-input="onChangeInput"
      />
      <CarAdTextarea
        title="Description *"
        name="description"
        placeholder=""
        @change-input="onChangeInput"
      />
      <CarAdImage @change-input="onChangeInput" class="mb-8" />
      <div class="text-center w-full">
        <button
          :disabled="isButtonDisabled"
          @click="handleSubmit"
          class="bg-blue-400 w-full mt-2 rounded text-white p-3"
        >
          Submit
        </button>
        <p class="mt-3 text-red-400" v-if="error">{{ error }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { useMakes } from "~~/composables/useMake";
export default {
  data() {
    return {
      user: null,
      error: null,
      inputs: [
        {
          id: 1,
          title: "Model *",
          name: "model",
          placeholder: "Civic",
        },
        {
          id: 2,
          title: "Year *",
          name: "year",
          placeholder: "2019",
        },
        {
          id: 3,
          title: "Price *",
          name: "price",
          placeholder: "$0.00",
        },
        {
          id: 4,
          title: "Miles *",
          name: "miles",
          placeholder: "10000",
        },
        {
          id: 5,
          title: "City *",
          name: "city",
          placeholder: "Austin",
        },
        {
          id: 6,
          title: "Number of Seats *",
          name: "seats",
          placeholder: "5",
        },
        {
          id: 7,
          title: "Features *",
          name: "features",
          placeholder: "Leather Interior, No Accidents",
        },
      ],
      info: {
        make: "",
        model: "",
        year: "",
        miles: "",
        price: "",
        city: "",
        seats: "",
        features: "",
        description: "",
        image: "text",
      },
    };
  },
  computed: {
    makes() {
      const { makes } = useMakes();
      return makes;
    },
    isButtonDisabled() {
      for (let key in this.info) {
        if (!this.info[key]) return true;
      }

      return false;
    },
  },
  methods: {
    getUser() {
      this.user = useSupabaseUser();
    },
    setHead() {
      definePageMeta({
        layout: "custom",
        middleware: ["auth"],
      });
    },
    onChangeInput(data, name) {
      this.info[name] = data;
    },
    async handleSubmit() {
      const body = {
        ...this.info,
        features: this.info.features.split(", "),
        numberOfSeats: parseInt(this.info.seats),
        miles: parseInt(this.info.miles),
        price: parseInt(this.info.price),
        year: parseInt(this.info.year),
        name: `${this.info.make} ${this.info.model}`,
        listerId: this.user.id,
      };

      delete body.seats;

      try {
        const response = await $fetch("/api/car/listings", {
          method: "post",
          body,
        });
        this.error = null;
        navigateTo("/profile/listings");
      } catch (error) {
        this.error = "An error occurred. Please try again.";
      }
    },
  },
  created() {
    this.setHead();
    this.getUser();
  },
};
</script>