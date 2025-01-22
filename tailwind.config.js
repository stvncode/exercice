import tailwindAnimate from "tailwindcss-animate"

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/chronoxis/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      xs: ["0.625rem", { lineHeight: "0.875rem" }], // 10px font size, 14px line height
      sm: ["0.75rem", { lineHeight: "1rem" }], // 12px font size, 16px line height
      base: ["0.875rem", { lineHeight: "1.25rem" }], // 14px font size, 20px line height
      lg: ["1rem", { lineHeight: "1.5rem" }], // 16px font size, 24px line height
      xl: ["1.125rem", { lineHeight: "1.75rem" }], // 18px font size, 28px line height
      "2xl": ["1.25rem", { lineHeight: "1.75rem" }], // 20px font size, 28px line height
      "3xl": ["1.5rem", { lineHeight: "2rem" }], // 24px font size, 32px line height
      "4xl": ["1.875rem", { lineHeight: "2.25rem" }], // 30px font size, 36px line height
      "5xl": ["2.25rem", { lineHeight: "2.5rem" }], // 36px font size, 40px line height
      "6xl": ["3rem", { lineHeight: "1" }], // 48px font size, 48px line height
      "7xl": ["3.75rem", { lineHeight: "1" }], // 60px font size, 60px line height
      "8xl": ["4.5rem", { lineHeight: "1" }], // 72px font size, 72px line height
      "9xl": ["6rem", { lineHeight: "1" }], // 96px font size, 96px line height
    },
    container: {
      center: "true",
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      borderWidth: ["last"],
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          light: "hsl(var(--primary-light))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        button: {
          DEFAULT: "hsl(var(--button))",
          foreground: "hsl(var(--button-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        success: {
          DEFAULT: "hsl(var(--success))",
          foreground: "hsl(var(--success-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        warning: {
          DEFAULT: "hsl(var(--warning))",
          foreground: "hsl(var(--warning-foreground))",
          light: "hsl(var(--warning-light))",
          badge: "hsl(var(--warning-badge))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "pulse-fade-scale": {
          "0%, 100%": {
            opacity: "1",
            transform: "scale(1)",
          },
          "50%": {
            opacity: "0.5",
            transform: "scale(0.95)",
          },
        },
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "pulse-fade-scale": "pulse-fade-scale 2s ease-in-out infinite",
      },
    },
  },
  plugins: [tailwindAnimate],
}
