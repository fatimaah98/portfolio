<template>
  <div class="container mx-auto px-4 py-12">
    <div class="max-w-2xl mx-auto">
      <h2 class="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center" v-motion-slide-visible-once-bottom>
        Get in Touch
      </h2>
      <form @submit.prevent="handleSubmit" class="space-y-4 md:space-y-6 px-4" v-motion-slide-visible-once-bottom>
        <div>
          <label for="email" class="block text-sm font-medium mb-2">Email</label>
          <input
            type="email"
            id="email"
            v-model="form.email"
            :class="[isDark ? 'bg-dark-lighter' : 'bg-light-darker']"
            class="w-full rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary outline-none"
            required
          />
        </div>
        <div>
          <label for="github" class="block text-sm font-medium mb-2">GitHub</label>
          <input
            type="url"
            id="github"
            v-model="form.github"
            :class="[isDark ? 'bg-dark-lighter' : 'bg-light-darker']"
            class="w-full rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary outline-none"
            required
          />
        </div>
        <div>
          <label for="linkedin" class="block text-sm font-medium mb-2">LinkedIn</label>
          <input
            type="url"
            id="linkedin"
            v-model="form.linkedin"
            :class="[isDark ? 'bg-dark-lighter' : 'bg-light-darker']"
            class="w-full rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary outline-none"
            required
          />
        </div>
        <div>
          <label for="telegram" class="block text-sm font-medium mb-2">Telegram</label>
          <input
            type="text"
            id="telegram"
            v-model="form.telegram"
            :class="[isDark ? 'bg-dark-lighter' : 'bg-light-darker']"
            class="w-full rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary outline-none"
            required
          />
        </div>
        <div>
          <label for="message" class="block text-sm font-medium mb-2">Message</label>
          <textarea
            id="message"
            v-model="form.message"
            rows="4"
            :class="[isDark ? 'bg-dark-lighter' : 'bg-light-darker']"
            class="w-full rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary outline-none"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          disabled
          class="w-full bg-primary hover:bg-secondary px-6 py-3 rounded-lg transition-colors text-white cursor-not-allowed"
          title="This service not available"
        >
          Send Message
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
const store = useConfig()
const isDark = computed(() => store.isDark);

const form = reactive({
  email: '',
  github: '',
  linkedin: '',
  telegram: '',
  message: ''
})

const handleSubmit = () => {
  // Handle form submission here
  console.log(form)
}
</script>