module.exports = {
  corePlugins: {
    container: false,
  },
  plugins: [
    require('@tailwindcss/typography'),
    ({ addComponents, theme }) => {
      addComponents({
        '.container': {
          marginInline: 'auto',
          paddingInline: theme('spacing.4'),
          maxWidth: theme('screens.sm'),

          // Breakpoints
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
