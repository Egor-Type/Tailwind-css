module.exports = {
  content: ['./*.html'],
  darkMode: 'class',
  theme: {
    screens: {
      'lg': {'max': '992px'},
      'md': {'max': '768px'},
      'sm': {'max': '480px'}
    },

    container: {
      padding: '20px',
      center: true
    },

    extend: {
      colors: {
        yellow: '#facc15',
        lightblue: '#0ea5e9',
        darkblue: '#0c4a6e',
        lightgray: '#747474',
        darkgray: '#272727',
      }
    },
  },
  plugins: [],
}
