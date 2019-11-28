import React from 'react'
import PropTypes from 'prop-types'
import DrawerToggleButton from '../components/SideDrawer/DrawerToggleButton'
import SideDrawer from '../components/SideDrawer/SideDrawer'
import NavMenu from '../components/NavMenu'

const Header = ({
  locale,
  menuData = [],
  isHeaderFixed,
  drawerToggleClickHandler,
  menuItemClickHandler,
  sideDrawerOpen,
  activeHash
}) => {
  return (
    <>
      <header id="header" className={isHeaderFixed ? 'header-scrolled' : ''}>
        <div className="container main-menu">
          <div className="row align-items-center d-flex">
            <div id="logo">
              <a href="#">
                <img src="/img/logo.png" alt="" title="" />
              </a>
            </div>
            <NavMenu
              menuData={menuData}
              locale={locale}
              navClass={'nav-menu-container'}
              menuItemClickHandler={menuItemClickHandler}
              activeHash={activeHash}
              sideDrawerOpen={sideDrawerOpen}
            />
          </div>
        </div>
        <DrawerToggleButton click={drawerToggleClickHandler} />
      </header>
      <SideDrawer
        sideDrawerOpen={sideDrawerOpen}
        locale={locale}
        menuItemClickHandler={menuItemClickHandler}
        menuData={menuData}
        activeHash={activeHash}
      />
    </>
  )
}

Header.propTypes = {
  locale: PropTypes.string.isRequired,
  isHeaderFixed: PropTypes.bool.isRequired
}

export default Header
