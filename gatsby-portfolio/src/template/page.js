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

class PageTemplate extends React.Component {
  state = {
    isHeaderFixed: false,
  }

  listenScrollEvent = e => {
    if (window.scrollY > 100) {
      this.setState({ isHeaderFixed: true })
    } else {
      this.setState({ isHeaderFixed: false })
    }
  }

  componentDidMount() {
    if (typeof window !== "undefined") {
      // eslint-disable-next-line global-require
      require("smooth-scroll")('a[href*="#"]')
    }
    //new WOW().init()
    window.addEventListener("scroll", this.listenScrollEvent)
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.listenScrollEvent)
  }

  render() {
    const btnData = this.props.data.allCosmicjsButtons.edges[0].node.metadata
    const pageData = this.props.data.cosmicjsPages.metadata
    const serviceData = this.props.data.allCosmicjsServices.edges
    const jobsData = this.props.data.allCosmicjsJobs.edges
    const projectData = this.props.data.allCosmicjsProjects.edges
    const localeLight = this.props.pageContext.locale === "en-US" ? "en" : "fr"

    return (
      <Layout
        headerPageData={pageData}
        locale={localeLight}
        isHeaderFixed={this.state.isHeaderFixed}
      >
        <SEO title="Home" keywords={[`cosmicjs`, `application`, `react`]} />
        <Banner btnData={btnData} bannerPageData={pageData} />
        <About btnData={btnData} aboutPageData={pageData} />
        <Services servicesPageData={pageData} serviceData={serviceData} />
        <JobHistory jobsPageData={pageData} jobsData={jobsData} />
        <Contact name="contact" btnData={btnData} contactPageData={pageData} />
      </Layout>
    )
  }
}

PageTemplate.propTypes = {
  data: PropTypes.object,
}

export const query = graphql`
  query Index($pageId: String!, $locale: String!) {
    cosmicjsPages(id: { eq: $pageId }) {
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
        menuhome
        menuabout
        menuservices
        menujobs
        menucontact
      }
    }
    allCosmicjsButtons(filter: { locale: { eq: $locale } }) {
      edges {
        node {
          metadata {
            downloadresumehtml
            downloadresume_title
            hireme
            hireme_title
          }
        }
      }
    }
    allCosmicjsServices(
      filter: { locale: { eq: $locale } }
      sort: { fields: metadata___order }
    ) {
      edges {
        node {
          title
          metadata {
            class_name
            title
            description
            order
          }
        }
      }
    }
    allCosmicjsJobs(
      filter: { locale: { eq: $locale } }
      sort: { fields: metadata___orderindex }
    ) {
      edges {
        node {
          title
          metadata {
            title
            subtitle
            location
            dates
            description
            dateshtml
            orderindex
          }
        }
      }
    }
    allCosmicjsProjects(filter: { locale: { eq: $locale } }) {
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

export default PageTemplate
