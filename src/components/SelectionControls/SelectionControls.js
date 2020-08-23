import React from 'react';
import classes from './SelectionControls.css';
import SingleItem from './SingleItem/SingleItem';
import Button from '../Button/Button';

const control = [
    {label: 'Daisy', type: 'daisy'},
    {label: 'Freesia', type: 'freesia'},
    {label: 'Hydrangea', type: 'hydrangea'},
    {label: 'Iris', type: 'iris'},
    {label: 'Pink Rose', type: 'pinkRose'},
    {label: 'Red Rose', type: 'redRose'},
    {label: 'Hyacinth', type: 'hyacinth'},
    {label: 'Tulip', type: 'tulip'},
    {label: 'Sunflower', type: 'sunflower'},
    {label: 'White Magnolia', type: 'whiteMagnolia'},
    {label: 'White Rose', type: 'whiteRose'},
    {label: 'Lily', type: 'lily'}
]


const SelectionControls = (props) => (
    <div className={classes.Controls}>
        <h2 id='collection'>let's get some flowers
        </h2>

        {/* <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p> */}
        <div className={classes.Items}>
            {control.map(ctrl =>{
                return <SingleItem 
                            key={ctrl.label} 
                            label={ctrl.label} 
                            type={ctrl.type}
                            added={()=> props.add(ctrl.type)} 
                            removed={()=>props.remove(ctrl.type)}
                            disabled={props.disabled[ctrl.type]}
                            price={props.prices[ctrl.type]}
                            />
            })}
       </div>
    </div>
);

export default SelectionControls;