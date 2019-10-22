import React from "react"
import PropTypes from "prop-types"
import ReactHtmlParser from 'react-html-parser'; 
import styled, { keyframes } from 'styled-components';
import { fadeInUp, fadeInDown } from 'react-animations';



const Banner = ({ btnData, bannerPageData }) => {
	
	const fadeInUpAnimation = keyframes`${fadeInUp}`;
	const fadeInDownAnimation = keyframes`${fadeInDown}`;
	const FadeInUpDiv = styled.div`
	animation: 2s 2.2s ${fadeInUpAnimation};
	`;
	const FadeInUpDivLong = styled.div`
	animation: 2s 2.7s ${fadeInUpAnimation};
	`;
	const FadeInDownDiv = styled.div`
	animation: 2s 2.2s ${fadeInDownAnimation};
	`;


    // <!-- start banner Area -->
	return (
	<section className="home-banner-area">
		<div className="container">
			<div className="row fullscreen d-flex align-items-center">
				<div className="banner-content col-lg-6 col-md-12 justify-content-center ">
					<FadeInDownDiv className="me">
						{bannerPageData.banner_msg}
					</FadeInDownDiv>
					<FadeInUpDiv>
						<h1>{bannerPageData.banner_name}</h1>
					</FadeInUpDiv>
					<FadeInUpDivLong className="designation mb-50">							
						{ReactHtmlParser(bannerPageData.banner_desc)}
					</FadeInUpDivLong>
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
