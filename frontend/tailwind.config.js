// @type {import('tailwindcss').Config}


export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
        theme: {
          extend: {
            colors: {
              'primary': "#135bec",
              'primarylight': "#11244a",
              "primary-dark": "#104dc4",
              "background-light": "#f6f6f8",
              "background-dark": "#101622",
              "card-dark": "#161e2c",
            },
            fontFamily: {
              display: ["Space Grotesk", "sans-serif"],
            },
            borderRadius: {
              DEFAULT: "0.25rem",
              lg: "0.5rem",
              xl: "0.75rem",
              full: "9999px",
            },
          },
        },
  
  plugins: [],
}