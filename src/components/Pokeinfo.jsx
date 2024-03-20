import React from "react";

const Pokeinfo = ({data}) => {
    // let clickedPokemonName = data.name
    // let clickedPokemonImg = data.sprites.front_default
    // let clickedPokemonAbilities = data.abilities
    // let clickedPokemonHP = data.stats.
    // let clickedPokemonSpped = data.
    // let clickedPokemonAttack = data.
    // let clickedPokemonDefense = data.
    // let clickedPokemonSpecialMove = data.
    console.log(data
        )
    return(
        <>
        {
            (!data) ? "" : (
                <>
                    <h1 className="Pokename">{data.name}</h1>
                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`} alt="pokemonPic"></img>
                    <div className="abilities">
                        {
                            data.abilities.map(abil => {
                                return(
                                    <>
                                        <div className="group">
                                            <h2>{abil.ability.name}</h2>
                                        </div>
                                    </>
                                )
                            })
                        }

                        <br></br>
                        {/* PICK UP HERE TIME: 34:10 */}
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
        </>
    )
}

export default Pokeinfo