<template>
  <div>
    <div class="mt-10">
      <div class="flex w-[600px] justify-between">
        <input
          v-model="message.name"
          type="text"
          class="border p-1"
          placeholder="Name"
        />
        <input
          v-model="message.email"
          type="text"
          class="border p-1"
          placeholder="Email"
        />
        <input
          v-model="message.phone"
          type="text"
          class="border p-1"
          placeholder="Phone"
        />
      </div>
      <div class="flex mt-4 w-[600px]">
        <textarea
          v-model="message.message"
          class="border p-1 w-full"
          placeholder="Message"
        ></textarea>
      </div>
      <button
        class="bg-blue-400 text-white px-10 py-3 rounded mt-4"
        :disabled="isButtonDisabled"
        @click="onSubmitHandle"
      >
        Submit
      </button>
      <p v-if="errorMessage" class="text-red-400 mt-10">{{ errorMessage }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: {
        name: "",
        email: "",
        phone: "",
        message: "",
      },
      isButtonDisabled: true,
      errorMessage: null,
    };
  },
  methods: {
    async onSubmitHandle() {
      try {
        const response = await $fetch(
          `/api/car/listings/${this.$route.params.id}/message`,
          {
            method: "post",
            body: this.message,
          }
        );
        navigateTo("/profile/listings");
      } catch (err) {
        this.errorMessage = err.statusMessage;
      }
    },
  },
  watch: {
    message: {
      deep: true,
      handler() {
        const { name, email, phone, message } = this.message;
        this.isButtonDisabled = !name || !email || !phone || !message;
        if (this.isButtonDisabled) {
          this.errorMessage = "Please fill in all fields.";
        } else {
          this.errorMessage = null;
        }
      },
    },
  },
};
</script>

<style scoped></style>
