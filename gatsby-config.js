require('dotenv').config({
  path: '.env',
});

module.exports = {
  siteMetadata: {
    siteTitle: 'Phat Pham',
    siteTitleAlt: "Hi there 👋, I'm Phat Pham!",
    siteHeadline: "Hi there 👋, I'm Phat Pham!",
    siteDescription:
      'A lifelong learner, tech enthusiast & open source lover based in Ho Chi Minh Vietnam',
    siteUrl: 'https://onroads.xyz',
    siteLanguage: 'en',
    siteImage: '/logo.png',
  },
  plugins: [
    {
      resolve: '@lekoarts/gatsby-theme-minimal-blog',
      options: {
        formatString: 'YYYY-MM-DD',
        navigation: [
          {
            title: 'Blog',
            slug: '/blog',
          },
          {
            title: 'About',
            slug: '/about',
          },
        ],
        externalLinks: [
          {
            name: 'GitHub',
            url: 'https://github.com/phatpham9',
          },
          {
            name: 'Contact',
            url: 'mailto:phat@onroads.xyz',
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'GTM-T3HJN3G',

        // Include GTM in development.
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,

        // datalayer to be set before GTM is loaded
        // should be an object or a function that is executed in the browser
        // Defaults to null
        defaultDataLayer: {
          platform: 'gatsby',
        },

        // Specify optional GTM environment details.
        // gtmAuth: 'YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING',
        // gtmPreview: 'YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME',
        // dataLayerName: 'YOUR_DATA_LAYER_NAME',
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Phat Pham | OnRoads.xyz',
        short_name: 'OnRoads.xyz',
        description:
          'A lifelong learner, tech enthusiast & open source lover based in Ho Chi Minh Vietnam',
        start_url: '/?utm_source=pwa',
        scope: '/',
        background_color: '#191f2c',
        theme_color: '#191f2c',
        display: 'standalone',
        icon: 'static/logo.png',
      },
    },
    {
      resolve: 'gatsby-plugin-offline',
      options: {
        workboxConfig: {
          runtimeCaching: [
            {
              // Use cacheFirst since these don't need to be revalidated (same RegExp
              // and same reason as above)
              urlPattern: /(\.js$|\.css$|static\/)/,
              handler: 'CacheFirst',
            },
            {
              // page-data.json files are not content hashed
              urlPattern: /^https?:.*\page-data\/.*\/page-data\.json/,
              handler: 'NetworkFirst',
            },
            {
              // Add runtime caching of various other page resources
              urlPattern: /^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/,
              handler: 'StaleWhileRevalidate',
            },
            {
              // Google Fonts CSS (doesn't end in .css so we need to specify it)
              urlPattern: /^https?:\/\/fonts\.googleapis\.com\/css/,
              handler: 'StaleWhileRevalidate',
            },
          ],
        },
      },
    },
    'gatsby-plugin-sitemap',
    'gatsby-plugin-netlify',
  ],
};
