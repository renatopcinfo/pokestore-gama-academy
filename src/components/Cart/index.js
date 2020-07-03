import React, { useState, useEffect } from 'react';

import {
  CartContainer,
  CartPhoto,
  H1,
  Items,
  ItemName,
  ItemPrice,
  BtnContent,
  H2,
  BtnShop
} from './styles';

export default function Cart({ cartItems, totalPrice, endShop }) {
  const [currentCartItems, setCartItems] = useState([]);

  useEffect(() => {
    setCartItems([...cartItems]);
  }, [cartItems])

  return (
    <CartContainer>
      <H1>Carrinho</H1>
      {
        currentCartItems.map(item => {
          return (
            <Items key={item.id}>
              <CartPhoto src={item.sprites.front_default} alt={item.name} />
              <ItemName>{item.name}</ItemName>
              <ItemPrice>{item.order}</ItemPrice>
            </Items>
          );
        })}

      <BtnContent>

        <H2>Total : R$ {totalPrice}</H2>
        <BtnShop onClick={() => {
          endShop()
        }}

        >Finalizar compra</BtnShop>
      </BtnContent>
    </CartContainer>
  );
}