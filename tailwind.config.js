/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./dist/*.html'],
  theme: {
    extend: {
      keyframes: {
        move: {
          '0%': { transform: 'translateY(-100%)',opacity:'0' },
          '100%': { transform: 'translateY(-50%)',opacity:'1' },

        },
        move_left:{
          '0%': { transform: 'translateX(-100%)',opacity:'0' },
          '100%': { transform: 'translateX(0)',opacity:'1' },
        },
        fadeOut:{
          '0%': { opacity:'0' },
          '100%': {opacity:'1' },
        },
        openslid:{
          '0%': { width:'0' },
          '100%': {width:'40%' },
        }
      },
      animation: {
        'move': 'move 2s ease',
        'left': 'move_left 1.8s ease',
        'fade-out': 'fadeOut 4s ease',
        'openslid': 'openslid 1s ease',
      }
    },
  },
  plugins: [],
}

