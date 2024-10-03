/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      maxWidth: {
        135: "540px", // 540px
      },
      backgroundImage: {
        "light-header": "url('/src/images/bg-desktop-light.jpg')",
        "dark-header": "url('/src/images/bg-desktop-dark.jpg')",
        "light-header-mobile": "url('/src/images/bg-mobile-light.jpg')",
        "dark-header-mobile": "url('/src/images/bg-mobile-dark.jpg')",
        check: "url('/src/images/icon-check.svg')",
      },
      colors: {
        "bright-blue": "rgba(var(--bright-blue))",
        "linear-gradient-1": "rgba(var(--linear-gradient-1))",
        "linear-gradient-2": "rgba(var(--linear-gradient-2))",
        "primary-color": "rgba(var(--primary-color))",
        "element-color": "rgba(var(--element-color))",
        "secondary-color": "rgba(var(--secondary-color))",
        "text-color": "rgba(var(--text-color))",
        "text-color-2": "rgba(var(--text-color-2))",
        "text-color-hover": "rgba(var(--text-color-hover))",
        "border-color": "rgba(var(--border-color))",
      },
      fontFamily: {
        "josefin-sans": ['"Josefin Sans",sans-serif'],
      },
    },
  },
  plugins: [],
};
