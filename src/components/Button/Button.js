import React from 'react';
import classes from './Button.css';
// import { Link } from 'react-router-dom';

const Button = (props) => (
    // <button className={classes.Button} onClick={props.click} disabled={props.able}>{props.children}</button>
    <a onClick={props.click} href={props.link} className={classes.Button}>{props.children}</a>
);

export default Button;