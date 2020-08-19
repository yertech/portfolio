import React from "react"
import PropTypes from "prop-types"

const Footer = () => (
  <footer className="footer-area">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-12">
          <div className="footer-top flex-column">
            <div className="footer-logo">
              <a href="/">
                <img src="img/logo.png" alt="" />
              </a>
              <h4>Follow Me</h4>
            </div>
            <div className="footer-social">
              <a
                href="https://github.com/yertech"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/fabrice-trey-81482761/?locale=en_US"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="row footer-bottom justify-content-center">
        <p className="col-lg-8 col-sm-12 footer-text">
          Copyright &copy;
          <script>document.write(new Date().getFullYear());</script> All rights
          reserved | This template is made with{" "}
          <i className="fa fa-heart-o" aria-hidden="true"></i> by{" "}
          <a
            href="https://colorlib.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Colorlib
          </a>
        </p>
      </div>
    </div>
  </footer>
)

Footer.propTypes = {}

export default Footer
