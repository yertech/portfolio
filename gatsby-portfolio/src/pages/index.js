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
import Banner from "../components/banner.js"
import JobHistory from "../components/jobhistory.js"
import Services from "../components/services.js"

class IndexPage extends React.Component {
    render() {
        const pageData = this.props.data.cosmicjsPages.metadata
        const peopleData = this.props.data.allCosmicjsPeople.edges
        const serviceData = this.props.data.allCosmicjsServices.edges
        const projectData = this.props.data.allCosmicjsProjects.edges
        
        return ( <Layout>
                    <SEO title="Home" keywords={[`cosmicjs`,`application`,`react`]}/>
                    <Banner/>
                    <About peopleData={peopleData} pageData={pageData}/>                  
                    <Work serviceData={serviceData} pageData={pageData}/>
                    <JobHistory/>            
                    <Services/>         
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