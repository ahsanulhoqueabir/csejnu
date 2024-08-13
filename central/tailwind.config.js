/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      listStyleType: {
        none: "none",
        disc: "disc",
        decimal: "decimal",
        square: "square",
        roman: "upper-roman",
      },
      fontFamily: {
        philosopher: ["Philosopher", "sans-serif"],
        playwrite: ["Playwrite AT", "system-ui"],
        playfair: ["Playfair Display", "system-ui"],
        jacquard: ["Jacquard 12", "sans-serif"],
        grey: ["Grey Qo", "system-ui"],
        garamond: ["EB Garamond", "system-ui"],
        changa: ["Changa", "system-ui"],
        nova: ["Bona Nova SC", "system-ui"],
      },
    },
  },
  daisyui: {
    themes: [
      {
        nord: {
          primary: "#5B99C2",
          "primary-focus": "#434190",
          "primary-content": "#86A789",
          secondary: "#2E2E2E",
          "secondary-focus": "#252525",
          "secondary-content": "#F3F8FF", // used
          accent: "#37cdbe",
          "accent-focus": "#2aa79b",
          "accent-content": "#ffffff",
          neutral: "#3d4451",
          "neutral-focus": "#2a2e37",
          "neutral-content": "#ffffff",
          "base-100": "#EBF3E8",
          "base-200": "#B5CFB7",
          "base-300": "#D1E9F6",
          "base-content": "#86A789",
          info: "#2094f3",
          "info-content": "#092635", //used
          success: "#009485", // used
          warning: "#ff9900",
          error: "#ff5724",
        },
        dim: {
          primary: "#1A4870",
          "primary-focus": "#434190",
          "primary-content": "#ffffff",
          secondary: "#2E2E2E",
          "secondary-focus": "#252525",
          "secondary-content": "#04293A",
          accent: "#37cdbe",
          "accent-focus": "#2aa79b",
          "accent-content": "#041C32",
          neutral: "#3d4451",
          "neutral-focus": "#2a2e37",
          "neutral-content": "#ffffff",
          "base-100": "#27374D",
          "base-200": "#092635",
          "base-300": "#092635", // used
          "base-content": "#1f2937",
          info: "#2094f3",
          "info-content": "#F6F5F2",
          success: "#009485",
          warning: "#ff9900",
          error: "#ff5724",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
