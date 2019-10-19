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
    componentDidMount(){
      var loadScript = function(src) {
        var tag = document.createElement('script');
        tag.async = false;
        tag.src = src;
        document.querySelector("body").appendChild(tag);
      }
      loadScript('js/vendor/jquery-2.2.4.min.js')
      //loadScript('https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossOrigin="anonymous')
      loadScript('js/vendor/bootstrap.min.js')
      loadScript('js/easing.min.js')
      loadScript('js/hoverIntent.js')
      loadScript('js/superfish.min.js')
      loadScript('js/mn-accordion.js')
      loadScript('js/jquery.ajaxchimp.min.js')
      loadScript('js/jquery.magnific-popup.min.js')
      loadScript('js/owl.carousel.min.js')
      loadScript('js/jquery.nice-select.min.js')
      loadScript('js/isotope.pkgd.min.js')
      loadScript('js/jquery.circlechart.js')
      loadScript('js/mail-script.js')
      loadScript('js/wow.min.js')
      loadScript('js/main.js')
    }

    render() {
        const btnData = this.props.data.allCosmicjsButtons.edges[0].node.metadata
        const pageData = this.props.data.cosmicjsPages.metadata
        const serviceData = this.props.data.allCosmicjsServices.edges
        const projectData = this.props.data.allCosmicjsProjects.edges
        const localeLight = this.props.pageContext.locale === 'en-US' ? 'en' : 'fr'

        return ( <Layout locale={localeLight}>
                    <SEO title="Home" keywords={[`cosmicjs`,`application`,`react`]}/>
                    <Banner btnData={btnData} bannerPageData={pageData}/>
                    <About btnData={btnData} aboutPageData={pageData}/>
                    <Services servicesPageData={pageData} serviceData={serviceData}/>         
                    <JobHistory jobsPageData={pageData}/>
                    <Contact name="contact" btnData={btnData} contactPageData={pageData}/>
                </Layout>
                )
    }
}

PageTemplate.propTypes = {
    data: PropTypes.object,
}

export const query = graphql`
  query Index($pageId: String!,$locale: String!) {
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
      }
    }
    allCosmicjsButtons(filter: {locale: {eq: $locale}}) {
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
    allCosmicjsServices(filter: {locale: {eq: $locale}}) {
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
    allCosmicjsProjects(filter: {locale: {eq: $locale}}) {
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