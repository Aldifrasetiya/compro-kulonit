<template>
  <div class="relative w-full overflow-hidden bg-white dark:bg-black min-h-screen flex items-center justify-center pt-32 pb-20 md:pt-40">
    
    <!-- Background Decor -->
    <div class="absolute top-0 left-0 w-full h-full pointer-events-none -z-10 overflow-hidden">
      <div class="absolute top-1/4 left-1/2 -translate-x-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-primary rounded-full mix-blend-screen filter blur-[100px] opacity-15 dark:opacity-20"></div>
    </div>

    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center justify-center text-center">
      
      <!-- Subtle Pulsing Visual -->
      <div class="relative w-24 h-24 mb-10 mx-auto flex items-center justify-center">
         <div class="absolute inset-0 bg-primary/20 dark:bg-primary/30 rounded-full animate-ping"></div>
         <div class="relative w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white shadow-[0_0_30px_rgba(85,0,255,0.6)]">
           <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
         </div>
      </div>

      <!-- Title & Subtitle -->
      <h1 class="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-tight mb-6">
        Akan Segera <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Hadir</span>
      </h1>
      
      <p class="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed mb-12">
        Kami sedang menyiapkan sesuatu yang luar biasa. Ikuti sosial media kami untuk informasi lebih lanjut dan jadilah yang pertama tahu saat kami meluncur!
      </p>

      <!-- Social Row -->
      <div class="flex items-center justify-center space-x-6 mb-12">
        <a href="https://instagram.com/kulonit.id" target="_blank" aria-label="Instagram" class="w-12 h-12 rounded-full border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#0a0a0a] flex items-center justify-center text-gray-500 hover:text-primary hover:border-primary transition-all duration-300 shadow-sm hover:shadow-[0_0_15px_rgba(85,0,255,0.3)]">
          <!-- Instagram Icon -->
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
        </a>
        <a href="https://linkedin.com/company/kulonit" target="_blank" aria-label="LinkedIn" class="w-12 h-12 rounded-full border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#0a0a0a] flex items-center justify-center text-gray-500 hover:text-primary hover:border-primary transition-all duration-300 shadow-sm hover:shadow-[0_0_15px_rgba(85,0,255,0.3)]">
          <!-- LinkedIn Icon -->
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
        </a>
      </div>

      <!-- Action Button -->
      <NuxtLink to="/" class="inline-flex items-center px-8 py-3.5 text-base font-bold text-gray-900 dark:text-white transition-all duration-300 rounded-full border-2 border-primary hover:bg-black/5 dark:hover:bg-primary/20 text-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
        Kembali ke Beranda
      </NuxtLink>

    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'Coming Soon - Kulonit',
  meta: [
    { name: 'description', content: 'Fitur ini akan segera hadir. Nantikan update terbaru dari Kulonit.' }
  ]
})
</script>
