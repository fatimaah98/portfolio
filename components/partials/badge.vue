<template>
     <div :class="`${variants[variant]} ${className}`">
          <slot />
     </div>
</template>
<script setup>
defineProps({
     variant: {
          type: String,
          default: 'default'
     },
     className: String
})

const variants = {
     default:
     "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
     secondary:
     "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
     destructive:
     "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
     outline:
     "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
}
</script>