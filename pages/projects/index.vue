<template>
    <div class="container mx-auto px-4 py-12">
        <h2 class="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center" v-motion-slide-visible-once-bottom>
            {{ $t('my_projects') }}
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8" v-if="projectStore.projects">
            <div
                v-for="(project, index) in projects"
                :key="index"
                :class="[isDark ? 'bg-dark-lighter' : 'bg-light-darker']"
                class="rounded-lg overflow-hidden shadow-lg"
                v-motion-slide-visible-once-bottom
            >
                <img :src="project.cover" :alt="project.title" :title="project.title" class="w-full h-48 object-cover" />
                <div class="p-4 md:p-6">
                    <div>
                        <NuxtLinkLocale :to="`/projects/${project.slug}`" class="flex justify-between">
                            <h3 class="text-lg md:text-xl font-bold mb-2 underline">
                                {{ project.title }}
                            </h3>
                            <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 hover:bg-slate-500 hover:text-slate-50 transition-all rounded-md rtl:rotate-180">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                            </svg>
                        </NuxtLinkLocale>
                    </div>
                    <p :class="[isDark ? 'text-gray-400' : 'text-gray-600']" class="mb-4 text-sm md:text-base">{{ project.summary }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

const store = useConfig();
const projectStore = useProject();
const isDark = computed(() => store.isDark);
await projectStore.getProjects();
const projects = computed(() => projectStore.projects?.filter(item => item.lang == store.enableLanguage));


useSeoMeta({
    ogTitle: 'travel tech project',
    title: 'MY Projects',
})
</script>