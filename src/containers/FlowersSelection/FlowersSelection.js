import React, {Component} from 'react';
import classes from './FlowersSelection.css';
import Aux from '../../hoc/Aux';
import SelectionControls from '../../components/SelectionControls/SelectionControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/SelectionControls/OrderSummary/OrderSummary';
import image from '../../assets/backhead2.jpg';
import FlowersSelected from '../../components/flowersSelected/flowersSelected';
import { connect} from 'react-redux';
import { withRouter} from 'react-router-dom';
import * as actionTypes from '../../store/actions';

class FlowersSelection extends Component {

    state = {
        purchasing: false,
        
    }

    scrollToHash() {

        /* Obtain hash from current location (and trim off leading #) */
        const id = window.location.hash.substr(1);
    
        if(id) {
            /* Find matching element by id */
            const anchor = document.getElementById(id);
    
            if(anchor) {
                /* Scroll to that element if present */
                anchor.scrollIntoView();
                window.location.hash = '/'
            }
        }
    }
    componentDidMount=() =>{
        this.scrollToHash();
    }
    componentDidUpdate=() =>{
        this.scrollToHash();
    }


    purchaseHandler = () => {
        this.setState({purchasing: true});
    }
    purchaseCancelHandler = (event) => {
        event.preventDefault();
        this.setState({purchasing: false}); 
    }
    purchaseContinueHandler = (event) =>{
        if(this.props.purchaseable){
         this.props.history.push('/Checkout');
        }
        else{
            event.preventDefault();
            alert('No Item Selected To Proceed');
        }  
    }
    render() {

        let sum = 0;
        const cart = [classes.Cart,'fas','fa-cart-plus','fa-2x'];


        for (const property in this.props.items) {
            sum = sum + this.props.items[property];
        }


        const disabledInfo = {
            ...this.props.items
        }
        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0;
        }


        return (
           <Aux>
               <Modal show={this.state.purchasing} click={this.purchaseCancelHandler}>
                   <OrderSummary 
                      flowers={this.props.items}
                      price={this.props.totalPrice}
                      purchaseCancel={(event)=>this.purchaseCancelHandler(event)}
                      purchaseContinue={(event)=>this.purchaseContinueHandler(event)}
                      prices={this.props.prices}
                      add={this.props.onItemAdded} 
                      remove={this.props.onItemremoved} 
                      purchaseable={this.props.purchaseable}
                      />

               </Modal>
               <div className={classes.SelectionBox} style={{backgroundImage: "linear-gradient(to bottom, rgba(0,0,0,0.4),rgba(0,0,0,0.6), rgba(0,0,0,0.4)), url("+ image +")"}}>
                    <SelectionControls 
                            add={this.props.onItemAdded} 
                            remove={this.props.onItemremoved} 
                            disabled={disabledInfo}
                            price={this.props.totalPrice}
                            purchaseable={this.props.purchaseable}
                            purchasing={this.purchaseHandler}
                            prices={this.props.prices}
                            />
                </div>
                <FlowersSelected total={sum} cart={this.props.addOrRemoveString} />
                <p className={classes.Number}>{sum}</p>
                <i className={cart.join(' ')} onClick={this.purchaseHandler}></i>
           </Aux>
        );
    }

}

const mapStateToProps = state => {
    return {
        items: state.flowerTypes,
        prices: state.flowerPrices,
        totalPrice: state.price,
        addOrRemoveString: state.inCart,
        purchaseable: state.purchaseable
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onItemAdded: (item) => dispatch({type:actionTypes.addItem, item:item}),
        onItemremoved: (item) => dispatch({type:actionTypes.removeItem, item:item})
    }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(FlowersSelection));