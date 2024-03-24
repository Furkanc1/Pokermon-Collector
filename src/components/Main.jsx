import React, { useEffect, useState, useCallback } from "react";
import Card from "./Card";
import Pokeinfo from "./Pokeinfo";
import '../components/style.css';
import axios from "axios";
const Main = () => {
    
    const [pokeData, setPokeData] = useState([]);
    const [loading, setLoading] = useState(true)
    const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/")
    const [nextUrl, setNextUrl] = useState()
    const [previousUrl, setPreviousUrl] = useState()
    const [pokeInfo, setPokeInfo] = useState();
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
    return(
        <>
            <div className="container">
                
                <div className="left-content">
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