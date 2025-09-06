<template>
     <footer class="bg-black text-white py-12">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div class="md:col-span-2">
                         <div class="bg-white text-black px-4 py-2 rounded-lg inline-block mb-4">
                              <span class="font-medium">Dev Portfolio</span>
                         </div>
                         <p class="text-gray-300 mb-4">
                              Full-stack developer passionate about creating elegant, user-friendly applications 
                              with clean code and modern technologies.
                         </p>
                         <div class="flex gap-x-4">
                              <a
                              href="https://github.com"
                              target="_blank"
                              rel="noopener noreferrer"
                              class="text-gray-300 hover:text-white transition-colors"
                              >
                              {{ $t('github') }}
                              </a>
                              <a
                              href="https://linkedin.com"
                              target="_blank"
                              rel="noopener noreferrer"
                              class="text-gray-300 hover:text-white transition-colors"
                              >
                              {{ $t('linkedin') }}
                              </a>
                         </div>
                    </div>
               
                    <div>
                         <h3 class="font-medium mb-4">{{ $t('Quick_Links') }}</h3>
                         <div class="space-y-2">
                              <NuxtLinkLocale v-for="item in config.tabs"
                              @click="changePage(item.name)" :to="item.route"
                              :key="item.name" class="block text-gray-300 hover:text-white transition-colors">
                              {{ $t(item.name) }}
                              </NuxtLinkLocale>
                         </div>
                    </div>

                    <div>
                         <h3 class="font-medium mb-4">{{ $t('Contact') }}</h3>
                         <div class="space-y-2 text-gray-300">
                              <p>john.developer@email.com</p>
                              <p>+1 (555) 123-4567</p>
                              <p>San Francisco, CA</p>
                         </div>
                    </div>
               </div>
               
               <div class="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                    <p>&copy; 2024 John Developer. All rights reserved.</p>
               </div>
          </div>
     </footer>
</template>
<script setup>
const config = useConfig();

const changePage = (name) => {
    store.currentTab = name;
    window.scrollTo(0, 0);}
</script>