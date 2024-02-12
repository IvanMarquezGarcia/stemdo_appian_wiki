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
					lightA: '#b6b3ff',
					lightB: '#8680ff',
					lightC: '#554dff',
					original: '#4237FF',
					darkA: '#251aff',
					darkB: '#0b00e6',
					darkC: '#0900b3'
				},
				'stemdo-purple': {
					lightA: '#ede6ff',
					lightB: '#c8b3ff',
					lightC: '#a480ff',
					original: '#8859FF',
					darkA: '#6d33ff',
					darkB: '#4800ff',
					darkC: '#3a00cc'
				},
				'stemdo-red': {
					lightA: '#f8a0a5',
					lightB: '#f47177',
					lightC: '#f1414a',
					original: '#EF2630',
					darkA: '#d5101a',
					darkB: '#a60c14',
					darkC: '#77090e'
				},
				'stemdo-green': {
					lightA: '#4dfff0',
					lightB: '#1affec',
					lightC: '#00e6d2',
					original: '#00C2B1',
					darkA: '#00998c',
					darkB: '#00665e',
					darkC: '#00332f'
				},
			  },
		},
	},
	plugins: [
		require('flowbite/plugin')
	],
}
