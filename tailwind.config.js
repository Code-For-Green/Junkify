module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'russo': ['Russo One', 'sans-serif']
      },
      spacing: {
        'spacing-mobile': '500px'
      },
      backgroundImage: theme => ({
        'hero-pattern': "url('/img/background1.png')",
        // 'interchange': "url('/img/interchange-min.jpg')",
        // 'highway': "url('/img/highway-min.jpg')",
        // 'road': "url('/img/road-min.jpg')",
      }),

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
