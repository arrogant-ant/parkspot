<template>
    <TemplateBlogHome
        :blogs="blogs"
        @onBlogClick="onBlogClick"
    ></TemplateBlogHome>
</template>

<script>
import TemplateBlogHome from '../components/templates/TemplateBlogHome.vue';
import { mapGetters } from 'vuex';
import { PAGE_TITLE } from '@/constant/constant';
export default {
    name: 'PageBlogHome',
    components: {
        TemplateBlogHome,
    },
    metaInfo() {
        return {
            title: PAGE_TITLE.BLOG,
            titleTemplate: PAGE_TITLE.TITLE_TEMPLATE + '%s',
        };
    },
    computed: {
        ...mapGetters({
            blogs: 'blog/getAllBlogs',
            getBlogById: 'blog/getBlogById',
        }),
    },
    methods: {
        onBlogClick(id) {
            const blog = this.getBlogById(id);
            this.$router.push({
                name: 'mainBlog',
                params: {
                    id: blog.id,
                },
            });
        },
    },
};
</script>

<style></style>
