import React from 'react';
import classes from './Footer.css';
import Logo from '../Header/Logo/Logo'

const Footer = (props) => (
    <div className={classes.Footer}>
        <div className={classes.LogoBoxx}>
             <Logo />
        </div>
        <div className={classes.Row}>
         <div className={classes.FooterNavigation}>
             <ul>
                <li><a href='#'>Company</a></li>
                <li><a href='#'>Contact Us</a></li>
                <li><a href='#'>Careers</a></li>
                <li><a href='#'>Privacy Policy</a></li>
                <li><a href='#'>Terms</a></li>
             </ul>
         </div>
         <div className={classes.Copyright}> 
              <p>Built by <a href='#'>Uzma Ali</a> for testing her skills. Copyright &copy; by Uzma Ali. You can use this website or copy the design, but a credit to the author, Uzma Ali, is ofcourse highly appreciated!.</p>
         </div>
        </div>
    </div>
);

export default Footer;