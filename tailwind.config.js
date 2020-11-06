module.exports = {
  plugins: [require('@tailwindcss/typography')],
  purge: ['./src/**/*.html', './src/**/*.jsx'],
  future: {
    purgeLayersByDefault: true,
  },
}
