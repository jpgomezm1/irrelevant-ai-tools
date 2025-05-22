
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: '#8B5FFF',
					light: '#A78BFA',
					dark: '#7C3AED',
				},
				text: {
					primary: '#FFFFFF',
					secondary: '#9CA3AF',
					tertiary: '#6B7280',
				},
				'card-bg': 'rgba(139, 95, 255, 0.08)',
				'card-border': 'rgba(139, 95, 255, 0.2)',
				'input-bg': 'rgba(255, 255, 255, 0.05)',
				'input-border': 'rgba(255, 255, 255, 0.1)',
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
			},
			fontFamily: {
				inter: ['Inter', 'sans-serif'],
			},
			fontSize: {
				h1Desktop: ['48px', { fontWeight: '700', lineHeight: '1.1' }],
				h1Mobile: ['36px', { fontWeight: '700', lineHeight: '1.1' }],
				h2: ['32px', { fontWeight: '600', lineHeight: '1.2' }],
				h3: ['20px', { fontWeight: '600', lineHeight: '1.3' }],
				body: ['16px', { fontWeight: '400', lineHeight: '1.6' }],
				button: ['16px', { fontWeight: '600', letterSpacing: '0.5px' }],
			},
			backgroundImage: {
				'gradient-primary': 'radial-gradient(circle at center, #0B0D1A 0%, #1A1B2E 100%)',
			},
			boxShadow: {
				card: '0 8px 32px rgba(139, 95, 255, 0.12)',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				shimmer: {
					'0%, 100%': { opacity: '0.5' },
					'50%': { opacity: '0.8' },
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				shimmer: 'shimmer 2s ease-in-out infinite',
			},
			backdropFilter: {
				'blur-md': 'blur(20px)',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
