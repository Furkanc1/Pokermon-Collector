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
                pokemon.map((item) => {
                    const pokemonName = item.name
                    const pokemonId = item.id
                    const pokemonDefaultPic = item.sprites.front_default
                return (
                    <>
                        <div className="card" key={item.id} onClick={() => pokemonInfo(item)}>
                            <h1>{pokemonId}</h1>
                            <img
                            src={pokemonDefaultPic}
                            alt="pokemonPic"></img>
                            <h2>{pokemonName.charAt(0).toUpperCase() + pokemonName.substring(1)}</h2>
                        </div>
                    </>
                );
            }))
        }
    </>
  );
};

export default Card;
