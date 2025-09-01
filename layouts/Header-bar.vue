<template>
    <nav :class="[isDark ? 'bg-dark-lighter/80' : 'bg-light-darker/80']" class="fixed w-full backdrop-blur-sm z-50">
      <div class="container mx-auto px-4 py-4">
        <div class="flex items-center justify-between">
          <NuxtLinkLocale to="/" class="text-2xl font-bold text-primary">Fatimah 🌙 </NuxtLinkLocale>
          <div class="hidden md:flex items-center gap-6">
            <NuxtLinkLocale to="/" class="hover:text-primary transition-colors">{{ $t("Home") }}</NuxtLinkLocale>
            <NuxtLinkLocale to="/projects" class="hover:text-primary transition-colors">{{ $t('Projects') }}</NuxtLinkLocale>
            <NuxtLinkLocale to="/blogs" class="hover:text-primary transition-colors">{{ $t('Blogs') }}</NuxtLinkLocale>
            <NuxtLinkLocale to="/contact-us" class="hover:text-primary transition-colors">{{ $t('Contact') }}</NuxtLinkLocale>
            <button class="relative" @click="isOpenDropdownTranslation = !isOpenDropdownTranslation">
              <LanguageIcon class="w-5" />
              <div v-motion-pop-visible v-if="isOpenDropdownTranslation" class="absolute top-8 shadow-lg w-max rounded-md right-0 bg-white">
                <NuxtLink @click="changeLang(lang.code)" v-for="lang in languages" :key="lang.code" class="block py-2 px-4 transition-all hover:bg-slate-200 rounded-md">
                    {{ lang.name }}
                </NuxtLink>
              </div>
            </button>
            <button @click="$emit('theme-controller', !isDark)" class="p-2 rounded-lg hover:bg-primary/10 transition-colors">
              <svg v-if="isDark" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
              </svg>
              <svg v-else fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
              </svg>
            </button>
          </div>
          <!-- Mobile menu button -->
          <button @click="isMenuOpen = !isMenuOpen" class="md:hidden p-2 rounded-lg hover:bg-primary/10 transition-colors">
            <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path v-if="!isMenuOpen" stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <!-- Mobile menu -->
        <div v-show="isMenuOpen" class="md:hidden mt-4 space-y-4">
          <NuxtLinkLocale to="/" class="block hover:text-primary transition-colors" @click="isMenuOpen = false">Home</NuxtLinkLocale>
          <NuxtLinkLocale to="/projects" class="block hover:text-primary transition-colors" @click="isMenuOpen = false">Projects</NuxtLinkLocale>
          <NuxtLinkLocale to="/contact-us" class="block hover:text-primary transition-colors" @click="isMenuOpen = false">Contact</NuxtLinkLocale>
          <button @click="$emit('theme-controller', !isDark)" class="p-2 rounded-lg hover:bg-primary/10 transition-colors">
            <svg v-if="isDark" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
            </svg>
            <svg v-else fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
            </svg>
          </button>
          <button class="relative" @click="isOpenDropdownTranslation = !isOpenDropdownTranslation">
            <LanguageIcon class="w-5" />
            <div v-motion-pop-visible v-if="isOpenDropdownTranslation" class="absolute top-8 shadow-lg w-max rounded-md md:right-0 bg-white">
              <NuxtLink @click="changeLang(lang.code)" v-for="lang in languages" :key="lang.code" class="block py-2 px-4 transition-all hover:bg-slate-200 rounded-md">
                  {{ lang.name }}
              </NuxtLink>
            </div>
          </button>
        </div>
      </div>
    </nav>
</template>

<script setup>
import { LanguageIcon } from '@heroicons/vue/24/outline';

defineProps(['isDark']);
const swichPath = useSwitchLocalePath();
const store = useConfig()
const isMenuOpen = ref(false);
const isOpenDropdownTranslation = ref(false);
const languages = store.languages;

const changeLang = (code) => {
  const newPath = swichPath(code);
  navigateTo(newPath);
  store.enableLanguage = code;
  isMenuOpen.value = false;
}
</script>