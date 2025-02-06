module.exports = {
    content: [
      './src/**/*.{html,js,jsx,ts,tsx}',
    ],
    theme: {
      extend: {
        colors: {
          primary: '#191970', // Example color used for the gradient (Midnight Blue)
          secondary: '#5F9EA0', // Example secondary color for the gradient (Cadet Blue)
          
        },
        fontFamily: {
          poppins: ['Poppins', 'sans-serif'], // Make sure you have this font imported in your HTML or CSS
        },
      },
    },
    plugins: [],
  }
  