module.exports = {
  use: [
    '@neutrinojs/airbnb',
    [
      '@neutrinojs/react',
      {
        html: {
          title: 'combat-tracker'
        }
      }
    ],
    ['@neutrinojs/style-loader', {
      loaders: [
        {
          loader: 'postcss-loader',
          options: {
            plugins: [require('tailwindcss'), require('autoprefixer')]
          }
        }
      ]
    },
    ],
    '@neutrinojs/jest',
    (neutrino) => {
      neutrino.config.resolve.alias.store.set('react-dom', '@hot-loader/react-dom');
    }
  ],
};
