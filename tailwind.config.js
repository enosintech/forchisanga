/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        opensans:  "'Open Sans', sans-serif",
        mono: "monospace",
        ds: "'Dancing Script', cursive",
      },
      boxShadow: {
        '3xl' : '0 0 20px 0 white',
        '4xl' : '0 0 20px 0 black',
      },
      transitionTimingFunction: {
        "up": "cubic-bezier(0.8, 0, 1, 1)",
        "down": "cubic-bezier(0, 0, 0.2, 1)"
      },
      keyframes: {
        updown : {
          "0%" :{
            transform: 'translateY(50%)',
            
          },
          "100%" : {
            transform: "translateY(-50%)"
          }
        },
        astroBounce : {
          '0%' : {
            transform: 'scale(1)'
          },
          '100%' : {
            transform: 'scale(1.1)'
          }
        },
      },
      animation: {
        "updown": "updown 1s alternate infinite",
        'astrobounce' : 'astroBounce 10s alternate infinite',
        'cardbounce' : 'astroBounce 1s alternate infinite',
      }
    },
  },
  plugins: [],
}

