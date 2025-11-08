// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: [
    'bootstrap/dist/css/bootstrap.min.css',
    '@/assets/css/containerPage.css', 
    '@/assets/css/saibaMais.css',
    '@/assets/css/listaPersonagens.css',
    '@/assets/css/listaEpisodiosHome.css'
  ]
})