import React from 'react';
import './SideDrawer.css';
import {Link} from 'gatsby';

const sideDrawer = props => {
  let drawerClasses = 'side-drawer';
  if (props.show) {
    drawerClasses = 'side-drawer open';
  }
  
  return (  
    <nav className={drawerClasses}>
    <ul className="nav-menu">
    {/* <li><a className="active" href="#">{headerPageData.menuhome}</a></li>            
    <li><a href="#about-area">{headerPageData.menuabout}</a></li>
    <li><a href="#service-area">{headerPageData.menuservices}</a></li>
    <li><a href="#job-area">{headerPageData.menujobs}</a></li>
    <li><a href="#contact-area">{headerPageData.menucontact}</a></li> */}
    <li><a className="active" onClick={() => props.backdropClickHandler("#")}>Home</a></li>            
    <li><a onClick={() => props.backdropClickHandler("#about-area")}>About</a></li>
    <li><a onClick={() => props.backdropClickHandler("#service-area")}>Skills</a></li>
    <li><a onClick={() => props.backdropClickHandler("#job-area")}>Jobs</a></li>
    <li><a onClick={() =>props.backdropClickHandler("#contact-area")}>Contact</a></li>              
    <li>
    {
    props.languages.map(lang => {
        return (
        <Link key={lang.slug} className="linkFlag" to={`/${lang.slug}`}><img src={"/img/" + lang.localized_name[props.locale] + ".png"}></img></Link>                      
        )
    })
    }     
    </li>     
</ul>
</nav>
  )
};

export default sideDrawer;
