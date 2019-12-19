require('dotenv').config({
  path: '.env',
})

module.exports = {
  siteMetadata: {
    siteTitle: 'Phat Pham',
    siteTitleAlt: 'Phat Pham | OnRoads.xyz',
    siteHeadline: 'Phat Pham | OnRoads.xyz',
    siteDescription: 'I\'m Phat Pham, a lifelong learner, tech enthusiast & open source lover based in Saigon Vietnam.',
    siteUrl: 'https://onroads.xyz',
    author: '@phattpham9',
    siteLanguage: 'en',
    siteImage: '/logo.png',
    basePath: '/',
    blogPath: '/blog',
    tagsPath: '/tags',
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
    externalLinks: [{
      name: 'Email',
      url: 'mailto:phatpham9@gmail.com',
    }, {
      name: 'GitHub',
      url: 'https://github.com/phatpham9',
    }, {
      name: 'RSS',
      url: 'https://onroads.xyz/rss.xml',
    }],
    showLineNumbers: true,
  },
  plugins: [
    {
      resolve: '@lekoarts/gatsby-theme-minimal-blog',
      options: {},
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
        description: 'I\'m Phat Pham, a lifelong learner, tech enthusiast & open source lover based in Saigon Vietnam.',
        start_url: '/?utm_source=pwa',
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
          runtimeCaching: [{
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
}
