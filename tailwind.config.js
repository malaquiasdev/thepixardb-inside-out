module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    fontFamily: {
      'sans': ['Montserrat', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      'body': ['Montserrat', 'Roboto', 'sans-serif'],
    }
  },
  plugins: [],
}
