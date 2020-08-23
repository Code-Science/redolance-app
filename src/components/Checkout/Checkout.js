import React, {Component} from 'react';
import classes from './Checkout.css';
import SimpleNav from '../Contact/SimpleNav/SimpleNav';
import Input from '../UI/Input/Input';
import Button from '../Button/Button';
import img from '../../assets/end.jpg';
import { connect } from 'react-redux';
import axios from 'axios';
import Spinner from '../UI/Spinner/Spinner';
import Aux from '../../hoc/Aux';
import Modal from '../UI/Modal/Modal';
import { checkValidity } from '../../store/utilities';
import SideDrawer from '../Header/SideDrawer/SideDrawer';

class  Checkout extends Component{

    state = {
        orderForm : {
            name: {
                inputType: 'input',
                config: {
                    type: 'text',
                    placeholder: 'Your Name'
                },
                value: '',
                validation: {
                    isRequired: true
                },
                valid: false,
                touched: false
            },
            address: {
                inputType: 'input',
                config: {
                    type: 'text',
                    placeholder: 'Address'
                },
                value: '',
                validation: {
                    isRequired: true
                },
                valid: false,
                touched: false
            },
            zipCode: {
                inputType: 'input',
                config: {
                    type: 'text',
                    placeholder: 'zipcode'
                },
                value: '',
                validation: {
                    isRequired: true,
                    length: 5,
                },
                valid: false,
                touched: false
            },
            email: {
                inputType: 'input',
                config: {
                    type: 'email',
                    placeholder: 'Your E-mail'
                },
                value: '',
                validation: {
                    isRequired: true,
                    requiredSymbol: '@',
                    requiredString: '.com'
                },
                valid: false,
                touched: false
            },
            delivery: {
                inputType: 'select',
                config: {
                    option: [
                        {
                            value: 'fastest',
                            displayValue: 'Fastest'
                        },
                        {
                            value: 'cheapest',
                            displayValue: 'Cheapest'
                        }
                    ]
                },
                value: 'fastest',
                validation: {
                },
                valid: true,
                touched: true

            }
        },
        loader: false,
        show: false,
        showWarningMessage: false,
        error: false,
        showSideDrawer: false
    }

    closeSideDrawerHandler = () =>{
        this.setState({showSideDrawer:false});
    }
     openSideDrawerHandler = () =>{
        this.setState((prevState) => {
           return { showSideDrawer: !prevState.showSideDrawer};
       });
    }

    onchangeHandler = (event,id) => {
         const value = event.target.value;
         const updatedStateForm = {
             ...this.state.orderForm,
             [id]: {
                 ...this.state.orderForm[id],
                 value: value,
                 touched:true
             }
         }
         updatedStateForm[id].valid = checkValidity(updatedStateForm[id],this.state.orderForm[id].validation);
         this.setState({orderForm:updatedStateForm});

    }
    errorModalCloseHandler = ()=>{
        // const show = this.state.show;
        this.setState({error: false});
    }
    modalCloseHandler = ()=>{
        this.setState({show: false});
    }


    checkoutHandler = (event) =>{
        event.preventDefault();
        let valid = true;

        const items = {

        };
        const order = {
            clientDetails: {}
        };
        for(let key in this.state.orderForm){
            if(valid){
                valid = this.state.orderForm[key].valid;
            }
            order.clientDetails[key] = this.state.orderForm[key].value;
        }
        if(valid){
            this.setState({loader: true,showWarningMessage: false});
            for(let key in this.props.items){
                if(this.props.items[key] !== 0){
                    items[key] = {
                        ['quantity']: this.props.items[key],
                        ['price']: this.props.prices[key]
                    }
                }
            }

            order.items = items;
            order.totalPrice = this.props.totalPrice;
            axios.post(process.env.dataBaseURL,order).then(res => {
                this.setState({loader: false, show:true});
            }).catch(err =>{
                this.setState({error: true,loader: false})
            });
        }
        else{
            this.setState({showWarningMessage: true});
        }

    }

    render(){
        let form = [];
        let input = null;
        for(let key in this.state.orderForm){
             form.push({
                 id: key,
                 data: {

                     ...this.state.orderForm[key]
                 }
             });
        }
        input = form.map(ele =>{
            return <Input inputtype={ele.data.inputType} 
                          key={ele.id}
                          label={ele.id}
                          config={ele.data.config}
                          change={(event,id)=> this.onchangeHandler(event,ele.id)}
                          valid={ele.data.touched? ele.data.valid:true}/>
        });
        let spinner = null;
        if(this.state.loader){
            spinner= <Spinner />
        }
        let errorModal = null;
        if(this.state.error){
            errorModal = (<Modal show={this.state.error} click={this.errorModalCloseHandler}>
                       <p className={classes.ErrorMessage}>Sorry! somthing went wrong, please try again or reload the page</p> 
                        </Modal>);
        }
    

        return(
            <Aux>
                {spinner}
                <div className={classes.Checkout}>
                    <SimpleNav open={this.openSideDrawerHandler}/>
                    <SideDrawer open={this.state.showSideDrawer} close={this.closeSideDrawerHandler}/>
                    <h1>READY TO CHECKOUT!</h1>
                    <p>Please enter your details</p>
                    <div className={classes.Contact}>
                        {input}
                        {!this.state.showWarningMessage? null: <p className={classes.WarningMessage}>Please fill all the form sections to proceed</p>}
                    </div>
                    <div className={classes.Buttonn} style={{backgroundImage: "linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5)) ,url("+ img +")"}}>
                        <div className={classes.ButtonBox}>
                        <Button link='#' click={(event)=> this.checkoutHandler(event)}>CONTINUE TO CHECKOUT</Button>
                    </div>
                    </div>
                </div>
                <Modal show={this.state.show}>
                  <p style={{color:'white', fontSize:'3rem',marginBottom:'4rem'}}>Thank You For Shopping</p>
                   <p style={{fontSize:'1.9rem',marginBottom:'4rem'}}>Your order is placed and ready to dispatch. You will recieve the package in three to four days. Hope you like our product.</p>
                  <Button link='/' click={this.modalCloseHandler}>CLOSE</Button>
               </Modal>
               {errorModal}
            </Aux>
        );
    }
}
const mapStateToProps = state => {
    return {
        items: state.flowerTypes,
        prices: state.flowerPrices,
        totalPrice: state.price,
        purchaseable: state.purchaseable
    };
}


export default connect(mapStateToProps)(Checkout);