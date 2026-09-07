/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: "#F8F7F4",
          subtle: "#F1EFEB",
          card: "#FFFFFF",
          dark: "#0F0F11"
        },
        foreground: {
          DEFAULT: "#111111",
          muted: "#666666",
          subtle: "#999999",
          inverted: "#F8F7F4"
        },
        accent: {
          DEFAULT: "#0047FF",
          hover: "#0039CC",
          light: "#EBF1FF",
          dark: "#002B99"
        },
        border: {
          DEFAULT: "#E5E5DE",
          subtle: "#ECECE6",
          dark: "#2A2A2E"
        }
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
        display: ["var(--font-display)", "var(--font-sans)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"]
      },
      letterSpacing: {
        tighter: "-0.04em",
        tight: "-0.02em",
        wide: "0.04em",
        wider: "0.08em",
        widest: "0.15em"
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "pulse-subtle": "pulseSubtle 4s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulseSubtle: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.7" },
        }
      }
    },
  },
  plugins: [],
}
