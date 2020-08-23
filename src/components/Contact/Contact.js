import React, {Component} from 'react';
import classes from './Contact.css';
import SimpleNav from './SimpleNav/SimpleNav';
import Aux from '../../hoc/Aux';
import img from '../../assets/backhead.jpg';
import SideDrawer from '../Header/SideDrawer/SideDrawer';

class Contact extends Component{

   state = {
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
   render(){
      return(
         <Aux>
           <SimpleNav open={this.openSideDrawerHandler}/>
           <SideDrawer open={this.state.showSideDrawer} close={this.closeSideDrawerHandler}/>

           <div className={classes.ImageHead} style={{backgroundImage: "url("+ img +")"}}>
              {/* <img src={img} /> */}
           </div>
            <div className={classes.Content}>
              <h1 >how may we help you </h1>
              <div>
                 <p>Our customer service team is available from <strong>9:00 am</strong> to <strong>5:00 pm</strong> (mon-sun). If you have any question regarding the product or if there is anything you need help with related to our services, you can contact us at the address below or make a call. Response to the queries sent through email might take few hours or even a day. We would do our best to help as quick as possible</p>
                 <p><strong>Office Address:</strong> xyz, Gfhgg, Transilvania</p>
                 <p><strong>Phone No.:</strong> 001234567890</p>
                 <p><strong>Email Address:</strong> xyz.abc@practicing.com</p>
              </div>
            </div> 
        </Aux>
      );
   }
}
    


export default Contact;