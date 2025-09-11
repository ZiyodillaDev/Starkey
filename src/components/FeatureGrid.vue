
<script setup lang="ts">
const features = [
  { title: 'Natural sound', desc: 'Advanced processing for clarity in noise.' },
  { title: 'All-day comfort', desc: 'Featherlight designs with ergonomic fit.' },
  { title: 'Seamless connectivity', desc: 'Stream calls and music with ease.' },
  { title: 'Personalized fit', desc: 'Tailored tips and adjustments.' },
]
</script>
<template>
  <section class="mx-auto max-w-7xl px-4 py-16">
    <h2 class="text-2xl sm:text-3xl font-semibold">Why choose HearingCare</h2>
    <div class="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      <article v-for="(f,i) in features" :key="i" class="rounded-2xl border p-5 hover:shadow-sm">
        <div class="h-10 w-10 rounded-full bg-brand-100 mb-3"></div>
        <h3 class="font-semibold">{{ f.title }}</h3>
        <p class="mt-2 text-sm text-gray-600">{{ f.desc }}</p>
      </article>
    </div>
  </section>
</template>
