import React from 'react';
import classes from './NavigationItems.css';
import { Link } from 'react-router-dom';

const NavigationItems = (props) => {
    return (
        <ul className={classes.Navigation}>
            <li><Link to={{
                        pathname: "/",
                        hash: "#about",
                        }}>About Us</Link></li>
            <li><Link to={{
                        pathname: "/",
                        hash: "#subscribe",
                        }}>Register</Link></li>
            <li><Link to='/ContactUs'>Contact Us</Link></li>
        </ul>
    );
}

export default NavigationItems;