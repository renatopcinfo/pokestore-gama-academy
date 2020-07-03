import React, { useEffect, useState } from 'react';
import { store } from 'react-notifications-component';
import { CardContainer, CardImg, CardName, CardPrice, CardButton } from './styles';

import api from '../../services/api';
const unknownPhoto = 'https://images.vexels.com/media/users/3/155301/isolated/preview/6a91c0d6c8ba37a9fd115e1776300319-pergunta-do-doodle-do-ponto-de-interroga----o-3d-by-vexels.png'

export default function Card({ pokemon, addToCart }) {
  const [currentPokemon, setCurrentPokemon] = useState({});
  const [pokemonPhoto, setPokemonPhoto] = useState('');

  useEffect(() => {
    async function getPokemon() {
      const response = await api.get(pokemon.pokemon.url);
      setCurrentPokemon(response.data);
      //console.log(response.data)
      //console.log(pokemon)

      if (response.data.sprites.front_default != null)
        setPokemonPhoto(response.data.sprites.front_default);
      else
        setPokemonPhoto(unknownPhoto);

    }
    getPokemon();
  }, [pokemon])

  return (
    <CardContainer>

      <CardImg src={pokemonPhoto} alt={currentPokemon.name} />

      <CardName>
        <p>{currentPokemon.name}</p>
        <p />
      </CardName>

      <CardPrice>
        <p>R$ {currentPokemon.order},00</p>
      </CardPrice>

      <CardButton
        onClick={() => {
          store.addNotification({
            title: 'Adicionado ao carrinho',
            insert: 'bottom',
            type: 'info',
            message: currentPokemon.name,
            container: 'bottom-right',
            dismiss: {
              duration: 1500,
              onScreen: true
            }
          });
          return addToCart(currentPokemon);
        }}
      >
        Adicionar ao carrinho
      </CardButton>
    </CardContainer>
  );

};