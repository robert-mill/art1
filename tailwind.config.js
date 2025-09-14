/* eslint-disable @typescript-eslint/no-require-imports */
module.exports = {

  content:[
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/slices/**/*.{js,ts,jsx,tsx,mdx}",



  ],
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily:{
        sans:['var(--fontdm-sans)'],       
      }
    },
  },

  plugins: [require("@tailwindcss/typography")],

  variants: {
    extend: {},
  },
  
}
