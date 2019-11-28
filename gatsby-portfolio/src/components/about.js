import React from 'react'
import PropTypes from 'prop-types'
import ReactHtmlParser from 'react-html-parser'

const About = ({ btnData, aboutPageData }) => {
  return (
    <section
      className="about-area section-gap-top section-gap-bottom-90"
      id="about"
    >
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-6 about-left">
            <img className="img-fluid" src="/img/ftrey.jpg" alt="" />
          </div>
          <div className="col-lg-5 col-md-12 about-right">
            <div className="section-title">
              <h2>{aboutPageData.about_title}</h2>
            </div>
            <div className="mb-50 wow fadeIn" data-wow-duration=".8s">
              {ReactHtmlParser(aboutPageData.about_description)}
            </div>
            <a
              href="CV_FTREY.pdf"
              className="primary-btn"
              data-text={btnData.downloadresume_title}
            >
              {ReactHtmlParser(btnData.downloadresumehtml)}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

About.propTypes = {
  btnData: PropTypes.object.isRequired,
  aboutPageData: PropTypes.object.isRequired
}

export default About
