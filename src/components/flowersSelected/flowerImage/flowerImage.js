import React from 'react';
import classes from './flowerImage.css';
import PropTypes from 'prop-types';

import daisy from '../../../assets/daisy.jpg';
import freesia from '../../../assets/freesia.jpg';
import hydrangea from '../../../assets/hydrangea.jpg';
import iris from '../../../assets/iris.jpg';
import sunflower from '../../../assets/sunflower.jpg';
import pinkRose from '../../../assets/pinkRose.jpg';
import redRose from '../../../assets/redRose.jpg';
import hyacinth from '../../../assets/hyacinth.jpg';
import tulip from '../../../assets/tulip.jpg';
import whiteMagnolia from '../../../assets/whiteMagnolia.jpg';
import whiteRose from '../../../assets/whiteRose.jpg';
import lily from '../../../assets/lily.jpg';



const FlowerImage = (props)=> {
    
    let image = null;

    switch (props.type) {
        case ('daisy'):
            image = daisy;
            break;
        case ('freesia'):
            image = freesia;
            break;
        case ('hydrangea'):
            image = hydrangea;
            break;
        case ('iris'):
            image = iris;
            break;
        case ('sunflower'):
            image = sunflower;
            break;
        case ('pinkRose'):
            image = pinkRose;
            break;
        case ('redRose'):
            image = redRose;
            break;
        case ('hyacinth'):
            image = hyacinth;
            break;
        case ('tulip'):
            image = tulip;
            break;
        case ('whiteMagnolia'):
            image = whiteMagnolia;
            break;
        case ('lily'):
            image = lily;
            break;
        case ('whiteRose'):
            image = whiteRose;
            break;
        default:
            image= null;
    }

    return (
       <div style={{backgroundImage: "url("+ image +")"}} className={classes.img}>
       </div>

    );   

}

FlowerImage.propTypes = {
    type: PropTypes.string.isRequired
};

export default FlowerImage;