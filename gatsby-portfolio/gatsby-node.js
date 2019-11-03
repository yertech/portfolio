const each = require("lodash/each")
const find = require("lodash/find")
const path = require("path")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const pageTemplate = path.resolve("./src/template/page.js")
    resolve(
      graphql(
        `
          {
            allPagesJson {
              edges {
                node {
                  slug
                  locale
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const pages = result.data.allPagesJson.edges

        each(pages, page => {
          page = page.node
          //   $slugLocale = page.locale === 'en-US' ? '' : `/${page.locale}`
          $slugLocale = page.locale === "en-US" ? "" : `/fr`
          $slug =
            page.slug === "home"
              ? `${$slugLocale}/`
              : `${$slugLocale}/${page.slug}`
          createPage({
            path: $slug,
            component: pageTemplate,
            context: {
              locale: page.locale,
            },
          })
        })
      })
    )
  })
}
