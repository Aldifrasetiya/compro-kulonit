<template>
  <footer class="bg-gray-50 dark:bg-[#0a0a0a] border-t border-gray-200 dark:border-gray-800/50 pt-16 pb-8">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        
        <!-- Column 1: About -->
        <div>
          <NuxtLink to="/" class="text-2xl font-extrabold tracking-tight text-primary mb-4 inline-block">
            <img src="/Logo/logo_kulonit_v2_putih.png" alt="Kulonit" class="h-30 md:h-30 w-auto dark:block hidden">
            <img src="/Logo/logo_kulonit_v2_biru.png" alt="Kulonit" class="h-30 md:h-30 w-auto dark:hidden block">
          </NuxtLink>
          <p class="text-gray-600 dark:text-gray-400 mt-2 leading-relaxed">
            Platform edutech modern untuk membantu Anda belajar pengembangan perangkat lunak, desain UI/UX, dan teknologi terkini dengan materi berkualitas.
          </p>
        </div>

        <!-- Column 2: Quick Links -->
        <div>
          <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-6">Quick Links</h3>
          <ul class="space-y-4">
            <li v-for="link in quickLinks" :key="link.name">
              <NuxtLink :to="link.href" class="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors font-medium">
                {{ link.name }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Column 3: Contact Info -->
        <div>
          <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-6">Contact Info</h3>
          <ul class="space-y-4">
            <li class="flex items-start text-gray-600 dark:text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mr-3 mt-0.5 text-primary flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              <span class="font-medium">kulonitcom@gmail.com</span>
            </li>
            <li class="flex items-start text-gray-600 dark:text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mr-3 mt-0.5 text-primary flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              <span class="font-medium">+62 882 9044 9738</span>
            </li>
            <li class="flex items-start text-gray-600 dark:text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mr-3 mt-0.5 text-primary flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              <span class="font-medium">Jakarta, Indonesia</span>
            </li>
          </ul>
        </div>

      </div>
      
      <!-- Bottom Section -->
      <div class="pt-8 border-t border-gray-200 dark:border-gray-800/50 flex flex-col md:flex-row items-center justify-between">
        <p class="text-sm text-gray-500 dark:text-gray-500 font-medium">
          &copy; 2024 - 2026 Kulonit - All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
const quickLinks = [
  { name: 'Tentang Kami', href: '/about' },
  { name: 'Semua Kelas', href: '/digital-products' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Syarat & Ketentuan', href: '/terms' },
  { name: 'Kebijakan Privasi', href: '/privacy' },
]
</script>
