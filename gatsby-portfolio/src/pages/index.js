import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"

import "rsuite/dist/styles/rsuite-default.min.css"
import Layout from "../components/layout"
import SEO from "../components/seo"
import About from "../components/about.js"
import Contact from "../components/contact.js"
import Banner from "../components/banner.js"
import JobHistory from "../components/jobhistory.js"
import Services from "../components/services.js"

class IndexPage extends React.Component {
    render() {
        const btnData = this.props.data.cosmicjsButtons.metadata
        const pageDataEN = this.props.data.cosmicjsPages.metadata
        const peopleData = this.props.data.allCosmicjsPeople.edges
        const serviceData = this.props.data.allCosmicjsServices.edges
        const projectData = this.props.data.allCosmicjsProjects.edges
        
        return ( <Layout>
                    <SEO title="Home" keywords={[`cosmicjs`,`application`,`react`]}/>
                    <Banner btnData={btnData} bannerPageData={pageDataEN}/>
                    <About btnData={btnData} aboutPageData={pageDataEN}/>
                    <Services/>         
                    <JobHistory/>
                    <Contact name="contact" contactEmail={pageDataEN.contact_email}/>
                  </Layout>
                )
    }
}

IndexPage.propTypes = {
    data: PropTypes.object,
}

export const query = graphql `
  query Index {
    cosmicjsPages(slug: { eq: "home-en" }) {
      metadata {
        about_title
        about_description
        contact_email
        banner_msg
        banner_name
        banner_desc
      }
    }
    cosmicjsButtons(slug: { eq: "buttons" }) {
      metadata {
        downloadresumehtml
        hireme
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