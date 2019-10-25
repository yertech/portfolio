import React from "react"
import PropTypes from "prop-types"
import ReactHtmlParser from "react-html-parser"
import { useSpring, animated, config } from "react-spring"

const Banner = ({ btnData, bannerPageData }) => {
  const contentProps = useSpring({
    from: { opacity: 0, marginTop: 200 },
    opacity: 1,
    marginTop: 0,
    config: config.molasses,
  })

  // <!-- start banner Area -->
  return (
    <section className="home-banner-area" id="home">
      <div className="container">
        <div className="row fullscreen d-flex align-items-center">
          <div className="banner-content col-lg-6 col-md-12 justify-content-center ">
            <animated.div className="me" style={contentProps}>
              {bannerPageData.banner_msg}
            </animated.div>
            <animated.div style={contentProps}>
              <h1>{bannerPageData.banner_name}</h1>
            </animated.div>
            <animated.div className="designation mb-50" style={contentProps}>
              {ReactHtmlParser(bannerPageData.banner_desc)}
            </animated.div>
            <a
              href="mailto:ftrey@yertech.org"
              className="primary-btn"
              data-text={btnData.hireme_title}
            >
              {ReactHtmlParser(btnData.hireme)}
            </a>
          </div>
        </div>
      </div>
    </section>
    // <!-- End banner Area --> */
  )
}

Banner.propTypes = {
  btnData: PropTypes.object.isRequired,
  bannerPageData: PropTypes.object.isRequired,
}

export default Banner
