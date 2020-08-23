import React, {Component} from 'react';
import classes from './Layout.css';
import Aux from '../../hoc/Aux';
import Header from '../../components/Header/Header';
import SideDrawer from '../../components/Header/SideDrawer/SideDrawer';
import SubscriptionBox from '../../components/SubscriptionBox/SubscriptionBox';

class Layout extends Component{
    state = {
        showSideDrawer: false
    }

    closeSideDrawerHandler =()=>{
        this.setState({showSideDrawer:false});
    }

    openSideDrawerHandler =()=>{
        this.setState((prevState) => {
            return { showSideDrawer: !prevState.showSideDrawer};
        });
    }

    render(){
        // const cart = [classes.Cart,'fas','fa-cart-plus','fa-2x'];
        return(
            <Aux>
                <Header open={this.openSideDrawerHandler}/>
                <SideDrawer open={this.state.showSideDrawer} close={this.closeSideDrawerHandler}/>
                <main className={classes.content}>
                    {this.props.children}
                    <SubscriptionBox />
                </main>
            </Aux>
        );
    }
} 

export default Layout;