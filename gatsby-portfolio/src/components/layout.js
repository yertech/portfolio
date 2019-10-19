import React from "react"
import PropTypes from "prop-types"
import Header from "./header"
import Footer from "./footer"
import "./layout.css"

const Layout = ({ children, locale}) => {
  return (
    <>
      <Header locale={locale}/>
      {children}
      <Footer/>
    </>

  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  locale: PropTypes.string.isRequired
}

export default Layout
