import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: ['@nuxtjs/color-mode', '@vueuse/nuxt', 'shadcn-nuxt'],
	colorMode: {
		classSuffix: '',
	},
	css: ['~/assets/css/main.css'],
	vite: {
		plugins: [tailwindcss()],
	},
	shadcn: {
		prefix: '',
	},
	compatibilityDate: '2025-07-15',
	devtools: { enabled: true },
})
