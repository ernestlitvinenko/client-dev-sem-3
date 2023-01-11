/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "transparent": "transparent",
      "medAquamarine": "#68CCA1",
      "aquamarine": "#82FFC9",
      "iron": "#CCCCCC",
      "envy": "#84A98C",
      "como": "#52796F",
      "plantation": "#354F52",
      "oxford": "#2F3E46",
      "firefly": "#202E2D",
      "bunker": "#0D1117"
    },
    screen: {
      'sm': '576px',
      'md': "768px",
      'lg': "992px",
      'xl': "1200px"
    }
    // }
    // extend: {

    // },
  },
  plugins: [],
}
