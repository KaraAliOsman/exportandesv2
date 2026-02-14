/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'primary-navy': '#0F172A',
				'accent-green': '#00FF94',
				'metal-silver': '#E2E8F0',
				'copper-rust': '#B45309',
			},
			fontFamily: {
				sans: ['Inter', 'system-ui', 'sans-serif'],
				display: ['Oswald', 'Inter', 'system-ui', 'sans-serif'],
			},
			boxShadow: {
				metal: '0 20px 70px -36px rgba(0, 0, 0, 0.9)',
			},
			keyframes: {
				ticker: {
					'0%': { transform: 'translateX(0)' },
					'100%': { transform: 'translateX(-50%)' },
				},
				meshDrift: {
					'0%': { transform: 'translate3d(0, 0, 0) scale(1)' },
					'50%': { transform: 'translate3d(-1.5%, -1%, 0) scale(1.02)' },
					'100%': { transform: 'translate3d(0, 0, 0) scale(1)' },
				},
				glowPulse: {
					'0%, 100%': { boxShadow: '0 0 0 0 rgba(0, 255, 148, 0.38)' },
					'50%': { boxShadow: '0 0 0 12px rgba(0, 255, 148, 0)' },
				},
			},
			animation: {
				ticker: 'ticker 26s linear infinite',
				mesh: 'meshDrift 12s ease-in-out infinite',
				glow: 'glowPulse 2.8s ease-in-out infinite',
			},
		},
	},
};
