import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: '#1773E2',
        gray: '#F5F5F5'
      }
    },
    screens: {
      'xs': '360px',
      '5xl': '412px',
      '4xl': '540px',
      'sm': '640px',
      'md': '768px',
      'lg': '1200px',
      'xl': '1500px',
      '2xl': '1800px'
    },
  },
  plugins: [require('flowbite/plugin')],
}
export default config
