// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: [
    '@/assets/css/containerPage.css', 
    '@/assets/css/saibaMais.css',
    '@/assets/css/listaPersonagens.css',
    '@/assets/css/listaEpisodiosHome.css'
  ],
  modules: ['@nuxtjs/tailwindcss'],
/*   components: true, // garante auto import */
})