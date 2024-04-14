/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cornflowerblue: {
          "100": "#9fb2ff",
          "200": "#93a9ff",
          "300": "#829dff",
          "400": "#819cff",
          "500": "#819aff",
          "600": "#809aff",
          "700": "#8099ff",
          "800": "rgba(140, 177, 255, 0.6)",
        },

      },
      fontFamily: {
        'montserrat': ["Montserrat", 'sans-serif'],
        'roboto': ["Roboto", 'sans-serif'],
        'quicksand': ["Quicksand", 'sans-serif']
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};


