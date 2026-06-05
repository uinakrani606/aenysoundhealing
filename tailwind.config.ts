import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
       screens: {
         tablet: "991px",
        xs: "480px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },  
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        text: "var(--color-text)",
        accent: "var(--color-accent)",
        orange: "var(--color-orange)",
        green: "var(--color-green)",
        border: "var(--color-border)",
        black: "var(--color-black)",
        transparent: "var(--color-transparent)",
        white: "var(--color-white)",
        "dark-green": "var(--color-dark-green)",
        glass: "var(--color-glass)",
        muted: "var(--color-muted)",
        light: "var(--color-light)",
        overlay: "var(--color-overlay)",
      },
      fontSize: {
        "heading-xl": ["var(--font-heading-xl)", "var(--line-xl)"],
        "heading-lg": ["var(--font-heading-lg)", "var(--line-lg)"],
        "heading-md": ["var(--font-heading-md)", "var(--line-md)"],
        "heading-sm": ["var(--font-heading-sm)", "var(--line-sm)"],
        "heading-xs": ["var(--font-heading-xs)", "var(--line-sm)"],
        "body": ["var(--font-body)", "var(--line-body)"],
        "small": ["var(--font-small)", "var(--line-small)"],
      },
      borderRadius: {
        lg: "var(--radius-lg)",
        md: "var(--radius-md)",
        sm: "var(--radius-sm)",
      },
      boxShadow: {
        soft: "var(--shadow-soft)",
        card: "var(--shadow-card)",
      },
      maxWidth: {
        container: "1280px",
      },
    },
  },
  plugins: [],
};
export default config;
