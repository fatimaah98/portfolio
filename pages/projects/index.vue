<template>
    <div class="container mx-auto px-4 py-12">
        <h2 class="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center" v-motion-slide-visible-once-bottom>
            {{ $t('my_projects') }}
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <div
                v-for="project in projects"
                :key="project.title"
                :class="[isDark ? 'bg-dark-lighter' : 'bg-light-darker']"
                class="rounded-lg overflow-hidden shadow-lg"
                v-motion-slide-visible-once-bottom
            >
                <img :src="project.image" :alt="project.title" class="w-full h-48 object-cover" />
                <div class="p-4 md:p-6">
                    <div class="flex justify-between">
                        <h3 class="text-lg md:text-xl font-bold mb-2 underline">
                            <nuxt-link :to="project.link" target="_blank">{{ project.title }}</nuxt-link>
                        </h3>
                        <nuxt-link to="/" title="More Info">
                            <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 hover:bg-slate-500 hover:text-slate-50 transition-all rounded-md">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                            </svg>
                        </nuxt-link>
                    </div>
                    <p :class="[isDark ? 'text-gray-400' : 'text-gray-600']" class="mb-4 text-sm md:text-base">{{ project.description }}</p>
                    <div class="flex flex-wrap gap-2">
                        <span
                        v-for="tech in project.technologies"
                        :key="tech"
                        class="bg-primary/20 text-primary px-3 py-1 rounded-full text-xs md:text-sm"
                        >
                        {{ tech }}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import Luxivel from "~/assets/luxivel.png";
import Yadaksadra from "~/assets/yadaksarda.png";

const store = useConfig()
const isDark = computed(() => store.isDark);

const projects = [
  {
    title: 'Luxivel',
    description: 'An international website in the travel sector, offering flight, hotel, package, visa, and tour booking systems.',
    image: Luxivel,
    technologies: ['Vue.js', 'ٔNuxt.js', 'Zod', 'Pinia', 'Tailwind'],
    link: 'https://luxivel.com/'
  },
  {
    title: 'Yadak Sadra',
    description: 'A website for selling car parts.',
    image: Yadaksadra,
    technologies: ['Vue.js', 'ٔNuxt.js', 'Swiper.js', 'Pinia', 'Bootstrap'],
    link: 'https://yadaksadra.com/'
  }
]

useSeoMeta({
    ogTitle: 'travel tech project',
    title: 'MY Projects',
})
</script>