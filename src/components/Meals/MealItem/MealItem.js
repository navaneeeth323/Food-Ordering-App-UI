import React , { useContext} from 'react'
import CartContext from '../../../store/cart-context';
import classes from './MealItem.module.css'
import MealItemForm from './MealItemForm';


function MealItem(props) {

    const ctx = useContext(CartContext);

    const price = `$${props.price.toFixed(2)}`;

    const addToCartHandler = (amount) => {
       ctx.addItem({
           id:props.id,
           price:props.price,
           name:props.name,
           amount:amount
       })
    }

    return (
        <li className={classes.meal}>
            <div>
                <h3>{props.name}</h3>
                <div
                    className={classes.description}
                >{props.description}
                </div>
                <div
                    className={classes.price}
                >{price}
                </div>
            </div>
            <div>
               <MealItemForm onAddToCart={addToCartHandler} id={props.id}/>
            </div>
        </li>
    )
}

export default MealItem
