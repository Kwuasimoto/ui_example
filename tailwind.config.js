/** @type {import('tailwindcss').Config} */

module.exports = {
  plugins: ["prettier-plugin-tailwindcss"],
  content: ["./src/**/*.{jsx,tsx,html,js,ts}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      sans: ['"Segoe UI"', "Roboto", "sans-serif"],
    },
    extend: {
      screens: {
        waf: "3480px",
        xs: "540px",
      },
      borderColor: {
        primary: {
          dark: "#424855",
        },
        secondary: {
          dark: "#aaafb7",
        },
        tertiary: {
          dark: "#2f3949",
        },
      },
      textColor: {
        primary: {
          dark: "#e5e7eb",
        },
        secondary: {
          dark: "#babec4",
        },
        tertiary: {
          dark: "#808794",
        },
      },
      colors: {
        primary: {
          dark: "#111827",
        },
        secondary: {
          dark: "#465772",
        },
        tertiary: {
          dark: "#030712",
        },
      },
    },
  },
};
