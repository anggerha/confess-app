import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2026-01-01',
  vite: {
    plugins: [
      tailwindcss()
    ],
    optimizeDeps: {
      include: [
        '@vue/devtools-core',
        '@vue/devtools-kit',
        'canvas-confetti',
        'gsap',
      ]
    }
  },
  css: [
    '~/assets/css/main.css',
    'animate.css'
  ],

  modules: [],

  app: {
    head: {
      title: 'Hi Alicia! I Have a Message For You 💌',

      link: [
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com'
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Nunito:wght@400;600;700;800&display=swap'
        }
      ]
    }
  }
})
