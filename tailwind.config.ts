import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: {
				DEFAULT: '#0a0a0b',
				secondary: '#111113',
				tertiary: '#1a1a1d',
				elevated: '#222225',
			},
  			foreground: '#fafafa',
  			card: {
  				DEFAULT: 'rgba(255, 255, 255, 0.03)',
  				foreground: '#fafafa',
  				hover: 'rgba(255, 255, 255, 0.06)'
  			},
  			primary: {
  				DEFAULT: '#f59e0b',
  				foreground: '#0a0a0b',
  				hover: '#fbbf24',
  				muted: 'rgba(245, 158, 11, 0.15)',
  			},
  			secondary: {
  				DEFAULT: '#14b8a6',
  				foreground: '#0a0a0b',
  				hover: '#2dd4bf'
  			},
  			accent: {
  				DEFAULT: '#f59e0b',
  				foreground: '#0a0a0b',
  				hover: '#fbbf24'
  			},
  			muted: {
  				DEFAULT: '#52525b',
  				foreground: '#a1a1aa'
  			},
  			border: {
  				DEFAULT: 'rgba(255, 255, 255, 0.06)',
  				hover: 'rgba(255, 255, 255, 0.12)',
  				accent: 'rgba(245, 158, 11, 0.3)',
  			},
  			input: 'rgba(255, 255, 255, 0.04)',
  			ring: '#f59e0b',
  			success: '#10b981',
  			warning: '#f59e0b',
  			error: '#ef4444',
  		},
  		fontFamily: {
  			display: ['var(--font-space-grotesk)', 'system-ui', 'sans-serif'],
  			sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
  		},
  		fontSize: {
  			'xs': ['0.75rem', { lineHeight: '1rem' }],
  			'sm': ['0.875rem', { lineHeight: '1.25rem' }],
  			'base': ['1rem', { lineHeight: '1.5rem' }],
  			'lg': ['1.125rem', { lineHeight: '1.75rem' }],
  			'xl': ['1.25rem', { lineHeight: '1.75rem' }],
  			'2xl': ['1.5rem', { lineHeight: '2rem' }],
  			'3xl': ['1.875rem', { lineHeight: '2.25rem' }],
  			'4xl': ['2.25rem', { lineHeight: '2.5rem' }],
  			'5xl': ['3rem', { lineHeight: '1.1' }],
  			'6xl': ['3.75rem', { lineHeight: '1.05' }],
  			'7xl': ['4.5rem', { lineHeight: '1' }],
  			'8xl': ['6rem', { lineHeight: '1' }],
  			'9xl': ['8rem', { lineHeight: '1' }],
  		},
  		spacing: {
  			'18': '4.5rem',
  			'88': '22rem',
  			'128': '32rem',
  		},
  		borderRadius: {
  			'none': '0',
  			'sm': '0.125rem',
  			DEFAULT: '0.25rem',
  			'md': '0.375rem',
  			'lg': '0.5rem',
  			'xl': '0.75rem',
  			'2xl': '1rem',
  			'3xl': '1.5rem',
  			'full': '9999px',
  		},
  		boxShadow: {
  			'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  			DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
  			'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  			'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  			'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  			'2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  			'inner': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
  			'glow': '0 0 20px rgba(245, 158, 11, 0.2)',
  			'glow-lg': '0 0 40px rgba(245, 158, 11, 0.3)',
  			'glow-accent': '0 0 30px rgba(245, 158, 11, 0.15), 0 0 60px rgba(245, 158, 11, 0.05)',
  		},
  		animation: {
  			'fade-in': 'fadeIn 0.6s ease-out',
  			'slide-up': 'slideUp 0.6s ease-out',
  			'slide-down': 'slideDown 0.5s ease-out',
  			'scale-in': 'scaleIn 0.3s ease-out',
  			'float': 'float 6s ease-in-out infinite',
  			'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
  			'shimmer': 'shimmer 2s linear infinite',
  			'border-glow': 'borderGlow 3s ease-in-out infinite',
  			'reveal': 'reveal 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
  		},
  		keyframes: {
  			fadeIn: {
  				'0%': { opacity: '0' },
  				'100%': { opacity: '1' },
  			},
  			slideUp: {
  				'0%': { transform: 'translateY(30px)', opacity: '0' },
  				'100%': { transform: 'translateY(0)', opacity: '1' },
  			},
  			slideDown: {
  				'0%': { transform: 'translateY(-20px)', opacity: '0' },
  				'100%': { transform: 'translateY(0)', opacity: '1' },
  			},
  			scaleIn: {
  				'0%': { transform: 'scale(0.9)', opacity: '0' },
  				'100%': { transform: 'scale(1)', opacity: '1' },
  			},
  			float: {
  				'0%, 100%': { transform: 'translateY(0px)' },
  				'50%': { transform: 'translateY(-20px)' },
  			},
  			shimmer: {
  				'0%': { backgroundPosition: '-200% 0' },
  				'100%': { backgroundPosition: '200% 0' },
  			},
  			borderGlow: {
  				'0%, 100%': { borderColor: 'rgba(245, 158, 11, 0.2)' },
  				'50%': { borderColor: 'rgba(245, 158, 11, 0.5)' },
  			},
  			reveal: {
  				'0%': { transform: 'translateY(100%)', opacity: '0' },
  				'100%': { transform: 'translateY(0)', opacity: '1' },
  			},
  		},
  		backdropBlur: {
  			xs: '2px',
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
