import React, { useEffect, useState } from 'react';

import { Container } from './styles';
import Card from '../Card';
import api from '../../services/api';

export default function CardsContainer({ addToCart, searchTerm }) {
  const [pokemonType, setPokemonType] = useState([]);

  useEffect(() => {
    async function getPokemon() {
      const response = await api.get('/electric');
      setPokemonType(response.data.pokemon);
    }
    getPokemon();

  }, [])

  function addItem(currentPokemon) {
    addToCart(currentPokemon)
  }

  return (
    <Container>
      {pokemonType
        //.filter(pokemon => pokemon.pokemon.name.includes(searchTerm))
        .map(pokemon => {
          return <Card pokemon={pokemon} addToCart={addItem} key={pokemon.pokemon.name} />
        })}
    </Container>
  );
};