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
    //new WOW().init()
    window.addEventListener("scroll", this.listenScrollEvent)
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.listenScrollEvent)
  }

  render() {
    const btnData = this.props.data.allButtonsJson.edges[0].node.metadata
    const pageData = this.props.data.pagesJson.metadata
    const serviceData = this.props.data.allServicesJson.edges
    const jobsData = this.props.data.allJobsJson.edges
    const menuData = this.props.data.allMenusJson.edges
    const localeLight = this.props.pageContext.locale === "en-US" ? "en" : "fr"

    return (
      <Layout
        menuData={menuData}
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
  query Index($locale: String!) {
    pagesJson(locale: { eq: $locale }) {
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
    allButtonsJson(filter: { locale: { eq: $locale } }) {
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
    allMenusJson(
      filter: { locale: { eq: $locale } }
      sort: { fields: metadata___order_index }
    ) {
      edges {
        node {
          metadata {
            title
            hash
          }
        }
      }
    }
    allServicesJson(
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
    allJobsJson(
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
  }
`

export default PageTemplate
