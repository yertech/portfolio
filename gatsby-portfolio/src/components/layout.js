import React from "react"
import PropTypes from "prop-types"
import Header from "./header"
import Footer from "./footer"
import ScrollToTop from "react-scroll-up"
import "./layout.css"
import Backdrop from "../components/Backdrop/Backdrop"

class Layout extends React.Component {
  state = {
    sideDrawerOpen: false,
    activeHash: "home",
  }

  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen }
    })
  }

  menuItemClickHandler = (hash, sideDrawerOpen) => {
    document.querySelector(`#${hash}`).scrollIntoView({
      behavior: "smooth",
    })

    if (sideDrawerOpen === true) {
      this.setState({ sideDrawerOpen: false })
    }
    this.setState({ activeHash: hash })
  }

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false })
  }

  render() {
    let backdrop
    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }

    return (
      <>
        <Header
          locale={this.props.locale}
          isHeaderFixed={this.props.isHeaderFixed}
          drawerToggleClickHandler={this.drawerToggleClickHandler}
          sideDrawerOpen={this.state.sideDrawerOpen}
          menuItemClickHandler={this.menuItemClickHandler}
          menuData={this.props.menuData}
          activeHash={this.state.activeHash}
        />
        {backdrop}
        {this.props.children}
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
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  locale: PropTypes.string.isRequired,
}

export default Layout
