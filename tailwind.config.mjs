/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./node_modules/flowbite/**/*.js'
	],
	theme: {
		extend: {
			colors: {
				'stemdo-blue': {
					light: '#8680ff',
					original: '#4237FF',
					dark: '#0d00ff'
				},
				'stemdo-purple': {
					light: '#b699ff',
					original: '#8859FF',
					dark: '#5b1aff'
				},
				'stemdo-red': {
					light: '#f35961',
					original: '#EF2630',
					dark: '#be0e17'
				},
				'stemdo-green': {
					light: '00ffea',
					original: '#00C2B1',
					dark: '#008075'
				},
			  },
		},
	},
	plugins: [
		require('flowbite/plugin')
	],
}
