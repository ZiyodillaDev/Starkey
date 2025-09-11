
import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  content: [
    './app.vue',
    './src/components/**/*.{vue,js,ts}',
    './src/layouts/**/*.vue',
    './src/pages/**/*.vue',
    './plugins/**/*.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f5f8ff',
          100: '#e8f0ff',
          200: '#c9dbff',
          300: '#a9c6ff',
          400: '#74a3ff',
          500: '#3e81ff',
          600: '#3267cc',
          700: '#254d99',
          800: '#193366',
          900: '#0c1a33'
        }
      }
    }
  },
  plugins: []
}
