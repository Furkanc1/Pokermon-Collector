import Search from "./search";
import "../components/style.css";
import React, { useState } from "react";
import gettingPokemon from "./Utils/gettingPokemon";

const SearchPage = () => {
    const [pokemon, setPokemon] = useState();
    // const [loading, setLoading] = useState(true)
    const [searchLoading, setSearchLoading] = useState(false)
    
    const uppercaseName = (name) => {
        let uppercased = name.charAt(0).toUpperCase() + name.substring(1)
        return uppercased
      } 

    const getSearchedPokemon = async(search) => {
        let userSearch = search.toLowerCase(); 
        if (search) {
          setSearchLoading(true)
          const response = await gettingPokemon(userSearch)
          // console.log( "search response data:" ,response)
          const results = await response.json()
          console.log('searched pokemon info:' , results)
          setPokemon(results)
          setSearchLoading(false)
        } else {
          console.log("error searching for pokemon")
        }
    }

  return (
    <div className="searchPageContainer">
      <div className="searchbarContainer">
        <Search getSearchedPokemon={getSearchedPokemon} />
        {!searchLoading && pokemon ? (
          <div className="searchedPokemonContainer">
            <div className="searchedPokemonContainer ">
              <h1 className="Pokename">{uppercaseName(pokemon.name)}</h1>
              <div className="pokeDataContainer">
                <h3 id="typeText">Type(s): </h3>
                {pokemon.types.map((data, index) => {
                  return (
                    <h3 key={`${data.type.name}-${index}`}>
                      <li className="pokeTypes">- {data.type.name} </li>
                    </h3>
                  );
                })}
              </div>

              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
                alt="pokemonPic"
              ></img>
              <div className="abilities">
                <div className="pokeDataContainer">
                  <h3 className="">Abilities:</h3>
                  {pokemon.abilities.map((abil, index) => {
                    return (
                      <div
                        key={`${abil.ability.name}-${index}`}
                        className="group"
                      >
                        <h2>{abil.ability.name}</h2>
                      </div>
                    );
                  })}
                </div>

                <br></br>
              </div>

              <div className="base-stat">
                <h3 className="pokeDataContainer">Stats:</h3>
                {pokemon.stats.map((stats, index) => {
                  return (
                    <div key={`${stats.stat.name}-${index}`}>
                      <h3>
                        {stats.stat.name}: {stats.base_stat}
                      </h3>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ) : (
          searchLoading
        )}
      </div>
      <div className="welcomeText">
            <h2>
                <p className="importantText">
                Enter Pokemon Name for information ! 
                <br></br>
                (How to use: Enter Pokemon Name Spelled Correctly) 
                <br></br>
                <br></br>
                Dev Note: Need to add more error handling for incorrect spell-cases
                </p>
            </h2>
        </div>
    </div>
  );
};

export default SearchPage;
