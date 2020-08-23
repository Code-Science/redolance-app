import React, { Component } from 'react';
import classes from './App.css';
import Layout from './containers/Layout/Layout';
import FlowersSelection from './containers/FlowersSelection/FlowersSelection';
import About from './components/About/About';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Checkout from './components/Checkout/Checkout';
import { connect} from 'react-redux';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className={classes.App}>
        <Switch>
            {this.props.purchaseable? <Route path="/Checkout" exact component={Checkout}/>:null}
            <Route path="/ContactUs" exact component={Contact}/>
            <Route path="/">
               <Layout>
                 <About />
                 <FlowersSelection />
              </Layout>
            </Route>
         </Switch>
        <Footer />
      </div>
      </BrowserRouter>
    );
  }
}
const mapStateToProps = state => {
  return {
      purchaseable: state.purchaseable
  };
}

export default connect(mapStateToProps)(App);
