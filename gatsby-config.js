module.exports = {
  siteMetadata: {
    title: `Jun's room`,
    author: `Jun`,
    description: `我的作品展览馆。`,
    siteUrl: `https://juuust.com/`,
    social: {
      github: `leadream`,
    },
  },
  plugins: [
    'gatsby-plugin-stylus',
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_blank",
              rel: "noopener noreferrer"
            }
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 640,
            }
          },
          `gatsby-remark-copy-linked-files`
        ]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/content/blog`,
      },
    },
    // 谷歌统计插件
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        // your google analytics tracking id
        trackingId: `UA-121774282-2`,
        // Puts tracking script in the head instead of the body
        head: false,
        // enable ip anonymization
        anonymize: true,
      },
    }
  ]
}