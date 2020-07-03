import React, { useState, useEffect } from 'react';

import { CartContainer, CartPhoto } from './styles';

export default function Cart({ cartItems, totalPrice, endShop }) {
  const [currentCartItems, setCartItems] = useState([]);

  useEffect(() => {
    setCartItems([...cartItems]);
  }, [cartItems])

  return (
    <CartContainer>
      <h1>Carrinho de compras</h1>
      {
        currentCartItems.map(item => {
          return (
            <div key={item.id}>
              <CartPhoto src={item.sprites.front_default} alt={item.name} />
              <p>{item.name}</p>
              <p>{item.order}</p>
            </div>
          );
        })}

      <h2>Total : R$ {totalPrice}</h2>
      <button onClick={() => {
        endShop()
      }}

      >Finalizar compra</button>
    </CartContainer>
  );
}