<template>
    <div class="min-h-screen">
		<main-about />
      <section class="px-4 sm:px-6 lg:px-8 py-20 bg-muted/30">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-center mb-12">Core Skills</h2>
          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div
              data-slot="card"
              class="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border p-4 text-center hover:shadow-md transition-shadow"
            >
              <span
                data-slot="badge"
                class="inline-flex items-center justify-center rounded-md border px-2 text-xs font-medium whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent bg-secondary text-secondary-foreground [a&amp;]:hover:bg-secondary/90 w-full py-2"
                >JavaScript</span
              >
            </div>
            <div
              data-slot="card"
              class="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border p-4 text-center hover:shadow-md transition-shadow"
            >
              <span
                data-slot="badge"
                class="inline-flex items-center justify-center rounded-md border px-2 text-xs font-medium whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent bg-secondary text-secondary-foreground [a&amp;]:hover:bg-secondary/90 w-full py-2"
                >TypeScript</span
              >
            </div>
            <div
              data-slot="card"
              class="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border p-4 text-center hover:shadow-md transition-shadow"
            >
              <span
                data-slot="badge"
                class="inline-flex items-center justify-center rounded-md border px-2 text-xs font-medium whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent bg-secondary text-secondary-foreground [a&amp;]:hover:bg-secondary/90 w-full py-2"
                >React</span
              >
            </div>
            <div
              data-slot="card"
              class="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border p-4 text-center hover:shadow-md transition-shadow"
            >
              <span
                data-slot="badge"
                class="inline-flex items-center justify-center rounded-md border px-2 text-xs font-medium whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent bg-secondary text-secondary-foreground [a&amp;]:hover:bg-secondary/90 w-full py-2"
                >Node.js</span
              >
            </div>
            <div
              data-slot="card"
              class="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border p-4 text-center hover:shadow-md transition-shadow"
            >
              <span
                data-slot="badge"
                class="inline-flex items-center justify-center rounded-md border px-2 text-xs font-medium whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent bg-secondary text-secondary-foreground [a&amp;]:hover:bg-secondary/90 w-full py-2"
                >Next.js</span
              >
            </div>
            <div
              data-slot="card"
              class="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border p-4 text-center hover:shadow-md transition-shadow"
            >
              <span
                data-slot="badge"
                class="inline-flex items-center justify-center rounded-md border px-2 text-xs font-medium whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent bg-secondary text-secondary-foreground [a&amp;]:hover:bg-secondary/90 w-full py-2"
                >Nuxt.js</span
              >
            </div>
            <div
              data-slot="card"
              class="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border p-4 text-center hover:shadow-md transition-shadow"
            >
              <span
                data-slot="badge"
                class="inline-flex items-center justify-center rounded-md border px-2 text-xs font-medium whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent bg-secondary text-secondary-foreground [a&amp;]:hover:bg-secondary/90 w-full py-2"
                >Python</span
              >
            </div>
            <div
              data-slot="card"
              class="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border p-4 text-center hover:shadow-md transition-shadow"
            >
              <span
                data-slot="badge"
                class="inline-flex items-center justify-center rounded-md border px-2 text-xs font-medium whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent bg-secondary text-secondary-foreground [a&amp;]:hover:bg-secondary/90 w-full py-2"
                >PostgreSQL</span
              >
            </div>
            <div
              data-slot="card"
              class="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border p-4 text-center hover:shadow-md transition-shadow"
            >
              <span
                data-slot="badge"
                class="inline-flex items-center justify-center rounded-md border px-2 text-xs font-medium whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent bg-secondary text-secondary-foreground [a&amp;]:hover:bg-secondary/90 w-full py-2"
                >MongoDB</span
              >
            </div>
            <div
              data-slot="card"
              class="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border p-4 text-center hover:shadow-md transition-shadow"
            >
              <span
                data-slot="badge"
                class="inline-flex items-center justify-center rounded-md border px-2 text-xs font-medium whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent bg-secondary text-secondary-foreground [a&amp;]:hover:bg-secondary/90 w-full py-2"
                >AWS</span
              >
            </div>
            <div
              data-slot="card"
              class="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border p-4 text-center hover:shadow-md transition-shadow"
            >
              <span
                data-slot="badge"
                class="inline-flex items-center justify-center rounded-md border px-2 text-xs font-medium whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent bg-secondary text-secondary-foreground [a&amp;]:hover:bg-secondary/90 w-full py-2"
                >Docker</span
              >
            </div>
            <div
              data-slot="card"
              class="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border p-4 text-center hover:shadow-md transition-shadow"
            >
              <span
                data-slot="badge"
                class="inline-flex items-center justify-center rounded-md border px-2 text-xs font-medium whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent bg-secondary text-secondary-foreground [a&amp;]:hover:bg-secondary/90 w-full py-2"
                >Git</span
              >
            </div>
          </div>
        </div>
      </section>
      <section class="px-4 sm:px-6 lg:px-8 py-20">
        <div class="max-w-6xl mx-auto">
          <div class="grid md:grid-cols-3 gap-8">
            <div
              data-slot="card"
              class="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border p-6 text-center"
            >
              <h3 class="mb-4">50+</h3>
              <p class="text-muted-foreground">Projects Completed</p>
            </div>
            <div
              data-slot="card"
              class="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border p-6 text-center"
            >
              <h3 class="mb-4">5+</h3>
              <p class="text-muted-foreground">Years Experience</p>
            </div>
            <div
              data-slot="card"
              class="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border p-6 text-center"
            >
              <h3 class="mb-4">20+</h3>
              <p class="text-muted-foreground">Happy Clients</p>
            </div>
          </div>
        </div>
      </section>
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
