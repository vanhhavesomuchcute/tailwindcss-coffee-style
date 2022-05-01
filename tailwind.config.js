module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Karla: ['Karla', 'sans-serif']
      },
      colors: {
        'coffee': {
          50: '#E8D6D0',
          200: '#C89F94',
          400: '#A25F48',
          600: '#744838',
        }
      },
      keyframes: {
        slideDown: {
          '0%': { opacity: 0, transform: 'translateY(-100%)' },
                  
          '100%': { opacity: 1, transform: 'translateY(0)' },
        }
      },
      animation: {
        slideDown: 'slideDown .8s ease-in-out forwards',
      }
    },
  },
  plugins: [],
}