module.exports = {
  use: [
    '@neutrinojs/airbnb',
    [
      '@neutrinojs/react',
      {
        html: {
          title: 'Combat Tracker',
          links: [
            { href: "./static/manifest.webmanifest", rel: "manifest"},
            { href: "./static/icon-256.png", rel: "shortcut icon"},
            { href: "./static/icon-256.png", rel: "apple-touch-icon"},
          ]
        }
      }
    ],
    [
      '@neutrinojs/style-loader',
      {
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
    },
  ],

  env: {
    NODE_ENV: {
      production: {
        use: ['@neutrinojs/pwa', {relativePaths: true}]
      }
    }
  }
};
