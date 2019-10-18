import React from "react"
import PropTypes from 'prop-types'
import { Icon } from 'rsuite'

const Work = ({ pageData, serviceData }) => {
    return (        
        <section className="work-area section-gap-top section-gap-bottom-90" id="work-area">
            <div className="container">
                <div className="row d-flex justify-content-between align-items-end mb-80">
                    <div className="col-lg-6">
                        <div className="section-title">
                            <h2>Latest Works</h2>
                            <p>If you are looking at blank cassettes on the web, you may be very confused at the difference in price. You may see
                                some for as low as $.17 each.</p>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="filters">
                            <ul>
                                <li className="active" data-filter=".all">All Categories</li>
                                <li data-filter=".branding">Branding</li>
                                <li data-filter=".creative">Creative Work</li>
                                <li data-filter=".web-design">Web Design</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="filters-content">
                    <div className="row grid">
                        <div className="single-work col-lg-4 col-md-6 col-sm-12 all creative wow fadeInUp" data-wow-duration="2s">
                            <div className="relative">
                                <div className="thumb">
                                    <div className="overlay overlay-bg"></div>
                                    <img className="image img-fluid" src="img/work/w1.jpg" alt=""/>
                                </div>
                                <div className="middle">
                                    <h4>2D Vinyl Design</h4>
                                    <div className="cat">Client Project</div>
                                </div>
                                <a className="overlay" href="portfolio-details.html"></a>
                            </div>
                        </div>
                        <div className="single-work col-lg-4 col-md-6 col-sm-12 all web-design branding wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.2s">
                            <div className="relative">
                                <div className="thumb">
                                    <div className="overlay overlay-bg"></div>
                                    <img className="image img-fluid" src="img/work/w2.jpg" alt=""/>
                                </div>
                                <div className="middle">
                                    <h4>2D Vinyl Design</h4>
                                    <div className="cat">Client Project</div>
                                </div>
                                <a className="overlay" href="portfolio-details.html"></a>
                            </div>
                        </div>
                        <div className="single-work col-lg-4 col-md-6 col-sm-12 all branding web-design wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.4s">
                            <div className="relative">
                                <div className="thumb">
                                    <div className="overlay overlay-bg"></div>
                                    <img className="image img-fluid" src="img/work/w3.jpg" alt=""/>
                                </div>
                                <div className="middle">
                                    <h4>2D Vinyl Design</h4>
                                    <div className="cat">Client Project</div>
                                </div>
                                <a className="overlay" href="portfolio-details.html"></a>
                            </div>
                        </div>
                        <div className="single-work col-lg-4 col-md-6 col-sm-12 all web-design wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.6s">
                            <div className="relative">
                                <div className="thumb">
                                    <div className="overlay overlay-bg"></div>
                                    <img className="image img-fluid" src="img/work/w6.jpg" alt=""/>
                                </div>
                                <div className="middle">
                                    <h4>2D Vinyl Design</h4>
                                    <div className="cat">Client Project</div>
                                </div>
                                <a className="overlay" href="portfolio-details.html"></a>
                            </div>
                        </div>
                        <div className="single-work col-lg-4 col-md-6 col-sm-12 all creative wow fadeInUp" data-wow-duration="2s">
                            <div className="relative">
                                <div className="thumb">
                                    <div className="overlay overlay-bg"></div>
                                    <img className="image img-fluid" src="img/work/w4.jpg" alt=""/>
                                </div>
                                <div className="middle">
                                    <h4>2D Vinyl Design</h4>
                                    <div className="cat">Client Project</div>
                                </div>
                                <a className="overlay" href="portfolio-details.html"></a>
                            </div>
                        </div>
                        <div className="single-work col-lg-4 col-md-6 col-sm-12 all branding wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.2s">
                            <div className="relative">
                                <div className="thumb">
                                    <div className="overlay overlay-bg"></div>
                                    <img className="image img-fluid" src="img/work/w5.jpg" alt=""/>
                                </div>
                                <div className="middle">
                                    <h4>2D Vinyl Design</h4>
                                    <div className="cat">Client Project</div>
                                </div>
                                <a className="overlay" href="portfolio-details.html"></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

Work.propTypes = {
    pageData: PropTypes.object.isRequired,
    serviceData: PropTypes.array.isRequired,
}

export default Work