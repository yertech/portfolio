import React from "react"
import PropTypes from "prop-types"
import Header from "./header"
import Footer from "./footer"
import ScrollToTop from "react-scroll-up"
import "./layout.css"

const Layout = ({ children, locale, headerPageData, isHeaderFixed }) => {
  return (
    <>
      <Header locale={locale} headerPageData={headerPageData} isHeaderFixed={isHeaderFixed} />
      {children}
      <Footer/>
      <button type="button" id="mobile-nav-toggle"><i className="lnr lnr-menu"></i></button>
      <div id="mobile-body-overly"></div>
      <ScrollToTop showUnder={100} duration={1000}>
        <div id="back-top" className="back-top-animation">
            <a title="Go to Top">
                <i className="lnr lnr-arrow-up"></i>
            </a>
        </div>
      </ScrollToTop>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  locale: PropTypes.string.isRequired,
  headerPageData: PropTypes.object.isRequired,
}

export default Layout 