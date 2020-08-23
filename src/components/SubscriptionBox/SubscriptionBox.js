import React, {Component} from 'react';
import classes from './SubscriptionBox.css';
import img from '../../assets/hv.jpg';
import Button from '../Button/Button';
import Modal from '../UI/Modal/Modal';
import Aux from '../../hoc/Aux';
import axios from 'axios';
import Spinner from '../UI/Spinner/Spinner';
import { checkValidity } from '../../store/utilities';


class SubscriptionBox extends Component{

    state = {
        show: false,
        value: null,
        loader: false,
        subscriptionValidation: {
            isRequired: true,
            requiredSymbol: '@',
            requiredString: '.com'
        },
        wrongEmail: false,
        error: false
    }
    
    modalCloseHandler = ()=>{
        const show = this.state.show;
        this.setState({show:!show});
    }
    
    subscriptionContinueHandler = (event) => {
        event.preventDefault();
        const element = document.getElementById('mail');
        const value = element.value;
        const valid = checkValidity(element,this.state.subscriptionValidation);
        if(valid){
            this.setState({loader: true, wrongEmail: false});
            const data = {Email: value}
            axios.post("https://redolance-8c769.firebaseio.com/users.jso", data).then(response =>{
                this.setState({value:value, show: true, loader: false});
            }).catch(err =>{
                this.setState({error:true, loader: false});
            });
        }else{
            this.setState({wrongEmail:true});
        }
    }
    errorModalCloseHandler = ()=>{
        // const show = this.state.show;
        this.setState({error: false});
    }

    render(){

        let spinner = null;
        if(this.state.loader){
            spinner= <Spinner />
        }
        let errorModal = null;
        if(this.state.error){
            errorModal = (<Modal show={this.state.error} click={this.errorModalCloseHandler}>
                       <p className={classes.ErrorMessage}>Sorry! somthing went wrong, please try again</p> 
                        </Modal>);
        }

        
        return(
            <Aux>
                {spinner}
              <div className={classes.SubscriptionBox} id='subscribe'>
                  <img src={img} />
                  <p className={classes.Para}><strong>Subscribe</strong> to get notified on new arrivals and latest design trends.</p>
               <div >
                    <form>
                        <label htmlFor="mail"> Email: <input type='email' id='mail' placeholder='   xyz@example.com' /></label> 
                        <aside>
                             <Button link='#' click={this.subscriptionContinueHandler}>Subscribe!</Button>  
                        </aside>
                    </form>
               </div>
               {!this.state.wrongEmail? null: <p className={classes.WarningText}>Please enter valid email address.</p> }
              </div>
               <Modal show={this.state.show} click={this.modalCloseHandler}>
                  <p style={{color:'white', fontSize:'3rem'}}>you subscribed!</p>
               </Modal>
               {errorModal}
            </Aux>
        );
    }
} 

export default SubscriptionBox;