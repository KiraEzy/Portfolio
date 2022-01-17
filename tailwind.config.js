module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
      'top-section': '#282c34'
    },
    minHeight: {
      '4/5': '80vh',
      '3/5': '60vh',
      '7/10': '70vh',
      '2/5': '40vh'
    },
    extend: {},
  },
  plugins: [],
}
