import React , {useRef , useState} from 'react'
import classes from './MealItemForm.module.css'
import Input from '../../UI/Input'




function MealItemForm(props) {

    const amountInputRef = useRef();

    const [amountIsValid,setAmountIsValid] = useState(true);
  
   
    
    const submitFormHandler = (event) => {
      event.preventDefault();

      //amountInputRef.current gives you the access to the DOM element in which it is called directly
      //Now, you can use the .value property to access the Input element's value. Since it is a
      //user defined component, we have to use the React.forwardRef method in the child component
      //which is Input here in this case. Otherwise, just referencing would suffice. 

     const enteredAmount = amountInputRef.current.value;

     const enteredAmountNumber = +enteredAmount;

     

     if(enteredAmount.trim().length===0 ||
        enteredAmountNumber<0 ||
        enteredAmountNumber>5 ) {
            setAmountIsValid(false);
            return;
        }

        props.onAddToCart(enteredAmountNumber);

    }    

    return (
        <form className={classes.form} onSubmit={submitFormHandler}> 
            <Input label="Amount" input={{
                ref:amountInputRef,
                id:'amount_' + props.id,
                type:"number",
                min: "1",
                max:"5",
                step:"1",
                defaultValue:"1"
            }} />
            <button>+ Add</button>
        </form>
    )
}

export default MealItemForm
