
<template>
  <header class="header border-b">
    <div class="nav-container header__container max-w-7xl mx-auto px-4">
      <div class="header__inner flex items-center justify-between gap-4 py-3">
        <NuxtLink to="/" target="_top" class="flex items-center gap-2">
          <img class="header__logo h-8" src="/assets/images//logo/logo-starkey.svg" alt="logo" />
          <span class="sr-only">Home</span>
        </NuxtLink>

        <button
          class="burger md:hidden"
          :aria-expanded="isMobileOpen ? 'true' : 'false'"
          aria-controls="main-nav"
          @click="isMobileOpen = !isMobileOpen"
        >
          <span></span><span></span><span></span>
        </button>

        <div id="main-nav" class="header__inner-menu hidden md:block" :class="{ 'is-open block': isMobileOpen }">
          <ul class="nav flex flex-col md:flex-row md:items-center gap-3 md:gap-6">
            <li>
              <NuxtLink class="nav__link mobile_active" to="/online-hearing-test/online-hearing-test">
                Online Hearing Test
              </NuxtLink>
            </li>
            <li>
              <a class="nav__link mobile_active" href="https://maps.app.goo.gl/ELr5DsMD1iXiWEPm9" target="_blank" rel="noopener">
                Find Provider
              </a>
            </li>

            <li class="nav__item--has-dropdown relative">
              <button class="nav__link flex items-center gap-1" @click="togglePanel('aids')">
                <span>Hearing Aids</span><span class="nav__link-arrow"> &or; </span>
              </button>
              <NuxtLink class="nav__link mobile_link md:hidden" to="/hearing-aids/hearing-aids">Hearing Aids</NuxtLink>
            </li>

            <li class="nav__item--has-dropdown relative">
              <button class="nav__link flex items-center gap-1" @click="togglePanel('loss')">
                <span>Hearing Loss</span><span class="nav__link-arrow"> &or; </span>
              </button>
              <NuxtLink class="nav__link mobile_link md:hidden" to="/hearing-loss/hearing-loss">Hearing Loss</NuxtLink>
            </li>

            <li><NuxtLink class="nav__link" to="/tinnitus/tinnitus">Tinnitus</NuxtLink></li>
            <li><NuxtLink class="nav__link" to="/support/support">Support</NuxtLink></li>
          </ul>

          <div class="header__btns mt-3 md:mt-0 flex items-center gap-3">
            <NuxtLink class="header__btn online_hearing_test rounded border px-3 py-1.5" to="/online-hearing-test/online-hearing-test">
              Online Hearing Test
            </NuxtLink>
            <a class="header__btn find_provider rounded border px-3 py-1.5" href="https://maps.app.goo.gl/ELr5DsMD1iXiWEPm9" target="_blank" rel="noopener">
              Find Provider
            </a>
          </div>
        </div>
      </div>
    </div>
  </header>

  <div class="header__hearing-aids" v-show="isAidsOpen">
    <div class="nav-container hearing-aids-container max-w-7xl mx-auto px-4 py-6 border-b">
      <div class="header__hearing grid md:grid-cols-2 gap-6">
        <div class="hearing__nav">
          <ul class="hearing__nav-list grid sm:grid-cols-2 gap-2">
            <li><NuxtLink class="hearing__nav-link" to="/hearing-aids/hearing-aids">Hearing Aids</NuxtLink></li>
            <li><NuxtLink class="hearing__nav-link" to="/rechargeable/rechargeable">Rechargeable</NuxtLink></li>
            <li><NuxtLink class="hearing__nav-link" to="/waterproof/waterproof">Waterproof</NuxtLink></li>
            <li><NuxtLink class="hearing__nav-link" to="/bluetooth/bluetooth">Bluetooth</NuxtLink></li>
            <li><NuxtLink class="hearing__nav-link" to="/apps/apps">Apps</NuxtLink></li>
            <li><NuxtLink class="hearing__nav-link" to="/accessories/accessories">Accessories</NuxtLink></li>
            <li><NuxtLink class="hearing__nav-link" to="/batteries/batteries">Batteries</NuxtLink></li>
            <li><NuxtLink class="hearing__nav-link" to="/costs-financing/costs-financing">Costs & Financing</NuxtLink></li>
            <li><NuxtLink class="hearing__nav-link" to="/reviews/reviews">Reviews</NuxtLink></li>
          </ul>
        </div>
        <div class="hearing-quiz">
          <p class="hearing-quiz-desc text-sm text-gray-600">Hearing Aid Finder</p>
          <h2 class="hearing-quiz-title text-2xl font-semibold">Which hearing aid is right for you?</h2>
          <NuxtLink class="hearing-quiz-btn inline-block mt-3 rounded border px-3 py-1.5" to="/hearing-aid-finder/hearing-aid-finder">
            Take the quiz
          </NuxtLink>
        </div>
      </div>
      <img class="header__hearing-aids-img mt-6 max-h-48" src="/assets/images/hearingAids-img/hearing-aids.png" alt="Hearing aids" />
    </div>
  </div>

  <div class="header__hearing-loss" v-show="isLossOpen">
    <div class="nav-container hearing-aids-container max-w-7xl mx-auto px-4 py-6 border-b">
      <div class="header__hearing grid md:grid-cols-2 gap-6">
        <div class="hearing__nav">
          <ul class="hearing__nav-list grid sm:grid-cols-2 gap-2">
            <li><NuxtLink class="hearing__nav-link" to="/hearing-loss/hearing-loss">Hearing Loss</NuxtLink></li>
            <li><NuxtLink class="hearing__nav-link" to="/types-causes/types-causes">Types & Causes</NuxtLink></li>
            <li><NuxtLink class="hearing__nav-link" to="/symptoms/symptoms">Symptoms</NuxtLink></li>
            <li><NuxtLink class="hearing__nav-link" to="/prevention/prevention">Prevention</NuxtLink></li>
            <li><NuxtLink class="hearing__nav-link" to="/treatment/treatment">Treatment</NuxtLink></li>
            <li><NuxtLink class="hearing__nav-link" to="/reasons-to-get-help/reasons-to-get-help">Reasons to get help</NuxtLink></li>
            <li><NuxtLink class="hearing__nav-link" to="/help-a-loved-one/help-a-loved-one">Help a loved one</NuxtLink></li>
          </ul>
        </div>
        <div class="hearing-quiz">
          <p class="hearing-quiz-desc text-sm text-gray-600">Free guide</p>
          <h2 class="hearing-quiz-title text-2xl font-semibold">5 steps to better hearing</h2>
          <a class="hearing-quiz-btn inline-block mt-3 rounded border px-3 py-1.5"
             href="https://cdn.mediavalet.com/usil/starkeyhearingtech/93s3CAyMgUCKSdl5eZit_g/M_xgfAi020uwlJmibtjFbA/Original/5%20Steps%20to%20Better%20Hearing%20-%20Starkey.pdf"
             target="_blank" rel="noopener" download>
            Get free guide
          </a>
        </div>
      </div>
      <img class="header__hearing-loss-img mt-6 max-h-48" src="/assets/images/hearingLoss-img/hearing-loss.png" alt="Hearing loss" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isMobileOpen = ref(false)
const isAidsOpen = ref(false)
const isLossOpen = ref(false)
function togglePanel(which: 'aids' | 'loss') {
  if (which === 'aids') {
    isAidsOpen.value = !isAidsOpen.value
    if (isAidsOpen.value) isLossOpen.value = false
  } else {
    isLossOpen.value = !isLossOpen.value
    if (isLossOpen.value) isAidsOpen.value = false
  }
}
</script>
