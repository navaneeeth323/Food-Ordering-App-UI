import React, { useContext , useState, useEffect } from 'react'
import CartContext from '../../store/cart-context'
import CartIcon from '../Cart/CartIcon'
import classes from './HeaderCartButton.module.css'

function HeaderCartButton (props) {
   
   const [btnIsHighlighted,setBtnIsHighlighted] = useState(false);
   const cartCtx = useContext(CartContext);
   const {items} = cartCtx;
   const numberOfCartItems = items.reduce((curNumber,item)=> {
       return curNumber + item.amount;
   },0);

   const buttonClass = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`;

   useEffect(() => {
       if(items.length === 0) {
           return;
       }
       setBtnIsHighlighted(true);

     const timer = setTimeout(() => {
           setBtnIsHighlighted(false);
       },300)

       return () => {
          clearInterval(timer); 
       }

   }, [items])

    return (
        <button onClick={props.onClick} className={buttonClass}>
            <span className={classes.icon}>
                <CartIcon/>
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numberOfCartItems}</span>
        </button>
    )
}

export default HeaderCartButton
