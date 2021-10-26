module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
    },
    screens: {
      xl: {"max": "1250px"},
      lg: {'max': '1023px'},
      md: {'max': '767px'},
      sm:{'max': '540px'},
      xsm:{"max": '375px'},
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
