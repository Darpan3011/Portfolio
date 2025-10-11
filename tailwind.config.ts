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
				DEFAULT: '#0a0a0a',
				secondary: '#1a1a2e',
				tertiary: '#16213e',
				quaternary: '#0f3460',
			},
  			foreground: '#ffffff',
  			card: {
  				DEFAULT: 'rgba(255, 255, 255, 0.05)',
  				foreground: '#ffffff',
  				hover: 'rgba(255, 255, 255, 0.1)'
  			},
  			primary: {
  				DEFAULT: '#667eea',
  				foreground: '#ffffff',
  				hover: '#5a6fd8'
  			},
  			secondary: {
  				DEFAULT: '#764ba2',
  				foreground: '#ffffff',
  				hover: '#6a4190'
  			},
  			accent: {
  				DEFAULT: '#f093fb',
  				foreground: '#000000',
  				hover: '#e881f9'
  			},
  			muted: {
  				DEFAULT: '#64748b',
  				foreground: '#94a3b8'
  			},
  			border: 'rgba(255, 255, 255, 0.1)',
  			input: 'rgba(255, 255, 255, 0.05)',
  			ring: '#667eea',
  			success: '#10b981',
  			warning: '#f59e0b',
  			error: '#ef4444',
  		},
  		fontFamily: {
  			sans: ['Inter', 'system-ui', 'sans-serif'],
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
  			'5xl': ['3rem', { lineHeight: '1' }],
  			'6xl': ['3.75rem', { lineHeight: '1' }],
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
  			'glow': '0 0 20px rgba(102, 126, 234, 0.3)',
  			'glow-lg': '0 0 30px rgba(102, 126, 234, 0.5)',
  		},
  		animation: {
  			'fade-in': 'fadeIn 0.5s ease-in-out',
  			'slide-up': 'slideUp 0.5s ease-out',
  			'slide-down': 'slideDown 0.5s ease-out',
  			'scale-in': 'scaleIn 0.3s ease-out',
  			'float': 'float 6s ease-in-out infinite',
  			'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
  		},
  		keyframes: {
  			fadeIn: {
  				'0%': { opacity: '0' },
  				'100%': { opacity: '1' },
  			},
  			slideUp: {
  				'0%': { transform: 'translateY(20px)', opacity: '0' },
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
  		},
  		backdropBlur: {
  			xs: '2px',
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
