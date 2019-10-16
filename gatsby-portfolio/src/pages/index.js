import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"

import "rsuite/dist/styles/rsuite-default.min.css"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Projects from "../components/projects.js"
import Work from "../components/work.js"
import About from "../components/about.js"
import Contact from "../components/contact.js"

class IndexPage extends React.Component {
    render() {
        const pageData = this.props.data.cosmicjsPages.metadata
        const peopleData = this.props.data.allCosmicjsPeople.edges
        const serviceData = this.props.data.allCosmicjsServices.edges
        const projectData = this.props.data.allCosmicjsProjects.edges
        const styles = {
            splash: {
                background: `#000000`,
                paddingTop: '70px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-start',
            },
            splashPhrase: {
                width: '70%',
                paddingLeft: '20%',
                color: '#ffffff',
            },
        }
        if (pageData.splash_image) {
            styles.splash.background = `url(${pageData.splash_image.url})`
            styles.splash.backgroundSize = `cover`
            styles.splash.backgroundRepeat = 'no-repeat'
            styles.splash.backgroundPosition = 'center'
        }
        return ( <Layout>
                  <SEO title="Home" keywords={[`cosmicjs`,`application`,`react`]}/>
                  <section style={styles.splash} className="section-containersplash">
                  {
                    pageData.splash_phrase?
                      <div className="splash-phrase"style={styles.splashPhrase}>
                      <h2 style={{fontSize:'2.5rem'}}>{pageData.splash_phrase}</h2>
                      </div>
                    :null
                  }
                  </section>
                  <Work serviceData={serviceData} pageData={pageData}/>
                  <Projects projectData={projectData}/>
                  <About peopleData={peopleData} pageData={pageData}/>
                  <Contact name="contact" contactEmail={pageData.contact_email}/>
                  </Layout>
                )
    }
}

IndexPage.propTypes = {
    data: PropTypes.object,
}

export const query = graphql `
  query Index {
    cosmicjsPages(slug: { eq: "home" }) {
      metadata {
        splash_image {
          url
        }
        splash_phrase
        contact_email
        service_description
        people_description
      }
    }
    allCosmicjsPeople {
      edges {
        node {
          title
          metadata {
            image {
              url
            }
            job_title
          }
        }
      }
    }
    allCosmicjsServices {
      edges {
        node {
          title
          metadata {
            icon
            description
            summary
          }
        }
      }
    }
    allCosmicjsProjects {
      edges {
        node {
          title
          metadata {
            date
            image {
              url
            }
            gallery
            summary
            description
          }
        }
      }
    }
  }
`


export default IndexPage