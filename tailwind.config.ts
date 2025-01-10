import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
      },
      screens: {
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
        '3xl': '1536px',
        '4xl': '1920px',
        // => @media (min-width: 1920px) { ... }

        '5xl': '2560px',
        // => @media (min-width: 2560px) { ... }
        // => @media (min-width: 1536px) { ... }
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        // vujahday: ["Vujahday Script", "cursive"],
      },
    },
  },
  plugins: [],
} satisfies Config;
