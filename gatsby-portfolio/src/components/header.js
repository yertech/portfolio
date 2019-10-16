import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Navbar, Nav } from "rsuite"

const Header = ({ siteTitle }) => (
  // <Navbar style={{
  //   width: '100vw',
  //   position: 'fixed',
  // }}>
  //   <Navbar.Header>
  //     <h1>
  //       <Link to="/">
  //         {siteTitle}
  //       </Link>
  //     </h1>
  //   </Navbar.Header>
  //   <Navbar.Body>
  //     <Nav>
  //       <Nav.Item componentclassName={Link} to="/#work">
  //         Work
  //       </Nav.Item>
  //       <Nav.Item componentclassName={Link} to="/#projects">
  //         Projects
  //       </Nav.Item>
  //       <Nav.Item componentclassName={Link} to="/#about">
  //         About
  //       </Nav.Item>
  //       <Nav.Item componentclassName={Link} to="/#contact">
  //         Contact
  //       </Nav.Item>
  //     </Nav>
  //   </Navbar.Body>
  // </Navbar>


<header id="header">
  <div className="container main-menu">
    <div className="row align-items-center d-flex">
      <div id="logo">
        <a href="index.html"><img src="img/logo.png" alt="" title="" /></a>
      </div>
      <nav id="nav-menu-container">
        <ul className="nav-menu">
          <li className=""><a className="active" href="index.html">Home</a></li>
          <li><a href="about.html">About</a></li>
          <li><a href="portfolio.html">Portfolio</a></li>
          <li className="menu-has-children"><a href="#">Pages</a>
            <ul>
              <li><a href="elements.html">Elements</a></li>
              <li><a href="contact.html">Contact</a></li>
              <li><a href="services.html">Service</a></li>
              <li><a href="portfolio-details.html">Portfolio Details</a></li>
            </ul>
          </li>
          <li className="menu-has-children"><a href="">Blog</a>
            <ul>
              <li><a href="blog-home.html">Blog Home</a></li>
              <li><a href="blog-single.html">Blog Single</a></li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</header>

)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header