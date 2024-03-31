import React from "react";
// const uppercaseName = (name) => {
//     name.charAt(0).toUpperCase() + name.substring(1)
// } 
const Card = ({ pokemon, loading, pokemonInfo }) => {
//   console.log("(Pokemon) 40:", pokemon);
  // console.log(loading)
  return ( 
    <>
        {
            loading ? (<h1> Loading... </h1>) : (
                pokemon.map((item, index) => {
                    const pokemonName = item.name.charAt(0).toUpperCase() + item.name.substring(1)
                    const pokemonId = item.id
                    const pokemonDefaultPic = item.sprites.front_default
                return (
                        <div className="card" key={`${item.id}-${index}`} onClick={() => pokemonInfo(item)}>
                            <h1>{pokemonId}</h1>
                            <img
                            src={pokemonDefaultPic}
                            alt="pokemonPic"></img>
                            <h2>{pokemonName}</h2>
                        </div>
                );
            }))
        }
    </>
  );
};

export default Card;
