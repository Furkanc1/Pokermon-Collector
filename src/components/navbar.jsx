import React from "react";
import '../components/style.css';
// import { Route, Routes } from "react-router-dom"

const Navbar = () => {
    return(
        <>
            <div className="navbarContainer">
                <a href="/" className="web-title">
                    Pokérmon-Collector
                </a>
                <a id="gottaCatchEmAll" href="/pokemonIndex">
                <p className="subtitle"> Gotta Catch 'Em All
                <img id="arrow" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Arrow_facing_right_-_Red.svg/2560px-Arrow_facing_right_-_Red.svg.png" alt="arrow"></img>
                </p>
                </a>
                <a href="/pokemonIndex">
                <img src="https://cdn.iconscout.com/icon/free/png-256/free-pokemon-pokeball-game-go-34722.png" alt="pokeball"></img>
                </a>
                <ul>
                    <li> 
                        <a href="./about" className="">About</a> 
                    </li>
                    <li> 
                        <a href="/signup" className="">Sign-Up</a> 
                    </li>
                    <li> 
                        <a href="/login" className="">Log-In</a> 
                    </li>
                </ul>
                
            </div>
        </>
    )
}

export default Navbar;