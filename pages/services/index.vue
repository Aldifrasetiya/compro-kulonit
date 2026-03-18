<template>
  <div class="relative w-full overflow-hidden bg-white dark:bg-black min-h-screen">
    
    <!-- Background Decor -->
    <div class="absolute top-0 left-0 w-full h-full pointer-events-none -z-10 overflow-hidden">
      <div class="absolute top-10 lg:top-1/4 left-1/2 -translate-x-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-primary rounded-full mix-blend-screen filter blur-[100px] opacity-15 dark:opacity-20"></div>
    </div>

    <div class="container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 md:pt-40">
      
      <!-- Header Section -->
      <div class="text-center mb-16 max-w-4xl mx-auto space-y-6">
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-tight">
          Solusi Digital untuk Tingkatkan <span class="text-primary text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Bisnismu</span>
        </h1>
        <p class="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl mx-auto">
          Dari website event interaktif, pengembangan sistem informasi (SaaS), hingga platform digital custom. Kami wujudkan visi teknologimu.
        </p>
      </div>

      <!-- Services Grid -->
      <div class="max-w-7xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <!-- Card 1 -->
        <div class="group bg-white dark:bg-[#0a0a0a] rounded-3xl p-8 sm:p-10 border border-gray-200 dark:border-white/10 transition-all duration-300 hover:border-primary/50 hover:shadow-[0_8px_30px_rgba(85,0,255,0.15)] hover:-translate-y-2 relative overflow-hidden flex flex-col items-start cursor-default">
          <div class="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/15 transition-colors duration-500 pointer-events-none"></div>
          
          <div class="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300 relative z-10">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
          </div>
          
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 relative z-10">Web Development & Landing Page</h3>
          <p class="text-gray-600 dark:text-gray-400 leading-relaxed flex-grow relative z-10">
            Pembuatan company profile profesional untuk membantu bisnismu di dunia digital.
          </p>
        </div>

        <!-- Card 2 -->
        <div class="group bg-white dark:bg-[#0a0a0a] rounded-3xl p-8 sm:p-10 border border-gray-200 dark:border-white/10 transition-all duration-300 hover:border-primary/50 hover:shadow-[0_8px_30px_rgba(85,0,255,0.15)] hover:-translate-y-2 relative overflow-hidden flex flex-col items-start cursor-default">
          <div class="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/15 transition-colors duration-500 pointer-events-none"></div>
          
          <div class="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300 relative z-10">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>
          </div>
          
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 relative z-10">Sistem Informasi & SaaS</h3>
          <p class="text-gray-600 dark:text-gray-400 leading-relaxed flex-grow relative z-10">
            Pengembangan web app custom, HRIS terintegrasi, dan sistem manajemen dashboard yang scalable.
          </p>
        </div>

        <!-- Card 3 -->
        <div class="group bg-white dark:bg-[#0a0a0a] rounded-3xl p-8 sm:p-10 border border-gray-200 dark:border-white/10 transition-all duration-300 hover:border-primary/50 hover:shadow-[0_8px_30px_rgba(85,0,255,0.15)] hover:-translate-y-2 relative overflow-hidden flex flex-col items-start cursor-default">
          <div class="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/15 transition-colors duration-500 pointer-events-none"></div>
          
          <div class="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300 relative z-10">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
          </div>
          
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 relative z-10">Platform Digital</h3>
          <p class="text-gray-600 dark:text-gray-400 leading-relaxed flex-grow relative z-10">
            Solusi platform digital kreatif dan website event interaktif lengkap dengan integrasi payment gateway.
          </p>
        </div>

      </div>

      <!-- Workflow Section -->
      <div class="mt-32 max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">Cara Kerja Kami</h2>
          <p class="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">Kami menggunakan pendekatan sistematis untuk memastikan hasil terbaik.</p>
        </div>
        
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          <!-- Step 1 -->
          <div class="relative text-center p-6 bg-gray-50 dark:bg-[#080808] border border-gray-200 dark:border-white/5 rounded-3xl group transition-all duration-300 hover:border-primary/30 hover:shadow-lg">
             <div class="w-16 h-16 mx-auto rounded-full bg-primary/10 text-primary flex items-center justify-center text-2xl font-bold mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">1</div>
             <h4 class="text-xl font-bold text-gray-900 dark:text-white mb-2">Konsultasi</h4>
             <p class="text-sm text-gray-600 dark:text-gray-400">Analisa kebutuhan dan perumusan fitur solusi digital terbaik.</p>
          </div>

          <!-- Step 2 -->
          <div class="relative text-center p-6 bg-gray-50 dark:bg-[#080808] border border-gray-200 dark:border-white/5 rounded-3xl group transition-all duration-300 hover:border-primary/30 hover:shadow-lg">
             <div class="w-16 h-16 mx-auto rounded-full bg-primary/10 text-primary flex items-center justify-center text-2xl font-bold mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">2</div>
             <h4 class="text-xl font-bold text-gray-900 dark:text-white mb-2">Prototyping</h4>
             <p class="text-sm text-gray-600 dark:text-gray-400">Pembuatan desain user interface (UI) dan alur pengalaman pengguna.</p>
          </div>

          <!-- Step 3 -->
          <div class="relative text-center p-6 bg-gray-50 dark:bg-[#080808] border border-gray-200 dark:border-white/5 rounded-3xl group transition-all duration-300 hover:border-primary/30 hover:shadow-lg">
             <div class="w-16 h-16 mx-auto rounded-full bg-primary/10 text-primary flex items-center justify-center text-2xl font-bold mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">3</div>
             <h4 class="text-xl font-bold text-gray-900 dark:text-white mb-2">Development</h4>
             <p class="text-sm text-gray-600 dark:text-gray-400">Proses coding yang tangguh, aman, dengan pengujian Quality Assurance.</p>
          </div>

          <!-- Step 4 -->
          <div class="relative text-center p-6 bg-gray-50 dark:bg-[#080808] border border-gray-200 dark:border-white/5 rounded-3xl group transition-all duration-300 hover:border-primary/30 hover:shadow-lg">
             <div class="w-16 h-16 mx-auto rounded-full bg-primary/10 text-primary flex items-center justify-center text-2xl font-bold mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">4</div>
             <h4 class="text-xl font-bold text-gray-900 dark:text-white mb-2">Maintenance</h4>
             <p class="text-sm text-gray-600 dark:text-gray-400">Deployment app ke produksi dengan pemeliharaan skala bisnis jangka panjang.</p>
          </div>

        </div>
      </div>

      <!-- CTA Banner -->
      <div class="max-w-5xl mx-auto mt-24 mb-12">
        <div class="bg-gradient-to-r from-primary to-blue-600 rounded-3xl p-10 sm:p-14 text-center shadow-[0_15px_40px_rgba(85,0,255,0.3)] relative overflow-hidden group">
          
          <!-- Abstract Background Graphic -->
          <svg class="absolute top-0 right-0 w-64 h-64 -translate-y-1/2 translate-x-1/3 opacity-20 pointer-events-none group-hover:rotate-12 group-hover:scale-110 transition-transform duration-1000" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#ffffff" d="M42.7,-68.8C54.1,-60.1,61.4,-45.3,67,-30.9C72.6,-16.5,76.5,-2.6,73.5,10.1C70.6,22.8,60.8,34.3,50.1,44C39.4,53.7,27.8,61.7,14.6,68.1C1.3,74.5,-13.6,79.4,-27.6,77.1C-41.6,74.7,-54.6,65.2,-64.2,53.4C-73.8,41.7,-80,27.8,-82.7,13.2C-85.3,-1.4,-84.4,-16.6,-77.6,-28.9C-70.8,-41.2,-58.1,-50.7,-45.1,-58.7C-32.2,-66.8,-19,-73.4,-2.2,-70.3C14.7,-67.2,29.3,-54.3,42.7,-68.8Z" transform="translate(100 100)" />
          </svg>

          <div class="relative z-10 flex flex-col items-center">
            <h2 class="text-3xl md:text-4xl font-extrabold text-white mb-8 leading-tight">Punya ide proyek digital?<br class="hidden sm:block"/> Mari diskusikan bersama tim kami.</h2>
            <a href="https://api.whatsapp.com/send/?phone=6288290449738" target="_blank" class="px-8 py-4 text-primary bg-white rounded-full font-bold text-lg hover:scale-105 transition-transform duration-300 shadow-xl w-full sm:w-auto flex flex-row justify-center items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              Konsultasi Gratis via WhatsApp
            </a>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'Services - Kulonit',
  meta: [
    { name: 'description', content: 'Solusi digital untuk meningkatkan bisnismu. Jasa web development, sistem enterprise, hingga Automation Business profesional.' }
  ]
})
</script>
