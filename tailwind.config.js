/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    'lg:order-1',
    'lg:order-2',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '24px',
        'lg': '46px',
      }
    },
    fontFamily: {
      'fraunces': ["Fraunces", "serif"],
      'barlow': ["Barlow", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        'triangle': 'linear-gradient(to bottom right, #ffffff00 0%, #ffffff00 50%, #ffffff 50%, #ffffff 100%)',
      },
      colors: {
        primary: {
          'soft-red': 'hsl(7, 99%, 70%)',
          'yellow': 'hsl(51, 100%, 49%)',
          'dark-desaturated-cyan': 'hsl(167, 40%, 24%)',
          'dark-blue': 'hsl(198, 62%, 26%)',
          'dark-moderate-cyan': 'hsl(168, 34%, 41%)',
          'light-blue': '#55BFEF',
        },
        neutral: {
          'very-dark-desaturated-blue': 'hsl(212, 27%, 19%)',
          'very-dark-grayish-blue': 'hsl(213, 9%, 39%)',
          'dark-grayish-blue': 'hsl(232, 10%, 55%)',
          'grayish-blue': 'hsl(210, 4%, 67%)',
          'white': 'hsl(0, 0%, 100%)',
        },
      },
    },
  },
  plugins: [],
}

