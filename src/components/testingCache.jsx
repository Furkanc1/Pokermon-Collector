import React, { useEffect, useState } from 'react';
import { fetchAndCachePokemonData, getCachedPokemonData } from './cachedPokemon'

const TestingCache = () => {
    const [pokemonData, setPokemonData] = useState(null)

    useEffect(() => {
        const cachedData = getCachedPokemonData();
        if (cachedData) {
            setPokemonData(cachedData);
        } else {
            fetchAndCachePokemonData().then(() => {
                const updatedData = getCachedPokemonData()
                setPokemonData(updatedData)
            }).catch(err => console.error("error fetching pokemon data", err))
        }
    }, [] )
    return(
        <>
        <div className='landingPageContainer'>
            {
                pokemonData && (
                    <ul>
                        {pokemonData.results.map(pokemon => (
                            <li key={[pokemon.name, pokemon.url]}>
                                <h3>Name:</h3>
                                {pokemon.name}
                                <h3>Link:</h3>
                                {pokemon.url}
                             </li>
                        ))}
                        
                    </ul>
                    
                )
            }
        </div>
        </>
    )
}

export default TestingCache