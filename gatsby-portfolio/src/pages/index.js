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
        const serviceData = this.props.data.allCosmicjsServices.edges
        const projectData = this.props.data.allCosmicjsProjects.edges
        
        return ( <Layout>
                    <SEO title="Home" keywords={[`cosmicjs`,`application`,`react`]}/>
                    <Banner btnData={btnData} bannerPageData={pageDataEN}/>
                    <About btnData={btnData} aboutPageData={pageDataEN}/>
                    <Services servicesPageData={pageDataEN} serviceData={serviceData}/>         
                    <JobHistory jobsPageData={pageDataEN}/>
                    <Contact name="contact" btnData={btnData} contactPageData={pageDataEN}/>
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
        banner_msg
        banner_name
        banner_desc
        service_title
        service_description
        job_title
        job_description
        contact_title
        contact_description
        contact_number
        contact_email
      }
    }
    cosmicjsButtons(slug: { eq: "buttons" }) {
      metadata {
        downloadresumehtml
        downloadresume_title
        hireme
        hireme_title
      }
    }
    allCosmicjsServices {
      edges {
        node {
          title
          metadata {
            class_name
            title
            description
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