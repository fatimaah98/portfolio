<template>
     <section class="py-20">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 class="text-3xl font-medium text-black mb-6">
               {{ $t('ready_to_work') }}
          </h2>
          <p class="text-lg text-gray-600 mb-8">
               {{ $t('ready_to_work_description') }}
          </p>
          <NuxtLinkLocale to="/contact-us" class="bg-black text-white hover:bg-gray-800 px-8 py-3 rounded-lg">
               {{ $t('get_touch') }}
          </NuxtLinkLocale>
        </div>
      </section>
</template>