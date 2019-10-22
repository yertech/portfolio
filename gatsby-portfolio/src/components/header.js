import React from "react"
import PropTypes from "prop-types"
import DrawerToggleButton from '../components/SideDrawer/DrawerToggleButton'
import NavMenuContainer from '../components/NavMenuContainer'

const Header = ({ locale, headerPageData,isHeaderFixed, drawerClickHandler }) => { 

    return (
    <header id="header" className={isHeaderFixed? "header-scrolled":""}>      
      <div className="container main-menu">
        <div className="row align-items-center d-flex">
          <div id="logo">
            <a href="#"><img src="/img/logo.png" alt="" title="" /></a>
          </div>
          <NavMenuContainer locale={locale} headerPageData={headerPageData} className={"nav-menu-container"} drawerClickHandler={drawerClickHandler}/>
        </div>
      </div>
      <DrawerToggleButton click={drawerClickHandler} />
    </header>
    )
}

Header.propTypes = {
  locale: PropTypes.string.isRequired,
  headerPageData: PropTypes.object.isRequired,
  isHeaderFixed: PropTypes.bool.isRequired
}

export default Header