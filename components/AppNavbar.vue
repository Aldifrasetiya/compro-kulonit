<template>
  <header class="fixed top-4 sm:top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl z-50 group">
    
    <!-- Rotating Glow Animation -->
    <div 
      class="absolute inset-[-2px] rounded-full z-0 overflow-hidden pointer-events-none transition-opacity duration-500"
      :class="isMenuOpen ? 'opacity-100' : 'opacity-0 lg:group-hover:opacity-100'"
    >
      <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] aspect-square animate-spin-slow bg-[conic-gradient(from_0deg,transparent_0_340deg,#5500FF_360deg)]"></div>
    </div>

    <!-- The Floating Glassmorphism Pill -->
    <div class="relative z-10 w-full bg-white/80 dark:bg-[#0a0a0a]/80 backdrop-blur-xl border border-gray-200 dark:border-primary/40 rounded-full px-4 sm:px-6 lg:px-8 shadow-2xl">
      <div class="flex items-center justify-between h-16 sm:h-20">
        
        <!-- Left: Logo -->
        <div class="flex-shrink-0">
          <NuxtLink to="/" class="hover:opacity-90 transition-opacity block pl-1 sm:pl-2">
            <img src="/Logo/logo_kulonit_v2_putih.png" alt="Kulonit" class="h-15 md:h-15 w-auto dark:block hidden">
            <img src="/Logo/logo_kulonit_v2_biru.png" alt="Kulonit" class="h-15 md:h-15 w-auto dark:hidden block">
          </NuxtLink>
        </div>

        <!-- Center: Navigation (Desktop) -->
        <nav class="hidden md:flex space-x-8">
          <NuxtLink 
            v-for="link in navLinks" 
            :key="link.name" 
            :to="link.href" 
            class="text-sm font-semibold text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors"
          >
            {{ link.name }}
          </NuxtLink>
        </nav>

        <!-- Right: Actions -->
        <div class="flex items-center space-x-3 sm:space-x-4 pr-1 sm:pr-2">
          <!-- Theme Toggle -->
          <button 
            @click="toggleTheme" 
            class="p-2 rounded-full text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 transition-colors focus:outline-none" 
            aria-label="Toggle Theme"
          >
            <client-only>
              <!-- Sun Icon (visible if dark mode) -->
              <svg v-if="colorMode.value === 'dark'" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
              </svg>
              <!-- Moon Icon (visible if light mode) -->
              <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            </client-only>
          </button>

          <!-- CTA Button -->
          <NuxtLink 
            to="/digital-products" 
            class="hidden lg:inline-flex items-center justify-center px-6 py-2.5 text-sm font-bold text-white transition-all duration-300 rounded-full bg-gradient-kulonit hover:shadow-[0_0_20px_rgba(85,0,255,0.5)] transform hover:-translate-y-0.5"
          >
            Mulai Belajar
          </NuxtLink>

          <!-- Mobile Hamburger -->
          <button 
            @click="isMenuOpen = !isMenuOpen" 
            class="md:hidden p-2 rounded-full text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 transition-colors focus:outline-none"
          >
            <svg v-if="!isMenuOpen" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu Container attached directly under the Pill -->
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="-translate-y-4 opacity-0 scale-95"
      enter-to-class="translate-y-0 opacity-100 scale-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="translate-y-0 opacity-100 scale-100"
      leave-to-class="-translate-y-4 opacity-0 scale-95"
    >
      <div v-show="isMenuOpen" class="md:hidden absolute top-[calc(100%+12px)] left-0 w-full bg-white/95 dark:bg-[#0a0a0a]/95 backdrop-blur-xl border border-gray-200 dark:border-white/10 shadow-2xl rounded-3xl overflow-hidden p-3 z-40">
        <nav class="flex flex-col space-y-2 pb-2">
          <NuxtLink 
            v-for="link in navLinks" 
            :key="link.name" 
            :to="link.href" 
            @click="isMenuOpen = false"
            class="block px-4 py-3 text-base font-semibold text-gray-700 hover:text-primary hover:bg-gray-100 dark:text-gray-300 dark:hover:text-primary dark:hover:bg-gray-800/50 rounded-xl transition-colors"
          >
            {{ link.name }}
          </NuxtLink>
          <div class="px-2 pt-3 mt-2 border-t border-gray-100 dark:border-gray-800">
            <NuxtLink 
              to="/courses" 
              @click="isMenuOpen = false"
              class="flex items-center justify-center w-full px-6 py-3.5 text-base font-bold text-white transition-all duration-300 rounded-full bg-gradient-kulonit hover:shadow-[0_0_20px_rgba(85,0,255,0.5)]"
            >
              Mulai Belajar
            </NuxtLink>
          </div>
        </nav>
      </div>
    </Transition>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)
const colorMode = useColorMode()

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Digital Products', href: '/digital-products' },
  { name: 'Events', href: '/events' },
  { name: 'Services', href: '/services' },
]

const toggleTheme = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}
</script>

<style scoped>
.animate-spin-slow {
  animation: magic-spin 3s linear infinite;
}
@keyframes magic-spin {
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}
</style>
