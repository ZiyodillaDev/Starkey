
<script setup lang="ts">
defineProps<{ title: string; desc: string; href?: string }>()
</script>
<template>
  <article class="rounded-2xl border overflow-hidden hover:shadow-sm">
    <div class="h-44 w-full bg-gray-100 flex items-center justify-center">Image</div>
    <div class="p-5">
      <h3 class="font-semibold">{{ title }}</h3>
      <p class="mt-2 text-sm text-gray-600">{{ desc }}</p>
      <NuxtLink :to="href || '/pages/hearing-aids/hearing-aids'" class="mt-4 inline-block text-brand-700 hover:underline">Learn more →</NuxtLink>
    </div>
  </article>
</template>
