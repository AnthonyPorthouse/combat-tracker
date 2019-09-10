module.exports = {
  use: [
    '@neutrinojs/airbnb',
    [
      '@neutrinojs/react',
      {
        html: {
          title: 'Combat Tracker',
          links: [
            {
              href: './static/manifest.webmanifest',
              rel: 'manifest'
            },
            {
              href: './static/icon-256.png',
              rel: 'shortcut icon'
            },
            {
              href: './static/icon-256.png',
              rel: 'apple-touch-icon'
            },
          ],
          meta: [
            {
              name: 'theme-color',
              content: '#FFFFFF',
            },
          ],
        },
      },
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
        use: [
          (neutrino) => {
            neutrino.config.output.set('publicPath', '/combat-tracker/');
          },
          [
            '@neutrinojs/pwa',
            {
              relativePaths: false,
              ServiceWorker: {
                publicPath: '/combat-tracker/sw.js',
                scope: 'https://porthou.se/combat-tracker',
              },
              publicPath: '/combat-tracker/',
            },
          ],
        ],
      },
    },
  },
};
