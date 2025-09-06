<template>
    <nav class="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center h-16">
                <div class="cursor-pointer">
                    <h2 class="text-primary">Alex Chen</h2>
                </div>
                <div class="hidden md:flex space-x-8">
                <button class="px-3 py-2 transition-colors text-primary border-b-2 border-primary">
                    {{ $t('Home') }}
                </button>
                <button class="px-3 py-2 transition-colors text-muted-foreground hover:text-foreground">
                    {{ $t('Projects') }}
                </button>
                <button class="px-3 py-2 transition-colors text-muted-foreground hover:text-foreground">
                    {{ $t('Blogs') }}
                </button>
                <button class="px-3 py-2 transition-colors text-muted-foreground hover:text-foreground">
                    {{ $t('Services') }}
                </button>
                <button class="px-3 py-2 transition-colors text-muted-foreground hover:text-foreground">
                    {{ $t('Contact') }}
                </button>
                </div>
                <div class="md:hidden">
                    <button class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 size-9 rounded-md">
                        <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="lucide lucide-menu h-6 w-6"
                        aria-hidden="true"
                        >
                        <path d="M4 12h16"></path>
                        <path d="M4 18h16"></path>
                        <path d="M4 6h16"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </nav>
</template>
<script setup>
</script>