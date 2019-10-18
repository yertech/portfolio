import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import {Link} from 'gatsby'
import PropTypes from "prop-types"

const Header = (locale) => {  
  const data = useStaticQuery(graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        languages {
          slug
          localized_name {
            en
            fr
          }
        }
      }
    }
  }
  `)

    return (<header id="header">
      <div className="container main-menu">
        <div className="row align-items-center d-flex">
          <div id="logo">
            <a href="#"><img src="img/logo.png" alt="" title="" /></a>
          </div>
          <nav id="nav-menu-container">
            <ul className="nav-menu">
              <li className=""><a className="active" href="#">Home</a></li>
              <li><a href="#about-area">About</a></li>
              <li><a href="#service-area">Services</a></li>
              <li><a href="#job-area">Jobs</a></li>
              <li><a href="#contact-area">Contact</a></li>    
              <li>
              {
                data.site.siteMetadata.languages.map(lang => {
                  return (
                    <a key={lang.slug} className="linkFlag" href={`/${lang.slug}`}><img src={"img/" + lang.localized_name[Object.values(locale)] + ".png"}></img></a>                      
                  )
                })
              }     
              </li>     
            </ul>
          </nav>
        </div>
      </div>
    </header>)
}

Header.propTypes = {
  locale: PropTypes.string.isRequired
}

export default Header