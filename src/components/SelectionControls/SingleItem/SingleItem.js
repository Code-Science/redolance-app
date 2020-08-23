import React from 'react';
import classes from './SingleItem.css';
import FlowerImage from '../../flowersSelected/flowerImage/flowerImage';

const SingleItem = (props) => (
    <div className={classes.Card}>
        <div className={classes.Front}> 
           <FlowerImage type={props.type} />
           <p>{props.label}</p>
        </div>
        <div className={classes.Back}>
           <p className={classes.Name}>{props.label}</p>
           <p className={classes.Only}>Only</p>
           <p>${props.price.toFixed(2)}</p>
           <button onClick = {props.removed} disabled={props.disabled}>Remove</button>
           <button onClick = {props.added}>Add</button>
        </div>
    </div>

);

export default SingleItem;