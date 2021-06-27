import React, { useState } from 'react'
import Cart from './components/Cart/Cart';

import Header from './components/Layout/Header'
import Meals from './components/Meals/Meals'
import CartProvider from './store/CartProvider';

function App() {
   const [cartIsShown,setCartIsShown] = useState(false);
   
   const showCartHandler = () => {
     setCartIsShown(true);
   }

   const dontShowCartHandler = () => {
     setCartIsShown(false);
   }
  



  return (


    <CartProvider>
      {cartIsShown && <Cart onClick={dontShowCartHandler}/>}
      <Header onClick={showCartHandler}/>
      <main>
        <Meals />
      </main>
    </CartProvider>




  );
}

export default App;

