<template>
    <div class="blog-card">
        <div class="img-wrapper blog-image">
            <AtomImage
                :alt="'image'"
                :src="blog.thumbnail"
                :ratio="'5by4'"
                class="image-container"
            ></AtomImage>
        </div>
        <div class="blog-content">
            <div class="blog-title"
                @click="onBlogClick(blog.id)"
            >
                <h2 :variation="'large'">
                    {{ blog.title }}
                    
                </h2>
                <p>by {{ blog.author }}</p>
            </div>

            <div class="blog-desc">
                <p>{{ blog.desc }}</p>
                <time :datetime="blog.dateTime">{{ blog.time }} </time>
                <span>
                    <button 
                        class="btn-text" 
                        @click="onBlogClick(blog.id)">Read more...
                    </button>
                </span>           
            </div>
        </div>
    </div>
</template>

<script>
import AtomImage from '../atoms/AtomImage.vue';
export default {
    name: 'MoleculeBlogCard',
    props: {
        blog: {
            type: Object,
        },
    },
    components: {
        AtomImage,
    },
    emits:['onBtnClick'],
    methods: {
        onBlogClick(data) {
            this.$emit('onBtnClick', data);
        },
    },
};
</script>

<style lang="scss" scoped>
.blog-card {
    width: 374px;
    min-height: 379px;
    border-radius: var(--border-default);
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
        rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;

    @media only screen and (max-width: 1024px) {
        width: 374px;
        min-width: 350px;
    }

    .blog-image {
        overflow: hidden;
        height: 189px;
        opacity: 1;
        transition: 0.3s ease-in-out;
        border-top-left-radius: var(--border-default);
        border-top-right-radius: var(--border-default);

        &:hover {
            opacity: 0.5;
        }

        .image-container {
            padding-top: 50%;
        }
    }

    .blog-content {
        padding: 0.75rem;

        .blog-image:hover {
            opacity: 0.5;
        }

        .blog-title {
            margin-bottom: 1rem;

            h2 {
                cursor: pointer;
                font: 1.25rem;
                font-weight: 500;
            }

            p {
                cursor: pointer;
                font: 1rem;
                font-weight: 400;
            }
            &:hover {
                color: var(--secondary-color) ;
            }
        }

        .blog-desc {
            font-size: 1rem;
            font-weight: 400;
            line-height: 24px;
            color: var(--grey-shade);

            time {
                font-size: 0.75rem;
            }
        }
    }
}

.blog-card {
    .img-wrapper.blog-image {
        border-top-left-radius: 45px;
        border-top-right-radius: 45px;
        border-bottom-left-radius: 25px;
        border-bottom-right-radius: 25px;
        padding: 12px;        
    }
}

.blog-card .blog-content .blog-desc .btn-text {
    background-color: #e8faff;
    border-radius: 50px;
    border-style: none;
    color: #1f2e3b;
    cursor: pointer;
    float: right; 
    font-family: 'Poppins', sans-serif;
    padding: 4px 10px;
    
        &:hover {
            background-color: rgb(239, 245, 255);
            color: var(--secondary-color) ;
        }
}
</style>