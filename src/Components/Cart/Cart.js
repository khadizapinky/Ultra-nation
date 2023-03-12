import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    const total = cart.reduce((total, country) => total + country.population, 0)
   
    return (
        <div>
            <h1>Country Added : {cart.length}</h1>
            <h1>Total Population : {total} </h1>
            
        </div>
    );
};

export default Cart;