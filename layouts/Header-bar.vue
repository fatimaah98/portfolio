<template>
    <nav class="bg-white border-b border-black/10 sticky top-0 z-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center h-16">
                <div  class="cursor-pointer">
                    <div class="bg-black text-white px-4 py-2 rounded-lg">
                        <!-- ? logo -->
                        <span class="font-medium">Dev Portfolio </span> 
                    </div>
                </div>

                <PartialsHeaderLinksDesktop />

                <div class="md:hidden">
                    <button class="text-gray-600 hover:text-black transition-colors" @click="isMenuOpen = !isMenuOpen" aria-label="Toggle menu">
                        <component :is="isMenuOpen ? XMarkIcon : Bars3Icon" class="w-6 h-6" /> 
                    </button>
                </div>
            </div>
            <PartialsHeaderLinksMobile :isMenuOpen="isMenuOpen" @close="isMenuOpen = false" />
        </div>
    </nav>
</template>

<script setup>
import { XMarkIcon, Bars3Icon } from '@heroicons/vue/24/outline';
defineProps(['isDark']);
const isMenuOpen = ref(false);
</script>