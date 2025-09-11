
<template>
  <footer class="border-t bg-gray-50">
    <div class="mx-auto max-w-7xl px-4 py-10 grid gap-8 sm:grid-cols-3">
      <div>
        <div class="flex items-center gap-2">
          <img src="/favicon.svg" alt="logo" class="h-8 w-8" />
          <span class="font-semibold">HearingCare</span>
        </div>
        <p class="mt-3 text-sm text-gray-600">Demo website built with Nuxt 3 + Tailwind.</p>
      </div>
      <div>
        <h3 class="font-semibold">Explore</h3>
        <ul class="mt-3 space-y-1 text-sm">
          <li><NuxtLink to="/hearing-aids/hearing-aids" class="hover:text-brand-600">Hearing Aids</NuxtLink></li>
          <li><NuxtLink to="/hearing-loss/hearing-loss" class="hover:text-brand-600">Hearing Loss</NuxtLink></li>
          <li><NuxtLink to="/tinnitus/tinnitus" class="hover:text-brand-600">Tinnitus</NuxtLink></li>
          <li><NuxtLink to="/support/support" class="hover:text-brand-600">Support</NuxtLink></li>
        </ul>
      </div>
      <div>
        <h3 class="font-semibold">Contact</h3>
        <ul class="mt-3 space-y-1 text-sm">
          <li>Email: hello@example.com</li>
          <li>Phone: +1 (555) 123-4567</li>
          <li>Mon–Fri: 9:00–18:00</li>
        </ul>
      </div>
    </div>
    <div class="border-t py-4 text-center text-xs text-gray-500">
      © {{ new Date().getFullYear() }} HearingCare. Demo purposes only.
    </div>
  </footer>
</template>
