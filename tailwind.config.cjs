/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "rgb(99, 102, 241)",
        secondaryColor: "rgb(161, 163, 247)",
        primaryText: "rgb(255,255,255)",
        secondaryText: "rgb(174, 178, 183)",
        bgDark1: "rgb(8, 11, 18)",
        bgDark2: "rgb(16, 21, 35)",
        bgDark3: "rgb(23, 32, 53)",
        bgDark3Hover: "rgb(55, 56, 62)",
        bgDarkTransparent: "rgb(8, 11, 18, 0.7)",
        bgDarkTransparentDarker: "rgb(0,0,0,0.5)",
        bgDarkTransparentLighter: "rgb(23, 32, 53, 0.7)",
        mainBorder: "rgb(255,255,255,0.15)",
        mainBorderDarker: "rgb(255,255,255,0.07)",
        quoteIconColor: "rgb(178, 184, 205)"
      },
      fontFamily: {
        Inter: "Inter",
      },
      screens: {
        xs: "530px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",      
        "2xl": "1536px",
      },
    },
  },
};

