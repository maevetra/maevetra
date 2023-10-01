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
      'nblue': '#28364C',
      'dgrey': '#878E99',
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
    },
  },
  plugins: [],
}
export default config
