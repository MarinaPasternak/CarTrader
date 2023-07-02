<template>
  <div class="rounded shadow mt-20">
    <template v-if="messages && messages.length > 0">
      <CarMessageCard
        v-for="message in messages"
        :key="message.id"
        :message="message"
      />
    </template>
    <template v-else>
      <h1 class="text-3xl text-red-600">No Massages Here</h1>
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {
      messages: null,
    };
  },
  methods: {
    setHead() {
      definePageMeta({
        layout: "custom",
        middleware: ["auth"],
      });
    },
    async getAllMessages() {
      try {
        const response = await fetch(
          `/api/car/listings/${this.$route.params.id}/message`
        );

        if (!response.ok) {
          throw createError({
            statusCode: 400,
            message: "Request was unsuccessful",
          });
        }

        const messages = await response.json();
        this.messages = messages;
      } catch (error) {
        console.error("Error fetching messages:", error.message);
        this.messages = null;
      }
    },
  },
  created() {
    this.setHead();
    this.getAllMessages();
  },
};
</script>