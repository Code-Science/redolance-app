import React from 'react';
import Classes from './SimpleNav.css';
import NavigationItems from '../../Header/NavigationItems/NavigationItems';
import Logo from '../../Header/Logo/Logo';
import { withRouter } from 'react-router-dom';

const SimpleNav = props => (
    <div className={Classes.SimpleNav}>
        <div className={Classes.LogoBox} onClick={() => { props.history.push('/')}}>
            <Logo />
        </div>
        <button onClick={props.open} className={Classes.MobileOnly}><i className="fas fa-bars"></i></button>
          <NavigationItems/>
    </div>
);

export default withRouter(SimpleNav);