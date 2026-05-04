/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#D4AF37',
          light:   '#E8CC6A',
          dark:    '#A88B1E',
          pale:    '#F5E9B8',
        },
        charcoal: {
          DEFAULT: '#2C2C2C',
          light:   '#444444',
          dark:    '#1A1A1A',
        },
        cream: {
          DEFAULT: '#FAF7F2',
          warm:    '#F5EFE3',
          card:    '#FFFDF8',
        },
      },
      fontFamily: {
        display: ['Oswald', 'sans-serif'], 
        sans: ['Poppins', 'sans-serif'],
        accent: ['Montserrat', 'sans-serif'],
      },
    colors: {
      jsgold: '#D4AF37',
      charcoal: '#2C2C2C',
      cream: '#FAF7F2',
      fontSize: {
            xs:   ['0.8rem',  { lineHeight: '1.5' }],
            sm:   ['0.95rem', { lineHeight: '1.6' }],
            base: ['1.05rem', { lineHeight: '1.7' }],
            lg:   ['1.2rem',  { lineHeight: '1.6' }],
            xl:   ['1.35rem', { lineHeight: '1.5' }],
            '2xl':['1.6rem',  { lineHeight: '1.4' }],
            '3xl':['2rem',    { lineHeight: '1.3' }],
            '4xl':['2.5rem',  { lineHeight: '1.2' }],
            '5xl':['3rem',    { lineHeight: '1.15'}],
            '6xl':['3.75rem', { lineHeight: '1.1' }],
      },
      },
      boxShadow: {
        'gold-sm': '0 2px 12px rgba(212,175,55,0.18)',
        'gold':    '0 4px 24px rgba(212,175,55,0.25)',
        'gold-lg': '0 8px 40px rgba(212,175,55,0.30)',
        'soft':    '0 2px 16px rgba(0,0,0,0.06)',
        'soft-md': '0 4px 24px rgba(0,0,0,0.09)',
      },
      animation: {
        'fade-up':    'fadeUp 0.6s ease both',
        'fade-in':    'fadeIn 0.4s ease both',
        'shimmer':    'shimmer 2s linear infinite',
      },
      keyframes: {
        fadeUp:  { from: { opacity: 0, transform: 'translateY(20px)' }, to: { opacity: 1, transform: 'translateY(0)' } },
        fadeIn:  { from: { opacity: 0 }, to: { opacity: 1 } },
        shimmer: { from: { backgroundPosition: '-200% 0' }, to: { backgroundPosition: '200% 0' } },
      },
    },
  },
  plugins: [],
}
