<template>
    <div class="upload-container">
        <h2>Upload Images</h2>

        <!-- Dropzone -->
        <div
            class="dropzone"
            @dragover.prevent
            @drop.prevent="handleDrop"
            @click="triggerFileInput"
        >
            <p>Drag & Drop PNG/JPEG images here or click to select</p>
            <input
                ref="fileInput"
                type="file"
                accept="image/png,image/jpeg"
                multiple
                @change="handleFileChange"
                style="display: none"
            />
        </div>

        <!-- Preview -->
        <div class="preview">
            <div
                v-for="(img, index) in imagePreviews"
                :key="index"
                class="preview-img"
            >
                <img :src="img" alt="Image preview" />
            </div>
        </div>

        <!-- Upload Button -->
        <button @click="emitImages" :disabled="!images.length">
            Upload {{ images.length }} Image(s)
        </button>
    </div>
</template>

<script>
export default {
    name: 'ImageUpload',
    props: {
        uploadSuccess: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            images: [],
            imagePreviews: [],
            successMessage: 'Images uploaded successfully!',
        };
    },
    watch: {
        uploadSuccess(newVal) {
            if (newVal) {
                this.showSuccessToast();
                // Optionally clear images after successful upload
                this.images = [];
                this.imagePreviews = [];
            }
        },
    },
    methods: {
        triggerFileInput() {
            this.$refs.fileInput.click();
        },
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
                if (file.type === 'image/png' || file.type === 'image/jpeg') {
                    const maxSize = 10 * 1024 * 1024; // 10MB limit
                    if (file.size > maxSize) {
                        this.showErrorToast(
                            `File "${file.name}" exceeds 10MB limit`,
                        );
                        return;
                    }

                    this.images.push(file);
                    const reader = new FileReader();
                    reader.onload = (e) => {
                        this.imagePreviews.push(e.target.result);
                    };
                    reader.readAsDataURL(file);
                } else {
                    this.showErrorToast(`Unsupported file type: ${file.name}`);
                }
            });
        },
        emitImages() {
            this.$emit('upload-images', this.images);
        },
        showSuccessToast() {
            this.$buefy.toast.open({
                message: this.successMessage,
                type: 'is-success',
                duration: 2000,
            });
        },
        showErrorToast(msg) {
            this.$buefy.toast.open({
                message: msg,
                type: 'is-danger',
                duration: 3000,
            });
        },
    },
};
</script>

<style scoped>
.upload-container {
    max-width: 500px;
    margin: 40px auto;
    padding: 20px;
    text-align: center;
    background-color: #f9f9f9;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.upload-container h2 {
    margin-bottom: 20px;
    color: var(--primary-color);
    font-weight: 600;
}

.dropzone {
    border: 2px dashed var(--primary-color);
    padding: 40px 20px;
    margin: 20px 0;
    border-radius: 10px;
    background-color: #fff;
    position: relative;
    cursor: pointer;
    transition:
        background-color 0.3s ease,
        border-color 0.3s ease;
}

.dropzone:hover {
    background-color: #f0faff;
    border-color: var(--primary-color);
}

.dropzone input[type='file'] {
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
    gap: 12px;
    margin: 20px 0;
}

.preview-img {
    position: relative;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s ease;
}

.preview-img:hover {
    transform: scale(1.05);
}

.preview-img img {
    width: 100px;
    height: 100px;
    object-fit: cover;
}

button {
    padding: 12px 24px;
    background-color: var(--primary-color);
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-weight: 600;
    transition: background-color 0.3s ease;
}

button:hover:enabled {
    background-color: var(--primary-color);
}

button:disabled {
    background-color: var(--primary-color);
    cursor: not-allowed;
    opacity: 0.7;
}
</style>
