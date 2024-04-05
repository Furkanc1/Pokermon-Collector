import React, { createContext, useContext, useEffect, useState } from 'react';
import { getCachedPokemonData } from './cachedPokemon';

const PokemonDataContext = createContext();

export const usePokemonData = () => useContext(PokemonDataContext);

export const PokemonDataProvider = ({ children }) => {
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    const cachedData = getCachedPokemonData();
    if (cachedData) {
      setPokemonData(cachedData);
    }
  }, []);

  return (
    <PokemonDataContext.Provider value={pokemonData}>
      {children}
    </PokemonDataContext.Provider>
  );
};
