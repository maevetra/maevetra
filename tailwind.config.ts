import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  important: true,
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'black': '#000000',
      'white': '#FFFFFF',
      'lgrey': '#EAEAEA',
      'nblue': '#580C0C',
      'dred' : '#580C0C',
      'dgrey': '#787878',
    },
    
    extend: {
      fontFamily: {
        rubik: ['var(--font-rubik)'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        typing: "typing 2s",
        disc: "spin 10s linear infinite"
      },
      keyframes: {
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden"
          },
          "100%": {
            width: "100%"
          }  
        },
        blink: {
          "50%": {
            borderColor: "transparent"
          },
          "100%": {
            borderColor: "black"
          }  
        },
        spin: {
          "0%": {
            transform: "rotate(0deg)"
          },
          "100%": {
            transform: "rotate(360deg)"
          }
        }
      },
    },
  },
  plugins: [],
}
export default config
