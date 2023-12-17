/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'head': ["'Philosopher', sans-serif"],
      },
      colors: {
        'brand': '#0F3775',
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["dracula"],
    // themes: [
    //   {
    //     dracula: {
    //       ...require("daisyui/src/theming/themes")["dracula"],
    //       // primary: "blue",
    //       secondary: "#289DF2",
    //     },
    //   },
    // ],
  },

}