import React from "react"
import PropTypes from "prop-types"
import Header from "./header"
import Footer from "./footer"
import ScrollToTop from "react-scroll-up"
import "./layout.css"
import SideDrawer from '../components/SideDrawer/SideDrawer';
import Backdrop from '../components/Backdrop/Backdrop';

class Layout extends React.Component {
  state = {
    sideDrawerOpen: false
  }

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  };

 render() {
  let backdrop;
  if (this.state.sideDrawerOpen) {
    backdrop = <Backdrop click={this.backdropClickHandler} />
  }

  return (
    <>
      <Header locale={this.props.locale} headerPageData={this.props.headerPageData} isHeaderFixed={this.props.isHeaderFixed} drawerClickHandler={this.drawerToggleClickHandler} />
      <SideDrawer show={this.state.sideDrawerOpen} locale={this.props.locale} headerPageData={this.props.headerPageData} />
      {backdrop}
      {this.props.children}
      <Footer/>      
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
  headerPageData: PropTypes.object.isRequired,
}

export default Layout 