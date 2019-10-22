import React from 'react';

import './DrawerToggleButton.css';

const drawerToggleButton = props => (  

    <button type="button" id="mobile-nav-toggle" onClick={props.click}><i className="lnr lnr-menu"></i></button>
);

export default drawerToggleButton;