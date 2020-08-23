import React from 'react';
import classes from './Toolbar.css';
import NavigationItems from '../NavigationItems/NavigationItems';

const Toolbar = (props) => {
    return (
        <div className={classes.Toolbar}>
            <button onClick={props.open} className={classes.MobileOnly}><i className="fas fa-bars"></i></button>
            <nav className={classes.DesktopOnly}>
                <NavigationItems />
            </nav>
        </div>
    );
}

export default Toolbar;