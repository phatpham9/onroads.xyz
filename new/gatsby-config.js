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
      resolve: 'gatsby-plugin-feed',
      options: {
        query: `
          {
            site {
              siteMetadata {
                title: siteTitle
                description: siteDescription
                siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allPost } }) => {
              return allPost.nodes.map(post => {
                return {
                  title: post.title,
                  date: post.date,
                  excerpt: post.excerpt,
                  url: site.siteMetadata.siteUrl + post.slug,
                  guid: site.siteMetadata.siteUrl + post.slug,
                  custom_elements: [{
                    'content:encoded': post.html
                  }],
                }
              })
            },
            query: `
              {
                allPost(sort: { fields: date, order: DESC }) {
                  nodes {
                    title
                    date(formatString: "MMMM D, YYYY")
                    excerpt
                    slug
                    html
                  }
                }
              }
            `,
            output: 'rss.xml',
            title: 'Phat Pham | OnRoads.xyz',
          },
        ],
      },
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
        icon: 'static/logo.png',
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-netlify',
    // 'gatsby-plugin-webpack-bundle-analyser-v2',
  ],
}
