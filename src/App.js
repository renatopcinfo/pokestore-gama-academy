import React, { useState, useEffect } from 'react';
import ReactNotification from 'react-notifications-component';

import CardsContainer from '../src/components/CardsContainer';
import Cart from '../src/components/Cart';

import { Content } from './global.js';

function App() {

  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);


  function endShop() {
    setCartItems([]);
    setTotalPrice(0);
  }

  function showCart(cartItems, totalPrice) {
    return (<Cart cartItems={cartItems} totalPrice={totalPrice} endShop={endShop} />)
  }

  function addPokemonToCart(currentPokemon) {
    setCartItems([...cartItems, currentPokemon]);
    setTotalPrice(totalPrice + currentPokemon.order);
  }

  function getCards() {
    return <CardsContainer addToCart={addPokemonToCart} />
  }

  return (
    <Content>
      <ReactNotification />
      {getCards()}
      {showCart(cartItems, totalPrice)}
    </Content>
  );
}

export default App;
