import React from 'react';

const Cart = (props) => {
     const cart = props.cart;
     const total = cart.reduce((total, country) => total+country.population, 0)

    return (
        <div>
            <h1> Country added:{cart.length} </h1>
           <h1>Total population:{total}</h1>
        </div>
    );
};

export default Cart;