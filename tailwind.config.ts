import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "orange" : "hsl(25, 97%, 53%)",
        "white" : "hsl(0, 0%, 100%)",
        "light-grey": "hsl(217, 12%, 63%)",
        "medium-grey": "hsl(216, 12%, 54%)",
        "dark-blue": "hsl(213, 19%, 18%)",
        "dark-blue-gradient-from": "hsl(213, 20%, 15%)",
        "dark-blue-gradient-to": "hsl(213, 42%, 11%)",
        "very-dark-blue": "hsl(216, 12%, 8%)"
      }
    },
  },
  plugins: [],
}
export default config
