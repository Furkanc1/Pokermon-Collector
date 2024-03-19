import React from "react";

const Pokeinfo = () => {
    return(
        <>
            <h1 className="Pokename">PokeName</h1>
            <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/050.png" alt="pokemonPic"></img>
            <div className="abilities">
                <div className="group">
                    <h2>blaze</h2>
                </div>
                <div className="group">
                    <h2>pewpie</h2>
                </div>
                <br></br>
            </div>
            <div className="base-stat">
                <h3>Hp:30</h3>
                <h3>Speed:50</h3>
                <h3>Attack:50</h3>
                <h3>Defense:50</h3>
                <h3>Special-Attack:50</h3>
            </div>
        </>
    )
}

export default Pokeinfo