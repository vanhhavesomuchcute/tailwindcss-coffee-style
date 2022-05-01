module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Karla: ['Karla', 'sans-serif']
      },
      colors: {
        'light-coffee': '#C89F94'
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