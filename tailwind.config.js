module.exports = {
  corePlugins: {
    container: false,
  },
  plugins: [
    require('@tailwindcss/typography'),
    ({ addComponents, theme }) => {
      addComponents({
        '.container': {
          maxWidth: theme('screens.sm'),

          '@screen sm': {
            maxWidth: theme('screens.sm'),
          },
          '@screen md': {
            maxWidth: theme('screens.md'),
          },
        },
      })
    },
  ],
  purge: ['./src/**/*.html', './src/**/*.jsx'],
  future: {
    purgeLayersByDefault: true,
  },
}
