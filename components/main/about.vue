<template>
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div class="text-center">
            <div class="mb-8">
                <div class="w-32 h-32 bg-black rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span class="text-white text-4xl font-medium">FN</span>
                </div>
            </div>
            <div v-html="config.description[config.enableLanguage]" class="mb-12"></div>

            <div class="flex justify-center gap-x-6 mb-12">
                <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center gap-x-2 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
                >
                    <IconsLinkedin />
                    <span>{{ $t('linkedin') }}</span>
                </a>
                <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center gap-x-2 border border-black text-black px-6 py-3 rounded-lg hover:bg-black hover:text-white transition-colors"
                >
                    <IconsGithub />
                    <span>{{ $t('github') }}</span>
                </a>
            </div>

            <button class="bg-black text-white hover:bg-gray-800 px-8 py-3 rounded-lg inline-flex items-center gap-x-2 text-lg">
                <span>{{ $t('view_work') }}</span>
                <ArrowRightIcon class="h-5 w-5" />
            </button>
        </div>
    </section>
</template>
<script setup>
import { ArrowRightIcon } from '@heroicons/vue/24/outline';

const config = useConfig();
const enableLang = computed(() => config.enableLanguage);
</script>