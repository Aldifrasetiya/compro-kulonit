// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  future: {
    compatibilityVersion: 4,
  },

  // Setup Tailwind CSS integration
  css: ['~/assets/css/main.css'],
  
  postcss: {
    plugins: {
      '@tailwindcss/postcss': {}
    }
  },

  // Auto-import components
  components: true,

  // Modules
  modules: [
    '@nuxtjs/color-mode'
  ],

  // Color Mode Configuration for Dark/Light Theme Switching
  colorMode: {
    classSuffix: '', // Essential for Tailwind dark mode (adds 'dark' instead of 'dark-mode')
    preference: 'dark', // Default preference based on prompt's "Modern Dark UI" focus
    fallback: 'dark',
  },

  app: {
    head: {
      link: [
        { 
          rel: 'icon', 
          type: 'image/jpg', 
          href: '/Logo/logo kulonit v2.jpg'
        }
      ],
      script: [
        // Google Analytics (GA4)
        {
          src: 'https://www.googletagmanager.com/gtag/js?id=G-2797GPE7EJ',
          async: true
        },
        {
          innerHTML: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-2797GPE7EJ');
          `,
          type: 'text/javascript'
        },
        // Meta (Facebook) Pixel
        {
          innerHTML: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', 'YOUR_PIXEL_ID_HERE');
            fbq('track', 'PageView');
          `,
          type: 'text/javascript'
        }
      ]
    }
  }
})
