require("dotenv").config()

module.exports = {
  pathPrefix: "/",
  siteMetadata: {
    title: `Yertech`,
    description: `Yertech Fullstack developer`,
    author: `@gatsbyjs`,
    languages: [
      { slug: "", localized_name: { en: "en", fr: "en" } },
      { slug: "fr", localized_name: { en: "fr", fr: "fr" } },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/img`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `static/img/fav.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-less`,
      options: {
        javascriptEnabled: true,
      },
    },
    // {
    //   resolve: `gatsby-source-cosmicjs`,
    //   options: {
    //     bucketSlug: "yertech-portfolio",
    //     objectTypes: [
    //       "buttons",
    //       "pages",
    //       "services",
    //       "projects",
    //       "jobs",
    //       "menus",
    //     ],
    //     apiAccess: {
    //       read_key: "advOoDk1wXfKCinwZavr0ql3nO3IQhHK91NPccnqqv4gNOSWV2",
    //     },
    //   },
    // },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
