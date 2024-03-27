import React, { useEffect, useState, useCallback } from "react";
import Card from "./Card";
import Pokeinfo from "./Pokeinfo";
import '../components/style.css';
import axios from "axios";
import Search from "./search";
import gettingPokemon from "./Utils/gettingPokemon";
const Main = () => {
    
    const [pokeData, setPokeData] = useState([]);
    const [loading, setLoading] = useState(true)
    const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/")
    const [nextUrl, setNextUrl] = useState()
    const [previousUrl, setPreviousUrl] = useState()
    const [pokeInfo, setPokeInfo] = useState();
    const [pokemon, setPokemon] = useState();
    const [searchLoading, setSearchLoading] = useState(false)
    // console.log(searchLoading)
    // console.log(nextUrl)
    // console.log(previousUrl) 
    // console.log(setUrl)

    // const pokeFun = async() => {
        
    // }
    
    // const orderById = (Array) => {
    //     Array.sort((a, b) => a.id > b.id ? 1:-1)
    // }

    // DIDNT WORK (DUPLICATED ARRAY)
    // const getPokemon = async(res) => {
    //     res.map(async(pokeObject) => {
    //         // console.log("20pokemonInfo:",item)
    //         const pokemonsUrl = await axios.get(pokeObject.url)
    //         console.log("Pokemon Info: ", pokemonsUrl.data)
    //         let pokemonArray = []
    //         pokemonArray.map((state => {
    //             state = [...state, pokemonsUrl.data];
    //             orderById(state)
    //             return state
    //         }))
    //         setPokeData(pokemonArray)
    //     })
    // }

    const getPokemon = async(res) => {
        const pokemonData = [];
        for(let i = 0; i < res.length; i++) {
            const currentItem = res[i];
            const pokemonsUrl = await axios.get(currentItem.url);

            pokemonData.push(pokemonsUrl.data);
        }

        setPokeData(pokemonData);
    }

    const getPokeFun = useCallback( async() => {
        setLoading(true)
        const res = await axios.get(url);
        const arrayOfNamesAndUrl = res.data.results
        console.log("array of names + URl", arrayOfNamesAndUrl);
        setNextUrl(res.data.next);
        setPreviousUrl(res.data.previous);
        getPokemon(arrayOfNamesAndUrl)
        // console.log("pokeFun (20 pokemon): ", res.data.results)
        setLoading(false)
        // console.log("array of 40 (pokeData): ", pokeData)
    },[url])

    useEffect(() => {
        getPokeFun();
        
    },[url, getPokeFun])

    const getSearchedPokemon = async(search) => {
        setSearchLoading(true)
        const response = await gettingPokemon(search)
        // console.log( "search response data:" ,response)
        const results = await response.json()
        console.log('searched pokemon info:' , results)
        setPokemon(results)
        setSearchLoading(false)
    }
    return(
        <>
            <div className="container">
                <div className="left-content">
                <div className="searchbarContainer">

                <Search getSearchedPokemon={getSearchedPokemon}/>
                {!loading && pokemon ? (
                    <div className="searchedPokemonContainer">
                        <div className="searchedPokemonContainer">
                        <h1 className="Pokename">{pokemon.name}</h1>
                        <div className="pokeDataContainer">
                            <h3 id="typeText">Type(s): </h3> 
                            {
                                pokemon.types.map((data, index) => {
                                    return( 
                                        <h3 key={`${data.type.name}-${index}`}>
                                            <li className="pokeTypes">- {data.type.name} </li>
                                        </h3>
                                    )
                                })
                            }
                        </div>

                        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`} alt="pokemonPic"></img>
                        {/* <h3>Height: {data.height}</h3> 
                        <h3>Weight: {data.weight}</h3> */}
                        <div className="abilities">
                        <div className="pokeDataContainer">
                            <h3 className="">Abilities:</h3>
                            {
                                pokemon.abilities.map((abil, index) => {
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
                            pokemon.stats.map( (stats, index) => {
                                return(
                                    <div key={`${stats.stat.name}-${index}`}>
                                        <h3>{stats.stat.name}: {stats.base_stat}</h3>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                
                    </div>
                ): searchLoading}

                </div>
                <br className="hideOnMobile"></br>
                <br className="hideOnMobile"></br>
                    <Card pokemon = {pokeData} loading = {loading} pokemonInfo = {pokeinfo => setPokeInfo(pokeinfo)} />
                    {/* <Card />
                    <Card />
                    <Here we fill dynamically now with useState() / useEffect() /> */}
                    <div className="btnContainer">
                        {
                            previousUrl &&
                            <button onClick={()=>{
                            setPokeData([])
                            setUrl(previousUrl)
                        }}>Previous</button>
                        }
                        <button onClick={() => {
                            setPokeData([])
                            setUrl(nextUrl)
                        }}>Next</button>
                    </div>
                </div>
                <div className="right-content">
                    
                    <Pokeinfo data = {pokeInfo}/>
                </div>
            </div>
        </>
    )
}

export default Main;