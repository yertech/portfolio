import { useStaticQuery, graphql } from "gatsby"

export const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SiteQueryHook {
        site {
          siteMetadata {
            languages {
              slug
              localized_name {
                en
                fr
              }
            }
          }
        }
      }
    `
  )
  return site.siteMetadata
}
