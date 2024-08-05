/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "!./src/pages/Tutorial/courseWise/details/Ignore/*",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#ff0000",
          dark: "#00ff00",
        },
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        darrk: {
          primary: "#cf00ff",
          "primary-content": "#1F2937",
          secondary: "#539500",
          "secondary-content": "#27374D",
          accent: "#e9ffff",
          "accent-content": "#0B2447",
          neutral: "#FFFFFF",
          "base-100": "#1f2937",
          "base-400": "#FFFFFF",
          "base-500": "#1F2937",
          "base-600": "#f2ffff",
          info: "#00b3ff",
          "info-content": "#F5F7F8",
          success: "#008e40",
          warning: "#ffb400",
          error: "#ff6680",
          ".cardbg": { "background-color": "#35374B" },
          ".body": {
            "background-color": "#1f2937",
            color: "#FFFFFF",
          },
          ".student-header": {
            "background-image":
              "linear-gradient(to right, #76ABAE 10%, skyblue 50%, #9EC8B9 90%)",
          },
        },
        lightt: {
          primary: "#14e0dd",
          "primary-content": "#f3f4f6",
          secondary: "#0044ee",
          "secondary-content": "#DDE6ED",
          accent: "#e9ffff",
          "accent-content": "#91DDCF",
          neutral: "#9BBEC8",
          "base-100": "#ecfff2",
          "base-100": "#f3f4f6",
          "base-200": "#DBEAFE",
          "base-400": "#272929",
          "base-500": "#f2ffff",
          "base-600": "#272929",
          info: "#00afff",
          "info-content": "#021526",
          success: "#009264",
          warning: "#ff9900",
          error: "#f13650",
          ".cardbg": { "background-color": "#E3F4F4" },
          ".body": {
            "background-color": "#f3f4f6",
            color: "#000000",
          },
          ".student-header": {
            "background-image":
              "linear-gradient(to right, teal 10%, skyblue 50%, teal 90%)",
          },
        },
      },
    ],
  },
};

/*
theme property name
primary,secondary,accent,neutral,primary-content,secondary-content,accent-content,newutral-content,base-100,base-200,base-300,base-content,info,success,warning,error,info-content,success-content,warning-content,error-content








*/
