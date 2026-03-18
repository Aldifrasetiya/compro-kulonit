<template>
  <div class="relative w-full overflow-hidden">
    <!-- Background Gradient Blob -->
    <div class="absolute top-0 left-0 w-full h-full pointer-events-none -z-10 overflow-hidden">
      <div class="absolute top-10 lg:top-1/4 left-1/2 -translate-x-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#5500FF] rounded-full mix-blend-screen filter blur-[100px] opacity-20 dark:opacity-30"></div>
    </div>

    <!-- Hero Section -->
    <section class="relative w-full min-h-screen flex items-center overflow-hidden">
      <!-- Background Image -->
      <img src="/Hero/hero-image-ls.jpeg" alt="Hero Background" class="hidden md:block absolute inset-0 w-full h-full object-cover object-right" onerror="this.style.display='none'" />
      
      <!-- Gradient Overlay (Light mode: White fade, Dark mode: Black fade) -->
      <div class="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent dark:from-black dark:via-black/90 dark:to-transparent z-0"></div>
      
      <!-- Content Container -->
      <div class="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 md:pt-40 md:pb-20">
        <div class="w-full lg:w-3/5 text-center lg:text-left space-y-8">
          <h1 class="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-[1.1]">
            Belajar Skill Digital <br class="hidden sm:block" />
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#5500FF] to-blue-400">
              #diluarkampus
            </span>
          </h1>
          
          <p class="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            Platform edutech dan solusi digital terintegrasi. Tingkatkan skill ngoding-mu atau biarkan kami membangun sistem digital untuk bisnismu.
          </p>
          
          <div class="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
            <NuxtLink to="/digital-products" class="w-full sm:w-auto px-8 py-3.5 text-base font-bold text-white transition-all duration-300 rounded-full bg-gradient-to-r from-[#5500FF] to-blue-600 hover:shadow-[0_0_25px_rgba(85,0,255,0.6)] transform hover:-translate-y-1 text-center">
              Mulai Belajar
            </NuxtLink>
            
            <NuxtLink to="/services" class="w-full sm:w-auto px-8 py-3.5 text-base font-bold text-gray-900 dark:text-white transition-all duration-300 rounded-full border-2 border-primary hover:bg-black/5 dark:hover:bg-primary/20 text-center">
              Lihat Layanan Kami
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Split Identity Section -->
    <section class="container mx-auto px-4 sm:px-6 lg:px-8 py-16 mb-20">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        
        <!-- Left Card (Edutech) -->
        <div class="group relative bg-white dark:bg-[#0a0a0a] rounded-3xl p-8 sm:p-10 border border-gray-100 dark:border-gray-800/80 transition-all duration-300 hover:border-[#5500FF]/50 dark:hover:border-[#5500FF]/50 hover:shadow-[0_8px_30px_rgba(85,0,255,0.15)] overflow-hidden">
          <!-- Subtle background glow on hover -->
          <div class="absolute top-0 right-0 w-32 h-32 bg-[#5500FF]/5 rounded-full blur-2xl group-hover:bg-[#5500FF]/15 transition-colors duration-500"></div>
          
          <div class="w-14 h-14 rounded-2xl bg-[#5500FF]/10 flex items-center justify-center mb-6 text-[#5500FF] group-hover:scale-110 transition-transform duration-300 relative z-10">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
          </div>
          
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 relative z-10">Tingkatkan Skill Digital</h3>
          <p class="text-gray-600 dark:text-gray-400 mb-8 relative z-10 leading-relaxed">
            Digital Products untuk percepat karirmu di dunia IT. Belajar langsung dari praktisi industri dengan kurikulum ter-update.
          </p>
          
          <NuxtLink to="/digital-products" class="inline-flex items-center font-bold text-[#5500FF] hover:text-blue-600 transition-colors relative z-10">
            Mulai Belajar
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </NuxtLink>
        </div>

        <!-- Right Card (Agency) -->
        <div class="group relative bg-white dark:bg-[#0a0a0a] rounded-3xl p-8 sm:p-10 border border-gray-100 dark:border-gray-800/80 transition-all duration-300 hover:border-[#5500FF]/50 dark:hover:border-[#5500FF]/50 hover:shadow-[0_8px_30px_rgba(85,0,255,0.15)] overflow-hidden">
          <!-- Subtle background glow on hover -->
          <div class="absolute top-0 right-0 w-32 h-32 bg-[#5500FF]/5 rounded-full blur-2xl group-hover:bg-[#5500FF]/15 transition-colors duration-500"></div>
          
          <div class="w-14 h-14 rounded-2xl bg-[#5500FF]/10 flex items-center justify-center mb-6 text-[#5500FF] group-hover:scale-110 transition-transform duration-300 relative z-10">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
          </div>
          
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 relative z-10">Solusi Digital Bisnismu</h3>
          <p class="text-gray-600 dark:text-gray-400 mb-8 relative z-10 leading-relaxed">
            Jasa pembuatan website, company profile, dan sistem informasi profesional. Percayakan kebutuhan digital bisnis Anda pada tim ahli kami.
          </p>
          
          <NuxtLink to="/services" class="inline-flex items-center font-bold text-[#5500FF] hover:text-blue-600 transition-colors relative z-10">
            Konsultasi Gratis
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </NuxtLink>
        </div>

      </div>
    </section>

    <!-- Client Logo Slider Section -->
    <section class="container mx-auto py-16 overflow-hidden">
      <!-- Header Updates -->
      <div class="text-center mb-12 px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
          Dipercaya oleh <span class="text-[#5500FF]">Klien Kami</span>
        </h2>
        <p class="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Berbagai bisnis dan instansi telah mempercayakan transformasi digital mereka kepada Kulonit.
        </p>
      </div>

      <!-- Infinite Slider Container -->
      <div class="relative w-full max-w-6xl mx-auto overflow-hidden mt-12" style="-webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent); mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);">
        
        <!-- The Scrolling Track -->
        <div class="flex w-max animate-infinite-slider hover:[animation-play-state:paused]">
          
          <!-- Set 1 (6 Logos) -->
          <div class="w-32 md:w-48 mx-6 md:mx-10 shrink-0 flex items-center justify-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300 ease-in-out cursor-pointer">
            <img src="/Client/Client-1.png" alt="Client Logo 1" class="max-w-full max-h-full object-contain" onerror="this.style.display='none'">
          </div>
          <div class="w-32 md:w-48 mx-6 md:mx-10 shrink-0 flex items-center justify-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300 ease-in-out cursor-pointer">
            <img src="/Client/Client-2.png" alt="Client Logo 2" class="max-w-full max-h-full object-contain" onerror="this.style.display='none'">
          </div>
          <div class="w-32 md:w-48 mx-6 md:mx-10 shrink-0 flex items-center justify-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300 ease-in-out cursor-pointer">
            <img src="/Client/Client-3.png" alt="Client Logo 3" class="max-w-full max-h-full object-contain" onerror="this.style.display='none'">
          </div>
          <div class="w-32 md:w-48 mx-6 md:mx-10 shrink-0 flex items-center justify-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300 ease-in-out cursor-pointer">
            <img src="/Client/Client-4.png" alt="Client Logo 4" class="max-w-full max-h-full object-contain" onerror="this.style.display='none'">
          </div>
          <div class="w-32 md:w-48 mx-6 md:mx-10 shrink-0 flex items-center justify-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300 ease-in-out cursor-pointer">
            <img src="/Client/Client-5.png" alt="Client Logo 5" class="max-w-full max-h-full object-contain" onerror="this.style.display='none'">
          </div>
          <div class="w-32 md:w-48 mx-6 md:mx-10 shrink-0 flex items-center justify-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300 ease-in-out cursor-pointer">
            <img src="/Client/Client-6.png" alt="Client Logo 6" class="max-w-full max-h-full object-contain" onerror="this.style.display='none'">
          </div>

          <!-- Set 2 (Duplicated 6 Logos for seamless loop) -->
          <div class="w-32 md:w-48 mx-6 md:mx-10 shrink-0 flex items-center justify-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300 ease-in-out cursor-pointer">
            <img src="/Client/Client-1.png" alt="Client Logo 1" class="max-w-full max-h-full object-contain" onerror="this.style.display='none'">
          </div>
          <div class="w-32 md:w-48 mx-6 md:mx-10 shrink-0 flex items-center justify-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300 ease-in-out cursor-pointer">
            <img src="/Client/Client-2.png" alt="Client Logo 2" class="max-w-full max-h-full object-contain" onerror="this.style.display='none'">
          </div>
          <div class="w-32 md:w-48 mx-6 md:mx-10 shrink-0 flex items-center justify-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300 ease-in-out cursor-pointer">
            <img src="/Client/Client-3.png" alt="Client Logo 3" class="max-w-full max-h-full object-contain" onerror="this.style.display='none'">
          </div>
          <div class="w-32 md:w-48 mx-6 md:mx-10 shrink-0 flex items-center justify-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300 ease-in-out cursor-pointer">
            <img src="/Client/Client-4.png" alt="Client Logo 4" class="max-w-full max-h-full object-contain" onerror="this.style.display='none'">
          </div>
          <div class="w-32 md:w-48 mx-6 md:mx-10 shrink-0 flex items-center justify-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300 ease-in-out cursor-pointer">
            <img src="/Client/Client-5.png" alt="Client Logo 5" class="max-w-full max-h-full object-contain" onerror="this.style.display='none'">
          </div>
          <div class="w-32 md:w-48 mx-6 md:mx-10 shrink-0 flex items-center justify-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300 ease-in-out cursor-pointer">
            <img src="/Client/Client-6.png" alt="Client Logo 6" class="max-w-full max-h-full object-contain" onerror="this.style.display='none'">
          </div>

        </div>
      </div>
    </section>

    <!-- Testimonial Section -->
    <section class="dark:bg-[#050505] py-20 mt-10">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Apa Kata <span class="text-[#5500FF]">Mereka?</span>
          </h2>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <!-- Testimonial 1 -->
          <div class="bg-gray-50 dark:bg-[#0a0a0a] p-8 rounded-3xl border border-gray-100 dark:border-gray-800/80 transition-all duration-300 hover:shadow-[0_0_25px_rgba(85,0,255,0.15)] relative group cursor-default">
            <!-- Halo Hover Effect -->
            <div class="absolute inset-0 rounded-3xl bg-gradient-to-b from-[#5500FF]/0 to-[#5500FF]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            
            <div class="flex items-center space-x-4 mb-6 relative z-10">
              <div class="w-14 h-14 rounded-full bg-gray-200 dark:bg-gray-800 overflow-hidden flex-shrink-0">
                <img src="/Icons/profile_icon.png" alt="Anton" class="w-full h-full object-cover" onerror="this.style.display='none'">
              </div>
              <div>
                <h4 class="font-bold text-gray-900 dark:text-white">Fathir</h4>
                <p class="text-sm text-[#5500FF] font-medium">Mahasiswa</p>
              </div>
            </div>
            <p class="text-gray-600 dark:text-gray-300 relative z-10 leading-relaxed italic">
              "Secara keseluruhan sudah oke banget diajarinnya step by step untuk seorang pemula dan jika saya bingung, mentor langsung membantu dan menjelaskan masalah dan solving masalah tersebut membuat saya memahami masalahnya berkat bantuan mentor."
            </p>
          </div>

          <!-- Testimonial 2 -->
          <div class="bg-gray-50 dark:bg-[#0a0a0a] p-8 rounded-3xl border border-gray-100 dark:border-gray-800/80 transition-all duration-300 hover:shadow-[0_0_25px_rgba(85,0,255,0.15)] relative group cursor-default">
            <div class="absolute inset-0 rounded-3xl bg-gradient-to-b from-[#5500FF]/0 to-[#5500FF]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            <div class="flex items-center space-x-4 mb-6 relative z-10">
              <div class="w-14 h-14 rounded-full bg-gray-200 dark:bg-gray-800 overflow-hidden flex-shrink-0">
                <img src="/Icons/profile_icon.png" alt="Sarah" class="w-full h-full object-cover" onerror="this.style.display='none'">
              </div>
              <div>
                <h4 class="font-bold text-gray-900 dark:text-white">Budi</h4>
                <p class="text-sm text-[#5500FF] font-medium">Director - DKF Wahana Solusindo</p>
              </div>
            </div>
            <p class="text-gray-600 dark:text-gray-300 relative z-10 leading-relaxed italic">
              "Pembuatan Company Profile oleh tim Kulonit sangat profesional. Desainnya modern, performa cepat, dan pelayanan pasca produksinya sangat memuaskan. Recommended bangett!"
            </p>
          </div>

          <!-- Testimonial 3 -->
          <div class="bg-gray-50 dark:bg-[#0a0a0a] p-8 rounded-3xl border border-gray-100 dark:border-gray-800/80 transition-all duration-300 hover:shadow-[0_0_25px_rgba(85,0,255,0.15)] relative group cursor-default">
            <div class="absolute inset-0 rounded-3xl bg-gradient-to-b from-[#5500FF]/0 to-[#5500FF]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            <div class="flex items-center space-x-4 mb-6 relative z-10">
              <div class="w-14 h-14 rounded-full bg-gray-200 dark:bg-gray-800 overflow-hidden flex-shrink-0">
                <img src="/Icons/profile_icon.png" alt="Budi" class="w-full h-full object-cover" onerror="this.style.display='none'">
              </div>
              <div>
                <h4 class="font-bold text-gray-900 dark:text-white">Rizky</h4>
                <p class="text-sm text-[#5500FF] font-medium">Mahasiswa</p>
              </div>
            </div>
            <p class="text-gray-600 dark:text-gray-300 relative z-10 leading-relaxed italic">
              "Belajar ngoding di Kulonit benar-benar #diluarkampus. Penjelasannya to-the-point dan modul gratisnya ngebantu banget waktu nyusun tugas akhir kuliah."
            </p>
          </div>

        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// SEO and Meta Configuration
useHead({
  title: 'Kulonit - Belajar Skill IT & Solusi Digital Bisnismu',
  meta: [
    { name: 'description', content: 'Platform edutech dan solusi digital terintegrasi. Tingkatkan skill ngoding-mu atau biarkan kami membangun sistem digital untuk bisnismu.' }
  ]
})
</script>

