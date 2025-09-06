<template>
     <div class="hidden md:flex items-center gap-x-8">
          <NuxtLinkLocale v-for="(item, index) in store.tabs" :key="index" @click="changePage(item.name)" :to="item.route"
          class="hover:text-black cursor-pointer transition-all duration-300 border-b-2"
          :class="{
               'text-black font-medium border-black': store.currentTab.toLowerCase() == item.name.toLowerCase(),
               'text-gray-600 border-white': store.currentTab.toLowerCase() != item.name.toLowerCase()
          }"
          >
               {{$t(item.name)}}
          </NuxtLinkLocale>

          <div class="flex items-center gap-x-4 ml-8 pl-8 rtl:pr-8 rtl:pl-0 border-l rtl:border-l-0 rtl:border-r border-gray-200">
               <button class="relative" @click="isOpenDropdownTranslation = !isOpenDropdownTranslation">
                    <LanguageIcon class="w-5 text-gray-600 hover:text-black transition-colors" />
                    <div v-motion-pop-visible v-if="isOpenDropdownTranslation" 
                    class="absolute top-8 shadow-lg w-max rounded-md right-0 bg-white">
                         <NuxtLink @click="changeLang(lang.code)" 
                         v-for="lang in languages" :key="lang.code" 
                         class="block py-2 px-4 transition-all hover:bg-slate-200 rounded-md"
                         >
                              {{ lang.name }}
                         </NuxtLink>
                    </div>
               </button>
               <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-gray-600 hover:text-black transition-colors"
               >
                    <IconsGithub />
               </a>
               <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-gray-600 hover:text-black transition-colors"
               >
                    <IconsLinkedin />
               </a>
          </div>
     </div>
</template>
<script setup>
import {LanguageIcon} from '@heroicons/vue/24/outline';

const store = useConfig();
const changePage = (name) => store.currentTab = name;
const swichPath = useSwitchLocalePath();
const isOpenDropdownTranslation = ref(false);
const languages = store.languages;

const changeLang = (code) => {
     const newPath = swichPath(code);
     navigateTo(newPath);
     store.enableLanguage = code;
     isMenuOpen.value = false;
}
</script>