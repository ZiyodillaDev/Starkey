<template>
  <div>
    <HeroSection />
    <section class="mx-auto max-w-7xl px-4 py-16">
      <h2 class="text-2xl sm:text-3xl font-semibold">Featured solutions</h2>
      <div class="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <ProductCard
          title="Invisible Fit"
          desc="Discreet, in-canal design for natural sound."
          href="/pages/hearing-aids/hearing-aids#invisible"
        />
        <ProductCard
          title="Behind-the-Ear"
          desc="Powerful performance with comfortable wear."
          href="/pages/hearing-aids/hearing-aids#bte"
        />
        <ProductCard
          title="Rechargeable"
          desc="All-day battery with fast, reliable charging."
          href="/pages/hearing-aids/hearing-aids#recharge"
        />
      </div>
    </section>
    <FeatureGrid />
    <CTASection />
  </div>
</template>
<script setup lang="ts">
import HeroSection from "../components/HeroSection.vue";
import ProductCard from "../components/ProductCard.vue";
import FeatureGrid from "../components/FeatureGrid.vue";
import CTASection from "../components/CTASection.vue";
</script>
