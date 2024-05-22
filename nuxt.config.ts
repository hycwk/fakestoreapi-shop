// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  typescript: {
    typeCheck: true,
  },
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    [
      '@nuxtjs/google-fonts',
      {
        families: {
          'Roboto+Condensed': [400, 600, 800],
        },
      },
    ],
    [
      '@sidebase/nuxt-auth',
      {
        auth: {
					globalAppMiddleware: true,
          provider: {
            type: 'local',
          },
        },
      },
    ],
  ],
	// devServer: {
	// 	https: {
	// 		key: './server.key',
	// 		cert: './server.crt'
	// 	}
	// },
});
