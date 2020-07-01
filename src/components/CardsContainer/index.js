import React, { useState, useEffect } from 'react';
import { Container } from './styles';

import api from '../../services/api';
import Card from '../Card';

export default function CardsContainer(addToCart, searchItem) {
  const [pokemonType, setPokemonType] = useState([]);

  useEffect(() => {
    async function getPokemons() {
      const response = await api.get('/electric');
      setPokemonType(response.data.pokemon)
      //console.log(response.data);
    }
    getPokemons();
  }, [])

  function addItem(currentPokemon) {
    addToCart(currentPokemon)
  }

  return (
    <Container>
      {pokemonType
        // .filter(pokemon => pokemon.pokemon.name.includes(searchItem))
        .map(pokemon => {
          return <Card pokemon={pokemon} addToCart={addItem} key={pokemon.pokemon.name} />

        })}
    </Container>
  )
}