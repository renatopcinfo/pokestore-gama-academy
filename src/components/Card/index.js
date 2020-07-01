import React, { useEffect, useState } from 'react';
import api from '../../services/api';

export default function Card({ pokemon, addToCart }) {
  const [currentPokemon, setCurrentPokemon] = useState({});

  useEffect(() => {
    async function getPokemon() {
      const response = await api.get(pokemon.pokemon.url);
      setCurrentPokemon(response.data);
      //console.log(response.data)
    }
    getPokemon();
  }, [pokemon])

  return (
    <div>
      <p>{currentPokemon.name}</p>
    </div>
  );

};