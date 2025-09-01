<template>
    <div class="container mx-auto py-7 px-7">
        <div v-if="project">
            <div class="h-80 mb-8">
                <img :src="project.cover" :alt="project.title" class="h-full w-full object-cover rounded-lg">
            </div>
            <div v-html="project.description"></div>
        </div>
    </div>
</template>
<script setup>
const projectStore = useProject();
const route = useRoute();
const project = computed(() => projectStore.project);
await projectStore.getProjectBySlug(route.params.slug); 

useSeoMeta({
    title: project.value.title,
    ogTitle: project.value.title,
    ogDescription: project.value.summary,
    ogImage: project.value.cover,
    ogImageAlt: project.value.title,
    twitterCard: 'summary_large_image',
    twitterDescription: project.value.summary,
})
</script>