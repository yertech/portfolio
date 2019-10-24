require("dotenv").config()

module.exports = {
  pathPrefix: "/",
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
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
    {
      resolve: `gatsby-source-cosmicjs`,
      options: {
        bucketSlug: "yertech-portfolio",
        objectTypes: ["buttons", "pages", "services", "projects", "jobs"],
        apiAccess: {
          read_key: "advOoDk1wXfKCinwZavr0ql3nO3IQhHK91NPccnqqv4gNOSWV2",
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
