import React from "react"
import PropTypes from "prop-types"

const About = ({ peopleData, pageData }) => {
  const styles = {
    header: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-start',
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
    person: {
      width: '25%',
      padding: '10px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textDecoration: 'none'
    },
    personName: {
      marginTop: '0',
      color: 'black',
      fontSize: '1rem'
    },
    personTitle: {
      color: 'grey',
      fontSize: '0.8rem',
    }
  }
  return (
    // <div name="about" className="section-wrapper">
    //   <div style={styles.header}>
    //     <h2 className="section-title" style={styles.title}>Who We Are</h2>
    //     <p style={styles.description}>{pageData.people_description}</p>
    //   </div>
    //   <div className="wrapper-content people" style={styles.container}>
    //     {peopleData.map(person => {
    //       return (
    //         <div key={person.node.title} style={styles.person}>
    //           <div
    //             style={{
    //               background: `url(${person.node.metadata.image.url})`,
    //               backgroundSize: 'cover',
    //               backgroundPosition: 'center',
    //               marginBottom: '14px',
    //               width: '100%',
    //               height: '200px',
    //             }}
    //           />
    //           <h5 style={styles.personName}>{person.node.title}</h5>
    //           <h6 style={styles.personTitle}>{person.node.metadata.job_title}</h6>
    //         </div>
    //       )
    //     })}
    //   </div>
    // </div>
    <section className="about-area section-gap">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-6 about-left">
            <img className="img-fluid" src="img/about-img.jpg" alt=""/>
          </div>
          <div className="col-lg-5 col-md-12 about-right">
            <div className="section-title">
              <h2>about myselt</h2>
            </div>
            <div className="mb-50 wow fadeIn" data-wow-duration=".8s">
              <p>
                inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct standards especially in the
                workplace. That’s why it’s crucial that, as women, our behavior on the job is beyond reproach. inappropriate behavior
                is often laughed. inappropriate behavior is often laughed off as “boys will be boys,” women face higher.
              </p>
              <p>That’s why it’s crucial that, as women, our behavior on the job is beyond reproach. inappropriate behavior is often
                laughed.
              </p>
            </div>
            <a href="#" className="primary-btn white" data-text="More Info">
              <span>M</span>
              <span>o</span>
              <span>r</span>
              <span>e</span>
              <span> </span>
              <span>I</span>
              <span>n</span>
              <span>f</span>
              <span>o</span>
            </a>
            <a href="#" className="primary-btn" data-text="Resume">
              <span>R</span>
              <span>e</span>
              <span>s</span>
              <span>u</span>
              <span>m</span>
              <span>e</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

About.propTypes = {
  pageData: PropTypes.object.isRequired,
  peopleData: PropTypes.array.isRequired,
}

export default About