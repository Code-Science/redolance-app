import React from 'react';
import classes from './Header.css';
import Aux from '../../hoc/Aux';
import Toolbar from './Toolbar/Toolbar';
import styled from 'styled-components';
import img from '../../assets/backhead.jpg';
import Logo from './Logo/Logo';
import VideoHead from '../VideoHead/VideoHead';
import Button from '../Button/Button';


const Div = styled.div`
  height: 95vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  clip-path: polygon(0 0,100% 0,100% 80vh,0 100%);
  z-index:1;
  position: relative;
  margin-bottom: 3rem;
  @media (max-width: 600px) {
    clip-path: polygon(0 0,100% 0,100% 90vh,0 100%);
  }
`;


const Header = (props) => {
    return (
        <Div>
            <VideoHead />
            <div className={classes.LogoBox}>
                <Logo />
            </div>
            <Toolbar open={props.open}/>
            <div className={classes.TextBox}>
                <h1>
                    <span className={classes.Main}>flowers</span>
                    <span className={classes.Sub}>whisper beauty to the world</span>
                </h1>
                <Button link='#collection'>Our collection</Button>
            </div>
        </Div>
    );
}

export default Header;
// background-image: linear-gradient(to right bottom,rgba(42, 20, 71,0.8), rgba(18, 18, 20,0.8)) ,url(${img});
