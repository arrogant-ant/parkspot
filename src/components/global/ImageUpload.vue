<template>
  <div class="upload-container">
    <h2>Upload Images</h2>
    <!-- Dropzone -->
    <div
      class="dropzone"
      @dragover.prevent
      @drop.prevent="handleDrop"
    >
      <p>Drag & Drop images here or click to select</p>
      <input type="file" accept="image/*" multiple @change="handleFileChange" />
    </div>

    <!-- Preview -->
    <div class="preview">
      <div v-for="(img, index) in imagePreviews" :key="index" class="preview-img">
        <img :src="img" alt="Image preview" />
      </div>
    </div>

    <!-- Upload Button -->
    <button @click="uploadImages" :disabled="!images.length">
      Upload {{ images.length }} Image(s)
    </button>
  </div>
</template>

<script>
export default {
  name: "ImageUpload",
  data() {
    return {
      images: [],
      imagePreviews: [],
    };
  },
  methods: {
    handleDrop(e) {
      const files = Array.from(e.dataTransfer.files);
      this.processFiles(files);
    },
    handleFileChange(e) {
      const files = Array.from(e.target.files);
      this.processFiles(files);
    },
    processFiles(files) {
      files.forEach((file) => {
        if (file.type.startsWith("image/")) {
          this.images.push(file);
          const reader = new FileReader();
          reader.onload = (e) => {
            this.imagePreviews.push(e.target.result);
          };
          reader.readAsDataURL(file);
        }
      });
    },
    uploadImages() {
      // Replace this mock function with real API upload logic
      alert(`${this.images.length} image(s) uploaded!`);
      console.log("Uploading...", this.images);
      // Clear after upload
      this.images = [];
      this.imagePreviews = [];
    },
  },
};
</script>

<style scoped>
.upload-container {
  max-width: 400px;
  margin: auto;
  text-align: center;
}
.dropzone {
  border: 2px dashed var(--secondary-color);
  padding: 30px;
  margin: 20px 0;
  position: relative;
  cursor: pointer;
}
.dropzone input[type="file"] {
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  cursor: pointer;
}
.preview {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.preview-img {
  margin: 10px;
}
.preview-img img {
  width: 100px;
  height: 100px;
  object-fit: cover;
}
button {
  padding: 10px 20px;
  background-color: #0085ad;
  color: var(--parkspot-black);
  border: none;
  cursor: pointer;
}
button:disabled {
  background-color: var(--primary-color);
  cursor: not-allowed;
}
</style>
