<template>
  <div class="flex flex-col w-[48%] mt-2">
    <label for="" class="text-cyan-500 mb-1 text-sm">{{ title }}</label>
    <input
      type="text"
      class="p-2 border w-100 rounded"
      :placeholder="placeholder"
      v-model="inputValue"
      :name="name"
      @input="handleChange"
    />
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    name: String,
    placeholder: String,
  },
  data() {
    return {
      inputValue: "",
    };
  },
  methods: {
    handleChange() {
      this.$emit("change-input", this.inputValue, this.name);
    },
  },
};
</script>