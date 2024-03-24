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
    // console.log(data)
    return(
        <>
        {
            (!data) ? "" : (
                <>
                <div className="right-content-container">
                    <h1 className="Pokename">{data.name}</h1>
                    <div className="pokeDataContainer">
                        <h3 id="typeText">Type(s): </h3> 
                    
                    {
                        data.types.map((data, index) => {
                            return( 
                                    <h3 key={`${data.type.name}-${index}`}>
                                        <li className="pokeTypes">- {data.type.name} </li>
                                    </h3>
                            )
                    })

                    }
                    </div>
                    
                    
                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`} alt="pokemonPic"></img>
                    {/* <h3>Height: {data.height}</h3>
                    <h3>Weight: {data.weight}</h3> */}
                    <div className="abilities">
                        <div className="pokeDataContainer">
                        <h3 className="">Abilities:</h3>
                        {
                            data.abilities.map((abil, index) => {
                                return(
                                        <div key={`${abil.ability.name}-${index}`} className="group">
                                            <h2>{abil.ability.name}</h2>
                                        </div>
                                )
                            })
                        }
                        </div>
                        
                        

                        <br></br>
                    </div>
                    <div className="base-stat">
                    <h3 className="pokeDataContainer">Stats:</h3>
                        {
                            data.stats.map( (stats, index) => {
                                return(
                                    <div key={`${stats.stat.name}-${index}`}>
                                        <h3>{stats.stat.name}: {stats.base_stat}</h3>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                </>
            )
        }
        </>
    )
}

export default Pokeinfo