import React from "react"
import PropTypes from "prop-types"
import ReactHtmlParser from 'react-html-parser'; 

const JobHistory = ({ jobsPageData, jobsData }) => { 

  return (
    <section className="job-area section-gap-top section-gap-bottom-90" id="job-area">
		<div className="container">
			<div className="row d-flex">
				<div className="col-lg-12">
					<div className="section-title">
						<h2>{jobsPageData.job_title}</h2>
						{ReactHtmlParser(jobsPageData.job_description)}
					</div>
				</div>
			</div>

			<div className="row">
				{jobsData.map(job => ( 						
						<div className="col-lg-6" key={job.node.metadata.title}>
						<div className="single-job">
							<div className="top-sec d-flex justify-content-between">
								<div className="top-left">
									<h4>{job.node.metadata.title}</h4>
									<p>{job.node.metadata.location}</p>
								</div>
								<div className="top-right">
									<a href="#" className="primary-btn" data-text={job.node.metadata.dates}>
										{ ReactHtmlParser(job.node.metadata.dateshtml)}
									</a>
								</div>
							</div>
							<div className="bottom-sec wow fadeIn" data-wow-duration="2s">
							{ ReactHtmlParser(job.node.metadata.description)}
							</div>
						</div>
					</div>
					))}				
			</div>
		</div>
	</section>
	)
}

JobHistory.propTypes = {
	jobsPageData: PropTypes.object.isRequired,
	jobsData: PropTypes.array.isRequired
}

export default JobHistory