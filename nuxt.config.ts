// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@bg-dev/nuxt-naiveui",
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    "@nuxt/image",
    "@vite-pwa/nuxt",
    // "nuxt-icon",
  ],
  runtimeConfig: {
    public: {
      apiBaseUrl: "https://anime-api.5t5.top",
    },
  },
  ssr: false,
  imports: {
    dirs: ["composables/store/*.{js,ts}"],
  },
  piniaPersistedstate: {
    storage: "localStorage",
  },
  app: {
    head: {
      script: [
        {
          async: true,
          src: "https://umami.magma.ink/script.js",
          "data-website-id": "bcf9db29-ac5a-449c-a35d-259655934be1",
        },
        {
          async: true,
          src: "https://hm.baidu.com/hm.js?c3b6ee9c2eff1642f7465f8e97766227",
        },
      ],
    },
  },
  css: ["~/assets/css/scrollbar.css", "~/assets/css/transition.css"],
  typescript: {
    shim: false,
  },
  pwa: {
    registerType: "autoUpdate",
    includeAssets: ["favicon.ico", "icon.svg", "apple-touch-icon.png"],
    manifest: {
      name: "熔岩番剧库",
      short_name: "熔岩番剧库",
      description: "熔岩番剧库 LavaAnimeLib",
      theme_color: "#ffffff",
      icons: [
        {
          src: "pwa-192x192.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "pwa-512x512.png",
          sizes: "512x512",
          type: "image/png",
          purpose: "any maskable",
        },
      ],
    },
    workbox: {
      globPatterns: ["**/*.{js,css,ico,png,svg}"],
    },
    devOptions: {
      enabled: false,
    },
  },
});
