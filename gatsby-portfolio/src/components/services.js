import React from "react"
import PropTypes from "prop-types"
import ReactHtmlParser from "react-html-parser"
import { useSpring, animated, config } from "react-spring"

const Services = ({ servicesPageData, serviceData }) => {
  const contentProps = useSpring({
    from: { opacity: 0 },
    opacity: 1,
    config: config.molasses,
  })

  return (
    <section
      className="service-area section-gap-top section-gap-bottom-90"
      id="service-area"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title">
              <h2>{servicesPageData.service_title}</h2>
              {ReactHtmlParser(servicesPageData.service_description)}
            </div>
          </div>
        </div>
        <div className="row">
          {serviceData.map(service => (
            <div className="col-lg-3 col-md-6" key={service.node.title}>
              <animated.div style={contentProps} className="single-service">
                <span className={service.node.metadata.class_name}></span>
                {ReactHtmlParser(service.node.metadata.title)}
                {ReactHtmlParser(service.node.metadata.description)}
              </animated.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

Services.propTypes = {
  servicesPageData: PropTypes.object.isRequired,
  serviceData: PropTypes.array.isRequired,
}

export default Services
