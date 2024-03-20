import React, { useEffect, useState } from "react";
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

    const pokeFun = async() => {
        setLoading(true)
        const res = await axios.get(url);
        const arrayOfNamesAndUrl = res.data.results
        // console.log("array of names + URl", arrayOfNamesAndUrl);
        setNextUrl(res.data.next);
        setPreviousUrl(res.data.previous);
        getPokemon(arrayOfNamesAndUrl)
        // console.log("pokeFun (20 pokemon): ", res.data.results)
        setLoading(false)
        console.log("array of 40 (pokeData): ", pokeData)
    }
    
    const orderById = (Array) => {
        Array.sort((a, b) => a.id > b.id ? 1:-1)
    }

    const getPokemon = async(res) => {
        res.map(async(pokeObject) => {
            // console.log("20pokemonInfo:",item)
            const pokemonsUrl = await axios.get(pokeObject.url)
            // console.log("Pokemon Info: ", result.data)
            setPokeData(state => {
                state = [...state, pokemonsUrl.data];
                orderById(state)
                return state;
            })
        })
    }

    useEffect(() => {
        pokeFun();
        
    },[url])
    return(
        <>
            <div className="container">
                <div className="left-content">
                    <Card pokemon = {pokeData} loading = {loading} />
                    {/* <Card />
                    <Card />
                    <Here we fill dynamically now with useState() / useEffect() />
                    <Card />
                    <Card /> */}
                    <div className="btnContainer">
                        <button>Previous</button>
                        <button>Next</button>
                    </div>
                </div>
                <div className="right-content">
                    <Pokeinfo />
                </div>
            </div>
        
        </>
    )
}

export default Main;