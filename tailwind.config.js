/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
      'pink': '#EE1D52',
      'blue': '#00F2EA',
      'lightGrey': '#121212',
    },
    fontFamily: {
      'display-bold': 'display-bold',
      'display-medium': 'display-medium',
      'display-regular': 'display-regular',
      'text-bold': 'text-bold',
      'text-medium': 'text-medium',
      'text-regular': 'text-regular'
    },
    screens:{
      'sm-esm': '350px',
      // => @media (min-width: 350px) { ... } #
      'esm': '480px',
      // => @media (min-width: 480px) { ... } #
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }
      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }

    },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
