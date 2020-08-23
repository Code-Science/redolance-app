import React from 'react';
import classes from './Input.css';


const Input = props => {

    let inputElement = null;
    let style = [classes.Element];
    if(!props.valid){
        style.push(classes.Red);
        props.config.placeholder = `Please enter your ${props.label}`;
    }

    switch(props.inputtype){
        case 'input':
            inputElement = <input className={style.join(' ')} {...props.config} onChange={props.change}/>;
            break;
        case 'select':
            inputElement = <select className={style.join(' ')}>
                {props.config.option.map(option => <option key={option.value} value={option.value}>{option.displayValue}</option>)}
            </select>;
            break;
        default:
            inputElement = <input className={style.join(' ')} {...props.config}/>;
    }

    return(
        <div className={classes.Input}>
            <label>{props.label}:</label>
            {inputElement}
        </div>
    )
}

export default Input;