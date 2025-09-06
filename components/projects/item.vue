<template>
     <div class="overflow-hidden border-gray-200 hover:border-black transition-colors bg-white bg-card text-card-foreground flex flex-col gap-6 rounded-xl border">
          <div class="aspect-video bg-gray-100 relative overflow-hidden">
               <img :src="project.cover"
               :alt="project.title"
               :title="project.title"
               class="w-full h-full object-cover"
               />
          </div>
          
          <div class="p-6">
               <h3 class="text-xl font-medium text-black mb-2">{{project.title}}</h3>
               <p class="text-gray-600 mb-4 line-clamp-2">{{project.summary}}</p>

               <div class="flex flex-wrap gap-2 mb-4">
                    <Badge v-for="tech in project.tags" :key="tech" variant="outline" class="border-gray-300 text-gray-600">
                         {{ tech }}
                    </Badge>
               </div>

               <div class="flex items-center justify-between">
                    <Button
                    variant="outline"
                    class="border-black text-black hover:bg-black hover:text-white"
                    >
                    View Details
                    </Button>
               
                    <div class="flex space-x-2">
                         <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              class="p-2 text-gray-600 hover:text-black transition-colors"
                         >
                              <ExternalLink size={16} />
                         </a>
                         <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              class="p-2 text-gray-600 hover:text-black transition-colors"
                         >
                              <IconsGithub />
                         </a>
                    </div>
               </div>
          </div>
     </div>
</template>
<script setup>
import { defineProps } from 'vue';
import Badge from '../partials/badge.vue';

const props = defineProps({
    project: {
        type: Object,
        required: true
    }
});
</script>