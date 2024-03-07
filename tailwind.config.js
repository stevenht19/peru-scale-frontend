/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        taskDetail: {
          from: {
            transform: 'translateX(-100%)',
            opacity: 0,
          }, to: {
            transform: 'translateX(0)',
            opacity: 1,
          }
        }
      },
      animation: {
        taskDetail: 'taskDetail .22s ease'
      },
    },
  },
  plugins: [],
}

