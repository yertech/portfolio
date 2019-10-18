import React from "react"
import PropTypes from "prop-types"
import ReactHtmlParser from 'react-html-parser'; 

const Services = ({ servicesPageData,serviceData }) => { 

  return (
    <section className="service-area section-gap" id="service-area">
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
					<div className="col-lg-3 col-md-6" key={ service.node.title}>
						<div className="single-service wow fadeInUp" data-wow-duration="1s">
							<span className={ service.node.metadata.class_name}></span>
							{ ReactHtmlParser(service.node.metadata.title)}
							{ ReactHtmlParser(service.node.metadata.description)}
						</div>
					</div>					
				))}
			</div>
		</div>
	</section>
	)
}

Services.propTypes = {
	servicesPageData: PropTypes.object.isRequired,
	serviceData: PropTypes.array.isRequired
}

export default Services