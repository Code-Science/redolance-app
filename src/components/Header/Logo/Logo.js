import React from 'react';
import classes from './Logo.css';
import logo from '../../../assets/logo1.png';

const Logo = (props) => {
    return (
        <div className={classes.Logo}>
            <img src={logo} alt='Redolance logo' />
        </div>
    );
}

export default Logo;