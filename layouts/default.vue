<template>
  <div class="min-h-screen flex flex-col font-sans">
    <AppNavbar />
    
    <!-- pt-24 is needed because of the fixed navbar -->
    <main class="flex-grow pb-12">
      <slot />
    </main>

    <AppFooter />
  </div>
</template>

<script setup>
// Global layout wrapping the main content with Navbar and Footer
</script>
