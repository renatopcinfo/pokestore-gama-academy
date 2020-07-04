import React, { useState } from 'react';
import ReactNotification from 'react-notifications-component';

import CardsContainer from '../src/components/CardsContainer';
import Cart from '../src/components/Cart';
import Modal from '../src/components/Modal';

import { Content } from './global.js';
import 'react-notifications-component/dist/theme.css'

function App() {

  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [showModal, setShowModal] = useState(false);


  function endShop() {
    setCartItems([]);
    setTotalPrice(0);

    setShowModal(true);
    setTimeout(() => {
      setShowModal(false)
    }, 4000);
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

  function showModalShop() {
    if (showModal === true)
      return (<Modal />);
  }

  return (
    <>
      <ReactNotification />
      <Content>
        {getCards()}
        {showCart(cartItems, totalPrice)}
        {showModalShop()};
      </Content>
    </>
  );
}

export default App;
