/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				green: {
					primary: '#3CB87E',
				},
				yellow: {
					primary: '#FBBF28',
				},
				violet: {
					primary: '#A293DD',
				},
				red: {
					primary: '#DB5348',
				},
				blue: {
					primary: '#317AE1',
				},
			},
		},
	},
	plugins: [daisyui],
};
