<template>
  <div class="relative w-full overflow-hidden bg-white dark:bg-black min-h-screen">
    
    <!-- Background Decor (Identical to Homepage blob) -->
    <div class="absolute top-0 left-0 w-full h-full pointer-events-none -z-10 overflow-hidden">
      <div class="absolute top-10 lg:top-1/4 left-1/2 -translate-x-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-primary rounded-full mix-blend-screen filter blur-[100px] opacity-15 dark:opacity-20"></div>
    </div>

    <div class="container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 md:pt-40">
      
      <!-- Catalog Header -->
      <div class="text-center mb-16 max-w-3xl mx-auto space-y-4">
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-tight">
          Digital Products <span class="text-primary">Kulonit</span>
        </h1>
        <p class="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
          Tingkatkan skill IT kamu dengan kurikulum ter-update dan mentor praktisi industri.
        </p>
      </div>

      <!-- Highlighted Lead Magnet (Free Course) -->
      <div class="mb-20">
        <div class="relative group bg-gray-900 dark:bg-[#080808] rounded-3xl overflow-hidden border border-primary/40 shadow-[0_0_30px_rgba(85,0,255,0.2)] hover:shadow-[0_0_40px_rgba(85,0,255,0.4)] transition-all duration-500">
          
          <!-- Background glow overlay inside the highlight card -->
          <div class="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent pointer-events-none"></div>

          <div class="relative z-10 p-8 sm:p-12 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-10">
            <div class="w-full lg:w-2/3 space-y-6 text-center lg:text-left">
              <div class="inline-flex items-center px-4 py-1.5 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-sm font-bold tracking-wide">
                100% GRATIS
              </div>
              <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
                Community <br class="hidden sm:block"/>
                <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Kulonit</span>
              </h2>
              <p class="text-gray-300 text-lg max-w-2xl leading-relaxed">
                Bergabunglah di komunitas saluran WhatsApp Kulonit untuk belajar dan update seputar teknologi.
              </p>
            </div>
            
            <div class="w-full lg:w-auto flex justify-center">
              <a href="https://whatsapp.com/channel/0029VbCF34I9mrGi92qSt20D" target="_blank" class="w-full text-center sm:w-auto px-10 py-4 text-lg font-bold text-white transition-all duration-300 rounded-full bg-gradient-to-r from-primary to-blue-600 hover:shadow-[0_0_25px_rgba(85,0,255,0.6)] transform hover:-translate-y-1">
                Join Sekarang
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Search & Filter Bar -->
      <div class="flex flex-col md:flex-row gap-4 items-center justify-between mb-8">
        <h2 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white w-full md:w-auto">Semua Produk</h2>
        
        <div class="flex flex-col sm:flex-row w-full md:w-auto gap-4">
          <!-- Search Input -->
          <div class="relative w-full sm:w-64">
            <input type="text" v-model="searchQuery" placeholder="Cari produk digital..." class="w-full pl-10 pr-4 py-2.5 bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 text-gray-900 dark:text-white placeholder-gray-500 transition-all duration-300" />
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          </div>
          
          <!-- Category Dropdown -->
          <select v-model="selectedCategory" class="w-full sm:w-48 px-4 py-2.5 bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 text-gray-900 dark:text-white transition-all duration-300 appearance-none cursor-pointer">
            <option value="Semua">Semua Kategori</option>
            <option value="E-Course">E-Course</option>
            <option value="E-Book">E-Book</option>
            <option value="Source Code">Source Code</option>
          </select>
        </div>
      </div>

      <!-- Dynamic Grid -->
      <div v-if="filteredProducts.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        <div v-for="product in filteredProducts" :key="product.id" class="group bg-white dark:bg-[#0a0a0a] rounded-3xl border border-gray-100 dark:border-gray-800/80 overflow-hidden transition-all duration-300 hover:border-primary/50 hover:shadow-[0_8px_30px_rgba(85,0,255,0.15)] flex flex-col h-full">
          <div class="aspect-video bg-gray-100 dark:bg-gray-800 relative overflow-hidden">
            <img :src="product.thumbnail" :alt="product.title" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" onerror="this.style.display='none'">
            <div class="absolute top-4 right-4 flex flex-col gap-2">
              <span class="px-3 py-1 bg-black/70 backdrop-blur-md text-white text-xs font-bold rounded-lg border border-white/10">{{ product.level }}</span>
            </div>
            <div class="absolute top-4 left-4 flex flex-col gap-2">
              <span class="px-3 py-1 bg-primary/90 backdrop-blur-md text-white text-xs font-bold rounded-lg">{{ product.type }}</span>
            </div>
          </div>
          
          <div class="p-6 flex flex-col grow">
            <div class="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3 space-x-4">
              <span v-for="(feature, index) in product.features" :key="index" class="flex items-center">
                <svg v-if="index === 0" xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                {{ feature }}
              </span>
            </div>
            
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">{{ product.title }}</h3>
            <p class="text-gray-600 dark:text-gray-400 text-sm mb-6 line-clamp-2">{{ product.description }}</p>
            
            <div class="mt-auto flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-800">
              <div class="flex flex-col">
                <span v-if="product.originalPrice" class="text-xs text-gray-400 line-through">{{ product.originalPrice }}</span>
                <span class="text-lg font-extrabold text-primary">{{ product.price }}</span>
              </div>
              <a :href="product.link" target="_blank" class="px-5 py-2 text-sm font-bold text-gray-900 dark:text-white transition-all duration-300 rounded-full border-2 border-primary hover:bg-primary/10">
                Lihat Detail
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Empty State -->
      <div v-else class="flex flex-col items-center justify-center py-20 text-center mb-20 bg-gray-50 dark:bg-[#080808] rounded-3xl border border-gray-200 dark:border-white/5">
        <div class="w-20 h-20 bg-gray-200 dark:bg-gray-800 rounded-full flex items-center justify-center text-gray-400 dark:text-gray-500 mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
        </div>
        <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">Data tidak ditemukan.</h3>
        <p class="text-gray-500 max-w-md mx-auto">Coba gunakan kata kunci lain atau ubah filter pencarian untuk menemukan produk yang kamu inginkan.</p>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

useHead({
  title: 'Digital Products - Kulonit',
  meta: [
    { name: 'description', content: 'Tingkatkan skill coding-mu dengan kurikulum ter-update di Kulonit.' }
  ]
})

const searchQuery = ref('')
const selectedCategory = ref('Semua')

const products = ref([
  {
    id: 1,
    title: 'Kliniku: Fullstack Laravel',
    type: 'E-Course',
    level: 'All Levels',
    thumbnail: '/Thumbnail-product/E-course/C1.jpg',
    features: ['22 Video', '3 Jam 42 Menit'],
    description: 'Bangun sistem informasi klinik berbasis web.',
    originalPrice: 'Rp 149.000',
    price: 'Rp 109.000',
    link: 'https://kulonitcom-60334.myr.id/pl/kelas-laravel-11-membuat-sistem-informasi-klinik-berbasis-web/'
  },
  {
    id: 2,
    title: 'Kepo AI',
    type: 'E-Book',
    level: 'All Levels',
    thumbnail: '/Thumbnail-product/E-book/B1.jpg',
    features: ['28 Halaman'],
    description: 'Cara kerja kecerdasan buatan dibalik layar.',
    originalPrice: '',
    price: 'FREE',
    link: 'http://lynk.id/kulonitcom/nl2zw2zk68yq'
  },
  {
    id: 3,
    title: 'Blueprint ERD Mastery',
    type: 'E-Book',
    level: 'Beginner',
    thumbnail: '/Thumbnail-product/E-book/B2.jpg',
    features: ['21 Halaman'],
    description: 'Merancang database ERD tanpa ribet!',
    originalPrice: 'Rp 55.000',
    price: 'Rp 15.000',
    link: 'http://lynk.id/kulonitcom/DVxmRqo'
  },
  {
    id: 4,
    title: 'JavaScript Unlocked',
    type: 'E-Book',
    level: 'Beginner',
    thumbnail: '/Thumbnail-product/E-book/B3.jpg',
    features: ['50 Halaman'],
    description: 'Panduan Belajar JavaScript dalam 30 hari!',
    originalPrice: 'Rp 99.000',
    price: 'Rp 49.000',
    link: 'http://lynk.id/kulonitcom/zn6gln5xzj6v'
  }
])

const filteredProducts = computed(() => {
  return products.value.filter(product => {
    const matchCategory = selectedCategory.value === 'Semua' || product.type === selectedCategory.value
    const matchSearch = product.title.toLowerCase().includes(searchQuery.value.toLowerCase())
    return matchCategory && matchSearch
  })
})
</script>
