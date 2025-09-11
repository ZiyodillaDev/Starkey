
<template>
  <div class="min-h-dvh flex flex-col bg-white text-gray-900">
    <AppHeader />
    <main class="flex-1">
      <slot />
    </main>
    <SiteFooter />
  </div>
</template>
<script setup lang="ts">
import AppHeader from '../components/AppHeader.vue'
import SiteFooter from '../components/SiteFooter.vue'
</script>
