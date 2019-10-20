import React from "react"
import PropTypes from "prop-types"
import Header from "./header"
import Footer from "./footer"
import "./layout.css"

const Layout = ({ children, locale, headerPageData }) => {
  return (
    <>
      <Header locale={locale} headerPageData={headerPageData} />
      {children}
      <Footer/>
    </>

  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  locale: PropTypes.string.isRequired,
  headerPageData: PropTypes.object.isRequired,
}

export default Layout 