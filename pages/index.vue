<template>
    <div class="min-h-screen bg-white">
          <MainAbout />
          <MainSkils />
          <MainGetTouch />
    </div>
</template>

<script setup>
const store = useConfig();
const isDark = computed(() => store.isDark);

await store.getHomeData();

useSeoMeta({
  ogTitle: "Fatimah: Front End Developer",
  ogDescription: "Make nuxt application with PWA",
});
</script>
