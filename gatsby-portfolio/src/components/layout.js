import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Header from './header'
import Footer from './footer'
import ScrollToTop from 'react-scroll-up'
import './layout.css'
import Backdrop from '../components/Backdrop/Backdrop'

function Layout (props) {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false)
  const [activeHash, setActiveHash] = useState('home')

  function drawerToggleClickHandler () {
    setSideDrawerOpen(!sideDrawerOpen)
  }

  function menuItemClickHandler (hash, sideDrawerOpen) {
    document.querySelector(`#${hash}`).scrollIntoView({
      behavior: 'smooth'
    })

    if (sideDrawerOpen === true) {
      setSideDrawerOpen(false)
    }
    setActiveHash(hash)
  }

  function backdropClickHandler () {
    setSideDrawerOpen(false)
  }

  return (
    <>
      <Header
        locale={props.locale}
        isHeaderFixed={props.isHeaderFixed}
        drawerToggleClickHandler={drawerToggleClickHandler}
        sideDrawerOpen={sideDrawerOpen}
        menuItemClickHandler={menuItemClickHandler}
        menuData={props.menuData}
        activeHash={activeHash}
      />
      {sideDrawerOpen && <Backdrop click={backdropClickHandler} />}
      {props.children}
      <Footer />
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
  locale: PropTypes.string.isRequired
}

export default Layout
