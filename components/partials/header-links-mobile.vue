<template>
     <div class="md:hidden" v-if="isMenuOpen">
          <div class="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
          <NuxtLinkLocale v-for="(item, index) in store.tabs" :key="index" :to="item.route" @click="changePage(item.name)" 
          class="block w-full px-3 py-2 rounded-md transition-colors"
          :class="{'bg-black text-white': store.currentTab.toLowerCase() == item.name.toLowerCase(),
                    'text-gray-600 hover:bg-gray-100': store.currentTab.toLowerCase() != item.name.toLowerCase()}"
          >
               {{ $t(item.name) }}
          </NuxtLinkLocale>

          <div class="flex items-center gap-x-4 px-3 py-2 border-t border-gray-200 mt-4">
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
          </div>
          </div>
     </div>
</template>
<script setup>
import {LanguageIcon} from '@heroicons/vue/24/outline';

defineProps({
     isMenuOpen: Boolean
});
const store = useConfig();
const self = getCurrentInstance();
const swichPath = useSwitchLocalePath();
const isOpenDropdownTranslation = ref(false);
const languages = store.languages;

const changeLang = (code) => {
     const newPath = swichPath(code);
     navigateTo(newPath);
     store.enableLanguage = code;
     self.emit('close');
}

const changePage = (name) => {
    store.currentTab = name;
     self.emit('close');
}


</script>