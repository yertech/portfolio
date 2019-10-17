import React from "react"

const Header = () => (
<header id="header">
  <div className="container main-menu">
    <div className="row align-items-center d-flex">
      <div id="logo">
        <a href="#"><img src="img/logo.png" alt="" title="" /></a>
      </div>
      <nav id="nav-menu-container">
        <ul className="nav-menu">
          <li className=""><a className="active" href="#">Home</a></li>
          <li><a href="#about-area">About</a></li>
          <li><a href="#service-area">Services</a></li>
          <li><a href="#job-area">Jobs</a></li>
          <li><a href="#contact-area">Contact</a></li>
        </ul>
      </nav>
    </div>
  </div>
</header>
)

export default Header