/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      colors: {
        'purple-8': '#8e4ec6',
        'indigo-9': '#3e63dd',
        'Header': '#262626',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(330deg, #8e4ec6 0%, #3e63dd 100%)',
      },
       animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}