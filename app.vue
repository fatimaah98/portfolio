<template>
    <div :class="[isDark ? 'bg-dark text-white' : 'bg-light text-dark', `lang-${locale}`]" class="min-h-screen">
        <HeaderBar :is-dark="isDark" @themeController="(payload) => store.isDark = payload"/>
        <main class="pt-20">
            <NuxtPage />
        </main>
        <footer class="p-7 border-t border-slate-500 text-center">
          <p style="unicode-bidi: plaintext;">© 2025 Fatimaah. All rights reserved. Designed and developed with ❤️ by Fatimaah.</p>
          <p>{{ store.appVersion }}</p>
        </footer>
    </div>
</template>

<script setup>
import HeaderBar from './layouts/Header-bar.vue'

const store = useConfig();
const isDark = computed(() => store.isDark);
const {locale, localeProperties} = useI18n()

// Initialize theme from local storage
onMounted(() => {
  store.getThemeMode
})

// Save theme preference
watch(isDark, (newValue) => {
  localStorage.setItem('theme', newValue ? 'dark' : 'light')
})

useHead({
    titleTemplate: (title) => {
        return  title ? `${title} | Fatimah Developer` : 'Fatimah Developer';
    },
    htmlAttrs: {
        lang: () => locale,
        dir: () => localeProperties.value.dir
    }
})

</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>