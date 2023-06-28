<template>
  <div class="col-md-5 offset-md-1 mt-2 w-[100%]">
    <label for="" class="text-cyan-500 mb-1 text-sm">Image*</label>
    <form class="mt-2">
      <div class="form-group">
        <div class="relative">
          <input
            type="file"
            accept="image/*"
            class="opacity-0 absolute cursor-pointer"
            @change="onImageUpload"
          />
          <span class="border cursor-pointer p-2" @click="browseFiles"
            >Browser File</span
          >
        </div>
        <div class="border p-2 mt-3 w-56" v-if="previewImage">
          <img :src="previewImage" class="img-fluid" />
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { ref, defineEmits } from "vue";

export default {
  emits: ["changeInput"],
  setup(_, { emit }) {
    const image = ref({
      preview: null,
      file: null,
    });

    const onImageUpload = (event) => {
      const input = event.target;
      if (input.files) {
        const reader = new FileReader();
        reader.onload = (e) => {
          image.value.preview = e.target.result;
        };
        image.value.file = input.files[0];
        reader.readAsDataURL(input.files[0]);
        emit("changeInput", input.files[0], "image");
      }
    };

    const browseFiles = () => {
      const input = document.createElement("input");
      input.type = "file";
      input.accept = "image/*";
      input.addEventListener("change", onImageUpload);
      input.click();
    };

    return {
      image,
      onImageUpload,
      browseFiles,
    };
  },
};
</script>