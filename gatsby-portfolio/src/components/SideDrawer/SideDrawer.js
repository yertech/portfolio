import React from 'react';
import NavMenuContainer from '../NavMenuContainer'
import './SideDrawer.css';

const sideDrawer = props => {
  let drawerClasses = 'side-drawer';
  if (props.show) {
    drawerClasses = 'side-drawer open';
  }
  return (  
     <NavMenuContainer locale={props.locale} headerPageData={props.headerPageData} className={drawerClasses}/>
  )
};

export default sideDrawer;
