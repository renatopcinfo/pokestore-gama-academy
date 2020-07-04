import React from 'react';

import { ModalShop } from './styles';

export default function Modal() {
  return (
    <ModalShop>
      <h1>Seu pedido foi concluído com sucesso!
        <p>Em instante você receberá um e-mail com o andamento do seu pedido.</p>
        Obrigado pela compra!
      </h1>
    </ModalShop>
  )
}