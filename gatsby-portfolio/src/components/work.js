import React from "react"
import PropTypes from 'prop-types'
import { Icon } from 'rsuite'

const Work = ({ pageData, serviceData }) => {
    const styles = {
        header: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
        },
        container: {
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
        },
        title: {
            paddingRight: '50px',
            marginRight: '100px',
            borderRight: 'thin solid black'
        },
        description: {
            maxWidth: '400px',
            fontSize: '1.25rem',
            margin: '0',
        },
        service: {
            height: '250px',
            width: '200px',
            margin: '50px',
            paddingTop: '20px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            overflowX: 'auto',
            color: 'black',
        },
        serviceName: {
            fontSize: '1.2rem',
        },
        serviceDescription: {
            fontSize: '0.9rem',
            color: '#a9a9a9',
        },
    }
    return ( 
        // <div name = "work" className = "section-wrapper" >
        // <div style = { styles.header } >
        //     <h2 style = { styles.title } > What We Do </h2>
        //     <p style = { styles.description } > { pageData.service_description }</p>
        // </div>
        // <div className = "wrapper-content services" style = { styles.container }> 
        //     {serviceData.map(service => ( 
        //         <div key = { service.node.title } style = { styles.service }>
        //             <Icon size = "3x"  icon = { service.node.metadata.icon }/> 
        //             <h5 style = { styles.serviceName } > { service.node.title }</h5> 
        //             <p style = { styles.serviceDescription } > { service.node.metadata.summary }</p>
        //             <p style={styles.serviceDescription}>{service.node.metadata.description}</p>
        //         </div>
        //     ))} 
        // </div> 
        // </div>
        <section className="work-area section-gap-top section-gap-bottom-90" id="work">
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