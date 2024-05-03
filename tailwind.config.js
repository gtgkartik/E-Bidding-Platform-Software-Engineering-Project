/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white1: "#fff",
        brown: {
          "100": "rgba(159, 50, 71, 0.5)",
          "200": "rgba(159, 50, 71, 0.1)",
          "300": "rgba(159, 50, 71, 0.6)",
          "400": "rgba(159, 50, 71, 0.06)",
        },
        gray1: {
          "100": "rgba(33, 36, 39, 0.5)",
          "200": "rgba(0, 0, 0, 0.5)",
          "300": "rgba(255, 255, 255, 0.17)",
          "400": "rgba(0, 0, 0, 0.4)",
          "500": "rgba(0, 0, 0, 0.6)",
          "600": "rgba(0, 0, 0, 0.1)",
          "700": "rgba(33, 36, 39, 0.3)",
        },
        white: "#fffcfc",
        black: "#212427",
        accent: "#9f3247",
        whitesmoke: {
          "100": "#f5f5f5",
          "200": "#f0f0f0",
        },
        grey: "#605d5e",
        light: "#f2f0f1",
        black1: "#000",
        snow: "#fefafa",
        "neutral-disabled-text": "#8a8a8a",
        "neutral-text-primary": "#181818",
        "neutral-gray-bg": "#f8f8f8",
        red: "#ff3030",
        dimgray: {
          "100": "#666",
          "200": "#5d5d5d",
        },
        "light-assents-accent1-primary": "#2d5bff",
        "neutral-gray-secondary": "#d7d7d7",
        text: "#fafafa",
        button2: "#db4444",
        "accent-accent-primary": "#ff782d",
        "accent-accent-quaternary": "#fff5ec",
        "gray-300": "#d0d5dd",
        "gray-700": "#344154",
        "primary-600": "#7e56d9",
        "primary-50": "#f9f5ff",
        "gray-500": "#667085",
      },
      spacing: {},
      fontFamily: {
        "title-16px-regular": "Poppins",
        "heading-24px-semibold": "Inter",
        roboto: "Roboto",
        "body-regular-small": "Mulish",
      },
      borderRadius: {
        "5xs-9": "7.9px",
        "59xl-7": "78.7px",
        "5xl-1": "24.1px",
        xl: "20px",
        "43xl": "62px",
        "29xl": "48px",
        "11xs-4": "1.4px",
        "10xs-3": "2.3px",
        "134xl": "153px",
        "21xl": "40px",
      },
    },
    fontSize: {
      base: "16px",
      "29xl": "48px",
      "2xs": "11px",
      sm: "14px",
      "8xs": "5px",
      "21xl": "40px",
      "5xl": "24px",
      xl: "20px",
      xs: "12px",
      lg: "18px",
      "13xl": "32px",
      "14xl-5": "33.5px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};