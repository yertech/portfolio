import React from "react"
import PropTypes from "prop-types"
import DrawerToggleButton from '../components/SideDrawer/DrawerToggleButton'
import { useStaticQuery, graphql } from 'gatsby'
import SideDrawer from '../components/SideDrawer/SideDrawer';
import {Link} from 'gatsby'

const Header = ({ locale, headerPageData,isHeaderFixed, drawerToggleClickHandler, backdropClickHandler, sideDrawerOpen}) => { 
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
    return (
      <>
    <header id="header" className={isHeaderFixed? "header-scrolled":""}>      
      <div className="container main-menu">
        <div className="row align-items-center d-flex">
          <div id="logo">
            <a href="#"><img src="/img/logo.png" alt="" title="" /></a>
          </div>          
          <nav className="nav-menu-container">
            <ul className="nav-menu">
            {/* <li><a className="active" href="#">{headerPageData.menuhome}</a></li>            
            <li><a href="#about-area">{headerPageData.menuabout}</a></li>
            <li><a href="#service-area">{headerPageData.menuservices}</a></li>
            <li><a href="#job-area">{headerPageData.menujobs}</a></li>
            <li><a href="#contact-area">{headerPageData.menucontact}</a></li> */}
            <li><a className="active" href="#">Home</a></li>            
            <li><a href="#about-area">About</a></li>
            <li><a href="#service-area">Skills</a></li>
            <li><a href="#job-area">Jobs</a></li>
            <li><a href="#contact-area">Contact</a></li>              
            <li>
            {
            data.site.siteMetadata.languages.map(lang => {
                return (
                <Link key={lang.slug} className="linkFlag" to={`/${lang.slug}`}><img src={"/img/" + lang.localized_name[locale] + ".png"}></img></Link>                      
                )
            })
            }     
            </li>     
        </ul>
        </nav>
        </div>
      </div>
      <DrawerToggleButton click={drawerToggleClickHandler} />
    </header>
    <SideDrawer show={sideDrawerOpen} locale={locale} headerPageData={headerPageData} backdropClickHandler={backdropClickHandler} languages={data.site.siteMetadata.languages}/>
    </>
    )
}

Header.propTypes = {
  locale: PropTypes.string.isRequired,
  headerPageData: PropTypes.object.isRequired,
  isHeaderFixed: PropTypes.bool.isRequired
}

export default Header