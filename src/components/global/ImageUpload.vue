<template>
    <div class="upload-container">
        <!-- Dropzone -->
        <div
            class="dropzone"
            @dragover.prevent
            @drop.prevent="handleDrop"
            @click="
                images.length < 4
                    ? triggerFileInput()
                    : showToast('Maximum 4 images allowed.', 'is-danger')
            "
        >
            <p>Drag & Drop PNG/JPEG images here or click to select</p>
            <input
                ref="fileInput"
                type="file"
                accept="image/png,image/jpeg"
                multiple
                @change="handleFileChange"
                hidden
            />
        </div>

        <!-- Preview -->
        <div class="preview">
            <div
                v-for="(img, index) in imagePreviews"
                :key="index"
                class="preview-img"
            >
                <img :src="img" alt="Preview" />
                <button class="delete-btn" @click="deleteImage(index)">
                    <AtomIcon icon="close" />
                </button>
            </div>
        </div>

        <!-- Upload Button -->
        <button @click="emitImages" :disabled="!images.length">
            Upload {{ images.length }} Image(s)
        </button>
    </div>
</template>

<script>
import AtomIcon from '@/components/atoms/AtomIcon.vue';

export default {
    name: 'ImageUpload',
    components: { AtomIcon },
    props: {
        uploadSuccess: { type: Boolean, default: false },
    },
    data() {
        return {
            images: [],
            imagePreviews: [],
        };
    },
    watch: {
        uploadSuccess(newVal) {
            if (newVal) {
                this.showToast('Images uploaded successfully!', 'is-success');
                this.resetImages();
            }
        },
    },
    methods: {
        triggerFileInput() {
            this.$refs.fileInput.click();
        },
        handleDrop(e) {
            this.processFiles(Array.from(e.dataTransfer.files));
        },
        handleFileChange(e) {
            this.processFiles(Array.from(e.target.files));
        },
        processFiles(files) {
            const maxAllowed = 4;
            const remaining = maxAllowed - this.images.length;
            if (remaining <= 0) {
                return this.showToast(
                    `You can upload up to ${maxAllowed} images only.`,
                    'is-danger',
                );
            }
            const validFiles = files.filter(
                (file) =>
                    ['image/png', 'image/jpeg'].includes(file.type) &&
                    file.size <= 10 * 1024 * 1024,
            );
            if (!validFiles.length) {
                return this.showToast(
                    'No valid PNG/JPEG files under 10MB.',
                    'is-danger',
                );
            }
            validFiles.slice(0, remaining).forEach((file) => {
                this.images.push(file);
                const reader = new FileReader();
                reader.onload = (e) => this.imagePreviews.push(e.target.result);
                reader.readAsDataURL(file);
            });
            if (files.length > remaining) {
                this.showToast(
                    `Only ${remaining} more image(s) allowed.`,
                    'is-danger',
                );
            }
        },
        emitImages() {
            this.$emit('upload-images', this.images);
        },
        deleteImage(index) {
            this.images.splice(index, 1);
            this.imagePreviews.splice(index, 1);
        },
        resetImages() {
            this.images = [];
            this.imagePreviews = [];
        },
        showToast(message, type) {
            this.$buefy.toast.open({ message, type, duration: 2500 });
        },
    },
};
</script>

<style scoped>
.upload-container {
    padding: 4px 16px;
    text-align: center;
    background: #fff;
    border-radius: 4px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}

.dropzone {
    border: 2px dashed var(--parkspot-black);
    padding: 2px 16px;
    margin: 2px 0;
    border-radius: 4px;
    background: #fff;
    cursor: pointer;
    transition:
        background-color 0.3s,
        border-color 0.3s;
}

.dropzone:hover {
    background: #f0faff;
}
.preview {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 84x 0;
    gap: 8px; /* Increased gap */
}

.preview-img {
    position: relative;
    overflow: hidden;
    border-radius: 12px;
    background-color: #f9f9f9;
    padding: 4px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
    transition:
        transform 0.2s,
        box-shadow 0.2s;
}

.preview-img:hover {
    transform: scale(1.04);
    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.12); /* Slightly stronger hover effect */
}

.preview-img img {
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 8px;
}

.delete-btn {
    position: absolute;
    top: 4px;
    right: 4px;
    background: rgba(0, 0, 0, 0.6);
    color: #fff;
    border: none;
    border-radius: 100%;
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background 0.1s;
}

.delete-btn:hover {
    background: rgba(255, 0, 0, 0.8);
}

button {
    padding: 4px 8px;
    margin-bottom: 2px;
    background: var(--primary-color);
    color: var(--parkspot-black);
    border: none;
    cursor: pointer;
    font-weight: 600;
    transition: background 0.3s;
    transition: transform 0.2s;
}
button:hover {
    transform: scale(1.04);
}

button:disabled {
    cursor: not-allowed;
    opacity: 0.8;
}
/* Tablet View */
@media (max-width: 768px) {
    .upload-container {
        padding: 12px;
    }

    .preview {
        gap: 10px;
    }

    .preview-img {
        flex: 1 1 80px;
        max-width: 100px;
    }

    .preview-img img {
        width: 80px;
        height: 80px;
    }

    button {
        padding: 6px 12px;
    }
}

/* Mobile View */
@media (max-width: 480px) {
    .dropzone p {
        font-size: 8px;
    }
    .preview {
        gap: 8px;
    }
    .preview-img {
        flex: 1 1 4px;
    }
    .preview-img img {
        width: 50px;
        height: 50px;
    }
    .delete-btn {
        width: 20px;
        height: 20px;
        top: 2px;
        right: 2px;
    }
    button {
        padding: 4px 8px;
        font-size: 8px;
    }
}
</style>
