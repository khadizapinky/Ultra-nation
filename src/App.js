import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { useEffect } from 'react';
import Country from './Components/Country/Country';
import Cart from './Components/Cart/Cart';

function App() {
  const [countries, setCountries] = useState([]);


  useEffect(() => {
      fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => setCountries(data));
  },[])
  const [cart, setCart] = useState([]);
   
  const handleAddCountry = (country) => {
       const newCart = [...cart, country];
       setCart(newCart);
  }
  return (
    <div className="header">
      <div className="all_country">
      <h1>All country:{countries.length}</h1>
      <h2>Total Population:</h2>
      {
        countries.map(country => <Country
           handleAddCountry={handleAddCountry}
           country={country}
           ></Country>)
      }
      </div>
      <div className="cart">
      <Cart cart={cart}></Cart>
 </div>
    </div>
  );
}

export default App;
