
import { useState } from 'react';
import GlobalContext from './GlobalContext';

function GlobalProvider(props) {
    const [cart, setCart] = useState([]);

    function addProductToCart(product) {        
        var copy = [...cart];
        copy.push(product);
        setCart(copy);
    }

    function clearCart() {
        console.log("Global clear");
    }

    function removeProductFromCart() {
        console.log("Global remove");
    }

    return (
        <GlobalContext.Provider value={{
            cart: cart,
            addProductToCart: addProductToCart,
            clearCart: clearCart,
            removeProductFromCart: removeProductFromCart,
        }}>
           {props.children}
        </GlobalContext.Provider>
    );
}

export default GlobalProvider;