<template>
    <div class="container mx-auto py-5">
        <h1 class="font-bold text-center mb-8 text-3xl">{{ $t("Blogs") }}</h1>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8" v-if="blogs.length">
            <div
                v-for="(blog, index) in blogs"
                :key="index"
                :class="[isDark ? 'bg-dark-lighter' : 'bg-light-darker']"
                class="rounded-lg overflow-hidden shadow-lg"
                v-motion-slide-visible-once-bottom
            >
                <img :src="blog.cover" :alt="blog.title" :title="blog.title" class="w-full h-48 object-cover" />
                <div class="p-4 md:p-6">
                    <div>
                        <NuxtLinkLocale :to="`/blogs/${blog.slug}`" class="flex justify-between">
                            <h3 class="text-lg md:text-xl font-bold mb-2 underline">
                                {{ blog.title }}
                            </h3>
                            <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 hover:bg-slate-500 hover:text-slate-50 transition-all rounded-md rtl:rotate-180">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                            </svg>
                        </NuxtLinkLocale>
                    </div>
                </div>
            </div>
        </div>
        <div v-else>
            <p>Blog Not Founded</p>
        </div>
    </div>
</template>
<script setup>
const store = useConfig();
const blogStore = useBlogs();
await blogStore.getBlogs();
const blogs = computed(() => blogStore.blogs.filter(blog => blog.lang == store.enableLanguage));
</script>