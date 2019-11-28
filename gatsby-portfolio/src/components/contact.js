import React from 'react'
import PropTypes from 'prop-types'
import ReactHtmlParser from 'react-html-parser'

const Contact = props => {
  return (
    <section
      className="contact-area section-gap-top section-gap-bottom-90"
      id="contact"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="contact-title">
              <h2>{props.contactPageData.contact_title}</h2>
              {ReactHtmlParser(props.contactPageData.contact_description)}
            </div>
          </div>
        </div>

        <div className="row mt-80">
          <div className="col-lg-12 col-md-12">
            <div className="contact-box">
              <h4>{props.contactPageData.contact_number}</h4>
            </div>
            <div className="contact-box">
              <h4>{props.contactPageData.contact_email}</h4>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12 text-center">
            <a
              href="mailto:ftrey@yertech.org"
              className="primary-btn mt-50"
              data-text={props.btnData.hireme_title}
            >
              {ReactHtmlParser(props.btnData.hireme)}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

Contact.propTypes = {
  contactPageData: PropTypes.object.isRequired,
  btnData: PropTypes.object.isRequired
}

export default Contact
