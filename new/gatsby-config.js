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
    siteLanguage: 'en',
    siteImage: '/logo.png',
    author: '@phatpham9',
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
    }],
    showLineNumbers: true,
  },
  plugins: [
    {
      resolve: '@lekoarts/gatsby-theme-minimal-blog',
      options: {},
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Phat Pham | OnRoads.xyz',
        short_name: 'OnRoads.xyz',
        description: 'I\'m Phat Pham, a lifelong learner, tech enthusiast & open source lover based in Saigon Vietnam.',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#000',
        display: 'standalone',
        icons: [
          {
            src: '/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: '/apple-touch-icon-ipad-retina.png',
            sizes: '152x152',
            type: 'image/png',
          },
          {
            src: '/apple-touch-icon-iphone-retina.png',
            sizes: '120x120',
            type: 'image/png',
          },
          {
            src: '/apple-touch-icon-precomposed.png',
            sizes: '180x180',
            type: 'image/png',
          },
          {
            src: '/apple-touch-icon.png',
            sizes: '60x60',
            type: 'image/png',
          },
          {
            src: '/apple-touch-ipad.png',
            sizes: '76x76',
            type: 'image/png',
          },
        ],
      },
    },
    'gatsby-plugin-sitemap',
    'gatsby-plugin-offline',
    'gatsby-plugin-netlify',
    'gatsby-plugin-webpack-bundle-analyser-v2',
  ],
}
