<template>
     <section class="bg-gray-50 py-20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-3xl font-medium text-black mb-4">{{ $t('skills') }}</h2>
            <p class="text-lg text-gray-600">{{ $t('skills_description') }}</p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div v-for="skill in skills" :key="skill.name" 
               class="p-8 text-center border border-gray-200 rounded-xl hover:border-black transition-colors bg-white cursor-pointer">
                    <div class="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                         <component :is="skill.icon" class="text-white w-8 h-8" />
                    </div>
                    <h3 class="text-xl font-medium text-black mb-4">{{ skill.name }}</h3>
                    <p class="text-gray-600">{{ skill.description }}</p>
              </div>
          </div>
        </div>
      </section>
</template>
<script setup>
import { CircleStackIcon, CodeBracketSquareIcon } from '@heroicons/vue/24/outline';

const skills = [
    { icon: CodeBracketSquareIcon, name: 'Frontend Development', description: 'React, TypeScript, Tailwind CSS' },
    { icon: CircleStackIcon, name: 'Backend Development', description: 'Node.js, Python, PostgreSQL' },
  ];
</script>