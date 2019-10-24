import React from "react"
import PropTypes from "prop-types"
import DrawerToggleButton from "../components/SideDrawer/DrawerToggleButton"
import { useStaticQuery, graphql } from "gatsby"
import SideDrawer from "../components/SideDrawer/SideDrawer"
import { Link } from "gatsby"

const Header = ({
  locale,
  headerPageData,
  isHeaderFixed,
  drawerToggleClickHandler,
  backdropClickHandler,
  sideDrawerOpen,
}) => {
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

  const { menuhome, menuabout, menuservices, menujobs, menucontact } =
    headerPageData || {}
  return (
    <>
      <header id="header" className={isHeaderFixed ? "header-scrolled" : ""}>
        <div className="container main-menu">
          <div className="row align-items-center d-flex">
            <div id="logo">
              <a href="#">
                <img src="/img/logo.png" alt="" title="" />
              </a>
            </div>
            <nav className="nav-menu-container">
              <ul className="nav-menu">
                <li>
                  <a className="active" href="#">
                    {menuhome}
                  </a>
                </li>
                <li>
                  <a href="#about-area">{menuabout}</a>
                </li>
                <li>
                  <a href="#service-area">{menuservices}</a>
                </li>
                <li>
                  <a href="#job-area">{menujobs}</a>
                </li>
                <li>
                  <a href="#contact-area">{menucontact}</a>
                </li>
                <li>
                  {data.site.siteMetadata.languages.map(lang => {
                    return (
                      <Link
                        key={lang.slug}
                        className="linkFlag"
                        to={`/${lang.slug}`}
                      >
                        <img
                          src={"/img/" + lang.localized_name[locale] + ".png"}
                        ></img>
                      </Link>
                    )
                  })}
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <DrawerToggleButton click={drawerToggleClickHandler} />
      </header>
      <SideDrawer
        show={sideDrawerOpen}
        locale={locale}
        headerPageData={headerPageData}
        backdropClickHandler={backdropClickHandler}
        languages={data.site.siteMetadata.languages}
      />
    </>
  )
}

Header.propTypes = {
  locale: PropTypes.string.isRequired,
  headerPageData: PropTypes.object.isRequired,
  isHeaderFixed: PropTypes.bool.isRequired,
}

export default Header
