import React from "react"
import "./SideDrawer.css"
import NavMenu from "../NavMenu"

const sideDrawer = props => {
  let drawerClasses = "side-drawer"
  if (props.sideDrawerOpen) {
    drawerClasses = "side-drawer open"
  }

  return (
    <NavMenu
      menuData={props.menuData}
      locale={props.locale}
      navClass={drawerClasses}
      menuItemClickHandler={props.menuItemClickHandler}
      activeHash={props.activeHash}
      sideDrawerOpen={props.sideDrawerOpen}
    />
  )
}

export default sideDrawer
