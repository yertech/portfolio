import React from "react"
import PropTypes from "prop-types"
import ReactHtmlParser from 'react-html-parser'; 

const Banner = ({ btnData, bannerPageData }) => {
    // <!-- start banner Area -->
	return (
	<section className="home-banner-area">
		<div className="container">
			<div className="row fullscreen d-flex align-items-center">
				<div className="banner-content col-lg-6 col-md-12 justify-content-center ">
					<div className="me wow fadeInDown" data-wow-duration="1s" data-wow-delay="1.2s">{bannerPageData.banner_msg}</div>
					<h1 className="wow fadeInUp" data-wow-duration="1s" data-wow-delay="1.7s">{bannerPageData.banner_name}</h1>
					<div className="designation mb-50 wow fadeInUp" data-wow-duration="1s" data-wow-delay="2.1s">
					{ReactHtmlParser(bannerPageData.banner_desc)}
					</div>
					<a href="mailto:ftrey@yertech.org" className="primary-btn" data-text={btnData.hireme_title}>
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
