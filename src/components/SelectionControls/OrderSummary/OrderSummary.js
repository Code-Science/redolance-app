import React from 'react';
import Aux from '../../../hoc/Aux';
import classes from './OrderSummary.css';
import FlowerImage from '../../flowersSelected/flowerImage/flowerImage';
import Button from '../../Button/Button';

const OrderSummary = (props) => {
    let count = 0;
    const flowers = Object.keys(props.flowers).map(flkey => {
        props.flowers[flkey] > 0 ? count++ : null;
        return (
            props.flowers[flkey] > 0 ?
            <tr key={flkey+'34'}>
                <td className={classes.ItemNo}>{count}.</td>
                <td className={classes.Image}><FlowerImage type={flkey} /></td>
                <td className={classes.Name}>{flkey}</td>
                <td>{props.flowers[flkey]}</td>
                <td>${(props.prices[flkey]*props.flowers[flkey]).toFixed(2)}</td>
                <td className={classes.Buttons}><button onClick={()=> props.add(flkey)}>+</button><button onClick={()=>props.remove(flkey)} disabled={!props.purchaseable}>-</button></td>
            </tr> : null
        );
    });
    let cartEmpty = true;
    flowers.forEach(el =>{
        if(cartEmpty){
            cartEmpty = el === null;
        }
    });


    return (
        <Aux>
            <h3 className={classes.Order}>Your Order</h3>
            <p>All of your order summary is below</p>
            <div className={classes.ItemList}>
             <table>
             <thead>
             <tr className={classes.Head}>
                 <th className={classes.ItemNo}>Item No.</th>
                 <th colSpan='2' className={classes.Items}>Items</th>
                 <th>Qty</th>
                 <th>Price</th>
                 <th className={classes.Buttons}></th>
             </tr>
             </thead>
             <tbody>
                {flowers}
            </tbody>
             </table>
             {cartEmpty ? <p style={{padding: '1rem'}}>Nothing added to cart</p> : null}
            </div>
            <div className={classes.Text}>
              <p>Continue to Checkout?</p>
              <p><strong>Total price: {props.price.toFixed(2)}</strong></p>

              <Button click={props.purchaseCancel} link='#'>Cancel</Button>
              <Button click={props.purchaseContinue} link='#'>Continue</Button>
            </div>
        </Aux>
    )
}

export default OrderSummary;