<template>
    <div class="min-h-screen bg-white py-12">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12">
                <h1 class="text-4xl font-medium text-black mb-4">{{ $t('my_projects') }}</h1>
                <p class="text-lg text-gray-600 max-w-2xl mx-auto">
                    {{ $t('my_projects_description') }}
                </p>
            </div>
            <ProjectsFilter />
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <ProjectsItem v-for="project in projects" :key="project.id" :project="project" />
            </div>

            {filteredProjects.length === 0 && (
            <div class="text-center py-12">
                <p class="text-gray-500">No projects found for the selected filter.</p>
            </div>
            )}
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