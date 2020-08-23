import React from 'react';
import classes from './About.css';
import img1 from '../../assets/photo-1.jpg';
import img2 from '../../assets/photo-2.jpg';
import img3 from '../../assets/photo-3.jpg';


const About = (props) => {
    return (
        <div className={classes.About}>
            <h2 id='about'>our goal is to make your day special
            </h2>
            <div className={classes.Content}>
                <div className={classes.TextContent}>
                    <h3>Best for every occasion</h3>
                    <p>we offer fresh, vibrant and superior quality flowers that will make any event memorable and beautiful. whether you decorate stage for wedding or just share your feelings with anyone, flowers make it special.</p>
                    <h3>free bouquet making, flower arrangement on demand</h3>
                    <p>Choose flowers of your choice from our finest collection and decorating them would be our part if you wish to. Your order would be delivered fresh from the garden to your doorstep .</p>
                </div>
                <div className={classes.ImageContent}>
                    <img src={img1} alt='photo 1' className={classes.Photo1}/>
                    <img src={img2} alt='photo 2' className={classes.Photo2}/>
                    <img src={img3} alt='photo 3' className={classes.Photo3}/>

                </div>
            </div>
        </div>
    );
}

export default About;