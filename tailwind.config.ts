
import type { Config } from "tailwindcss";
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',    // Default padding for the smallest screens
        sm: '1.5rem',      // Padding for 'sm' breakpoint and up
        md: '2rem',        // Padding for 'md' breakpoint and up
        lg: '2.5rem',      // Padding for 'lg' breakpoint and up
        xl: '3rem',        // Padding for 'xl' breakpoint and up
      },
      screens: { // Optional: defines the max-width for each breakpoint. Uses Tailwind defaults if omitted.
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      }
    },
  	extend: {
      fontFamily: {
        sans: ['var(--font-poppins)', ...defaultTheme.fontFamily.sans],
        poppins: ['var(--font-poppins)', ...defaultTheme.fontFamily.sans],
        'signika-negative': ['var(--font-signika-negative)', ...defaultTheme.fontFamily.sans],
        parisienne: ['var(--font-parisienne)', ...defaultTheme.fontFamily.sans], 
      },
      backgroundImage: {
        'primary-gradient': 'linear-gradient(to bottom right, hsl(var(--primary)), hsl(var(--accent)))',
        'dropdown-hover-gradient': 'linear-gradient(to bottom right, hsl(var(--primary)), hsl(270 50% 55%))',
        'destructive-gradient': 'linear-gradient(to bottom right, hsl(0 70% 60%), hsl(30 80% 60%))',
        'rainbow-text-gradient': 'linear-gradient(to right, hsl(320, 70%, 60%), hsl(25, 85%, 60%), hsl(50, 85%, 60%), hsl(120, 60%, 55%), hsl(220, 75%, 65%))',
        'green-admission-gradient': 'linear-gradient(to bottom right, hsl(140 60% 50%), hsl(140 60% 40%))',
        'rosemary-purple-gradient': 'linear-gradient(to right, hsl(320 85% 55%), hsl(270 50% 40%))',
      },
  		colors: {
        // Example dark blue for section background, adjust as needed
        'section-dark-blue': 'hsl(220 40% 15%)', // A deep, slightly desaturated blue
        'blue-900': '#1e3a8a', // Adding a standard Tailwind blue-900 for convenience
        'blue-200': '#bfdbfe', // For text on dark blue
        yellow: { 
          400: '#FACC15', 
          500: '#EAB308', 
        },
        indigo: { 
          700: '#4338CA', 
          800: '#3730A3', 
        },
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
        'active-nav-pink': 'hsl(340 82% 56%)', 
        'contact-send-button': 'hsl(122 39% 49%)', // Green for send button (like #4CAF50)
        'contact-send-button-hover': 'hsl(122 39% 44%)', // Darker green for hover (like #45a049)
        'button-signup-green': 'hsl(145 58% 50%)', // Example: #48BB78
        'button-signup-green-hover': 'hsl(145 58% 45%)', // Darker shade
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
  			sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-background))',
  				foreground: 'hsl(var(--sidebar-foreground))',
  				primary: 'hsl(var(--sidebar-primary))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				accent: 'hsl(var(--sidebar-accent))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))',
  				ring: 'hsl(var(--sidebar-ring))'
  			},
        'purple-50': '#f5f3ff', 
        'purple-100': '#ede9fe',
        'purple-200': '#ddd6fe',
        'purple-600': '#7c3aed',
        'purple-700': '#6d28d9',
        'login-button-purple': 'hsl(249 66% 63%)', 
        'login-button-purple-hover': 'hsl(249 66% 58%)',
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)',
        btn: '3px', 
        xl: 'calc(var(--radius) + 4px)', 
        '2xl': '1rem', 
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
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        'pulse-heart': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.15)' },
        },
        'pulse-icon': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.15)' },
        }
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in-up': 'fade-in-up 0.6s ease-out forwards',
        'pulse-heart': 'pulse-heart 1.5s ease-in-out infinite',
        'pulse-icon': 'pulse-icon 1.5s ease-in-out infinite',
  		},
      boxShadow: { 
        'text': '0 1px 3px rgba(0,0,0,0.3), 0 1px 2px rgba(0,0,0,0.16)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)', 
      }
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

