import React, { useState } from 'react';
import ReactNotification from 'react-notifications-component';
import Swal from 'sweetalert2';

import CardsContainer from '../src/components/CardsContainer';
import Cart from '../src/components/Cart';

import { Content } from '../src/styles/styles.js';
import GlobalStyle from './styles/global';

import 'react-notifications-component/dist/theme.css'
import Header from './components/Header';

function App() {

  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [searchItem, setSearchItem] = useState('');

  function endShop() {
    setCartItems([]);
    setTotalPrice(0);

    Swal.fire({
      title: 'Obrigado pela compra!',
      text: `Você ganhou cashback: R$${Math.round(0.03 * totalPrice)},00 (5%)`,
      icon: 'success',
      confirmButtonText: 'Comprar mais'
    })
  }

  function showCart(cartItems, totalPrice) {
    return (<Cart cartItems={cartItems} totalPrice={totalPrice} endShop={endShop} />)
  }

  function addPokemonToCart(currentPokemon) {
    setCartItems([...cartItems, currentPokemon]);
    setTotalPrice(totalPrice + currentPokemon.order);
  }

  function getCards() {
    return <CardsContainer addToCart={addPokemonToCart} searchItem={searchItem} />
  }

  return (
    <>
      <ReactNotification />
      <Header onSearchClick={(searchItem) => { setSearchItem(searchItem) }} />
      <Content>
        <GlobalStyle />
        {getCards()}
        {showCart(cartItems, totalPrice)}
      </Content>
    </>
  );
}

export default App;
