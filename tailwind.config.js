module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      boxShadow: {
        customShadow: 'rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;'
      }
    }
  },
  plugins: []
}
