/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily :{
      poppins:["Poppins"]
    },
    animation: {
      'gradient-xy': 'gradient-xy 15s ease infinite',
    },
    keyframes: {
      'gradient-xy': {
        '0%': {
          backgroundPosition: '0% 0%',
        },
        '50%': {
          backgroundPosition: '100% 100%',
        },
        '100%': {
          backgroundPosition: '0% 0%',
        },
      },
    },
  },
  plugins: [],
}