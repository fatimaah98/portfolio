<template>
    <div class="container mx-auto p-7">
        <div class="h-80 mb-10">
            <img :src="blogStore.blogcontent?.cover" alt="" class="w-full h-full object-cover rounded-lg">
        </div>
        <div v-html="blogStore.blogcontent?.content"></div>
    </div>
</template>
<script setup>
const blogStore = useBlogs();
const route = useRoute()
await blogStore.getBlogBySlug(route.params.slug);
</script>