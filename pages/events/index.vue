<template>
  <div class="relative w-full overflow-hidden bg-white dark:bg-black min-h-screen">
    
    <!-- Background Decor -->
    <div class="absolute top-0 left-0 w-full h-full pointer-events-none -z-10 overflow-hidden">
      <div class="absolute top-10 lg:top-1/4 left-1/2 -translate-x-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-primary rounded-full mix-blend-screen filter blur-[100px] opacity-15 dark:opacity-20"></div>
    </div>

    <div class="container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 md:pt-40">
      
      <!-- Catalog Header -->
      <div class="text-center mb-16 max-w-3xl mx-auto space-y-4">
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-tight">
          Events <span class="text-primary">Kulonit</span>
        </h1>
        <p class="text-lg md:text-xl text-gray-600 dark:text-gray-400">
          Upgrade skill IT-mu melalui sesi live dan program intensif bersama mentor praktisi.
        </p>
      </div>

      <!-- Featured Event (Highlight) -->
      <!-- <div class="mb-20 flex justify-center">
        <div class="relative w-full max-w-6xl group bg-white dark:bg-[#0a0a0a] rounded-3xl overflow-hidden border border-gray-200 dark:border-white/10 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row">
          
          <div class="w-full md:w-1/2 relative bg-gray-100 dark:bg-gray-800 aspect-video md:aspect-auto min-h-[300px] overflow-hidden">
             <div class="absolute inset-0 bg-gradient-to-br from-[#5500FF]/20 to-blue-600/20 z-10 mix-blend-overlay"></div>
             <img src="#" alt="Featured Event Banner" class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" onerror="this.style.display='none'">
             <div class="absolute top-4 right-4 z-20">
                <span class="px-4 py-2 bg-white/90 dark:bg-black/80 backdrop-blur-md text-gray-900 dark:text-white text-xs font-bold rounded-lg border border-gray-200 dark:border-white/10 shadow-sm shadow-[#5500FF]/20">All Levels</span>
             </div>
          </div>

          <div class="w-full md:w-1/2 p-8 lg:p-12 flex flex-col justify-center bg-transparent relative z-10">
            <div class="flex items-center space-x-3 mb-4">
              <span class="inline-flex items-center px-3 py-1 rounded-md bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-xs font-bold tracking-wide">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg> Webinar
              </span>
              <span class="inline-flex items-center px-3 py-1 rounded-md bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-bold tracking-wide">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg> Online
              </span>
            </div>
            
            <h2 class="text-3xl lg:text-4xl font-extrabold text-gray-900 dark:text-white leading-tight mb-4">
              Webinar: AI & Data Science 2026
            </h2>
            <p class="text-gray-600 dark:text-gray-400 text-lg mb-8 leading-relaxed">
              Membangun fondasi kuat di dunia Artificial Intelligence dan Machine Learning. Sesi interaktif membredel prospek karir dan roadmap paling cepat untuk menguasai Data Science.
            </p>

            <div class="flex items-center text-gray-700 dark:text-gray-300 mb-8 space-x-6">
               <div class="flex items-center font-medium">
                 <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mr-2 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                  15 April 2026
               </div>
               <div class="flex items-center font-medium">
                 <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mr-2 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                 19:00 WIB
               </div>
            </div>
            
            <a href="/coming-soon" target="_blank" class="w-full sm:w-auto px-8 py-3.5 text-base font-bold text-white transition-all duration-300 rounded-xl bg-primary hover:bg-blue-600 hover:shadow-[0_4px_20px_rgba(85,0,255,0.4)] transform hover:-translate-y-1 text-center font-display">
              Daftar Event
            </a>
          </div>
        </div>
      </div> -->

      <!-- Upcoming & Past Events Grid -->
      <div class="space-y-12">
        <div class="flex items-center justify-between border-b border-gray-200 dark:border-gray-800 pb-4">
          <h2 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Jadwal Event Lainnya</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <!-- Event Card 1 -->
          <!-- <div class="group bg-white dark:bg-[#0a0a0a] rounded-2xl border border-gray-200 dark:border-gray-800/80 overflow-hidden transition-all duration-300 hover:border-primary/50 hover:shadow-xl flex flex-col h-full cursor-pointer">
             <div class="relative w-full aspect-video bg-gray-100 dark:bg-gray-800 overflow-hidden">
               <img src="#" alt="Workshop Frontend" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" onerror="this.style.display='none'">
               <div class="absolute top-3 right-3">
                 <span class="px-2 py-1 bg-white dark:bg-black font-bold text-xs text-blue-600 dark:text-blue-400 rounded">Workshop</span>
               </div>
             </div>
             
             <div class="p-6 flex flex-col flex-grow">
               <div class="text-xs font-bold text-primary uppercase tracking-wider mb-2">
                 22 April 2026 • 10:00 WIB
               </div>
               <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
                 Mastering Vue 3 & Composition API Bootcamp
               </h3>
               <p class="text-gray-600 dark:text-gray-400 text-sm mb-6 flex-grow">
                 Workshop hands-on membangun aplikasi Single Page Application dengan teknologi terdepan bersama senior engineer.
               </p>
               
               <button class="w-full px-5 py-2.5 text-sm font-bold text-primary dark:text-white transition-all duration-300 rounded-xl border-2 border-primary group-hover:bg-primary group-hover:text-white text-center">
                 Lihat Detail
               </button>
             </div>
          </div> -->

          <!-- Event Card 2 -->
          <div class="group bg-white dark:bg-[#0a0a0a] rounded-2xl border border-gray-200 dark:border-gray-800/80 overflow-hidden transition-all duration-300 hover:border-primary/50 hover:shadow-xl flex flex-col h-full cursor-pointer">
             <div class="relative w-full aspect-video bg-gray-100 dark:bg-gray-800 overflow-hidden opacity-70 group-hover:opacity-100 transition-opacity">
               <img src="/Events/WS-1.jpg" alt="Webinar UI UX" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 filter grayscale group-hover:grayscale-0" onerror="this.style.display='none'">
               <div class="absolute inset-0 bg-black/40 flex items-center justify-center">
                 <span class="px-4 py-1 bg-gray-900/80 backdrop-blur-sm text-white font-bold text-sm rounded border border-white/20">Selesai</span>
               </div>
             </div>
             
             <div class="p-6 flex flex-col flex-grow">
               <div class="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                 Workshop • 20 - 22 Februari 2026
               </div>
               <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
                 Workshop Ramadan Vibe Coding | Bikin Web Resep Pintar (Chef AI)
               </h3>
               <p class="text-gray-600 dark:text-gray-400 text-sm mb-6 flex-grow">
                 Bikin Web Resep Pintar berbasis AI untuk membuat menu masakan sahur, cemilan, atau berbuka sesuai isi kulkas dirumah kita yang nanti nya AI akan bantu buatin resepnya.
               </p>
               
               <button class="w-full px-5 py-2.5 text-sm font-bold text-gray-700 dark:text-gray-300 transition-all duration-300 rounded-xl border-2 border-gray-300 dark:border-gray-700 group-hover:border-primary group-hover:text-primary dark:group-hover:text-white text-center">
                 Tonton Rekaman
               </button>
             </div>
          </div>


          <div class="group bg-white dark:bg-[#0a0a0a] rounded-2xl border border-gray-200 dark:border-gray-800/80 overflow-hidden transition-all duration-300 hover:border-primary/50 hover:shadow-xl flex flex-col h-full cursor-pointer">
             <div class="relative w-full aspect-video bg-gray-100 dark:bg-gray-800 overflow-hidden opacity-70 group-hover:opacity-100 transition-opacity">
               <img src="/Events/WB-1.jpg" alt="Webinar UI UX" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 filter grayscale group-hover:grayscale-0" onerror="this.style.display='none'">
               <div class="absolute inset-0 bg-black/40 flex items-center justify-center">
                 <span class="px-4 py-1 bg-gray-900/80 backdrop-blur-sm text-white font-bold text-sm rounded border border-white/20">Selesai</span>
               </div>
             </div>
             
             <div class="p-6 flex flex-col flex-grow">
               <div class="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                 Webinar • 23 Agustus 2024
               </div>
               <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
                 Webinar UI/UX Design & System Analyst
               </h3>
               <p class="text-gray-600 dark:text-gray-400 text-sm mb-6 flex-grow">
                 Menghubungkan Estetika dengan Fungsionalitas & Menguasai UML untuk Desain Software.
               </p>
               
               <button class="w-full px-5 py-2.5 text-sm font-bold text-gray-700 dark:text-gray-300 transition-all duration-300 rounded-xl border-2 border-gray-300 dark:border-gray-700 group-hover:border-primary group-hover:text-primary dark:group-hover:text-white text-center">
                 Tonton Rekaman
               </button>
             </div>
          </div>

          <!-- Event Card 3 -->
          <!-- <div class="group bg-white dark:bg-[#0a0a0a] rounded-2xl border border-gray-200 dark:border-gray-800/80 overflow-hidden transition-all duration-300 hover:border-primary/50 hover:shadow-xl flex flex-col h-full cursor-pointer">
             <div class="relative w-full aspect-video bg-gray-100 dark:bg-gray-800 overflow-hidden">
               <img src="#" alt="Bootcamp Laravel" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" onerror="this.style.display='none'">
               <div class="absolute top-3 right-3">
                 <span class="px-2 py-1 bg-white dark:bg-black font-bold text-xs text-blue-600 dark:text-blue-400 rounded">Intensif</span>
               </div>
               <div class="absolute bottom-3 left-3">
                 <span class="px-2 py-1 bg-red-600 text-white font-bold text-xs rounded">Slot Terbatas!</span>
               </div>
             </div>
             
             <div class="p-6 flex flex-col flex-grow">
               <div class="text-xs font-bold text-primary uppercase tracking-wider mb-2">
                 Mei 2026 - Program 6 Minggu
               </div>
               <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
                 Fullstack Developer Camp: Nuxt + Laravel
               </h3>
               <p class="text-gray-600 dark:text-gray-400 text-sm mb-6 flex-grow">
                 Program bimbingan intensif 6 minggu dengan final project nyata untuk persiapan terjun ke industri.
               </p>
               
               <button class="w-full px-5 py-2.5 text-sm font-bold text-primary dark:text-white transition-all duration-300 rounded-xl border-2 border-primary group-hover:bg-primary group-hover:text-white text-center">
                 Lihat Detail Silabus
               </button>
             </div>
          </div> -->

        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'Events - Kulonit',
  meta: [
    { name: 'description', content: 'Daftar event langsung yang dipegang oleh Kulonit.' }
  ]
})
</script>
