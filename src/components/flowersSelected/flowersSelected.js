import React, {useState, useEffect} from 'react';
import classes from './flowersSelected.css';

const FlowerSelected = (props) => {

    const [display, setDisplay] = useState({
        show: false
    });
    const [mount, setMount] = useState({
        Mount: false
    });

    useEffect(()=>{
        setMount({
            Mount: true
        })
    },[]);
    
    useEffect(() => {
        if((props.total>=0 && props.cart != ' ')&& mount.Mount){
            setDisplay({
                show:true
            });
        }

        const timer = setTimeout(() => {
        
            setDisplay({
                show:false
            });    
        }, 2000);
        return () => clearTimeout(timer);
      }, [props.total]);



    let item;
    if(props.total === 1){
        item = 'item';
    }
    else{
        item = 'items'
    }
    let para = null;
    if(props.cart === 'add'){
         para = <p>{props.total} {item} added to your cart!</p>
    } 
    if(props.cart === 'remove'){
         para = <p>1 item removed from your cart!</p>
    }

    return (
        <div className={classes.Selected} style={{
            transform: display.show? 'translateY(0)': 'translateY(10vh)',
            opacity: display.show? '1':'0'
        }}>
            {para}
        </div>
    );

}

export default FlowerSelected;