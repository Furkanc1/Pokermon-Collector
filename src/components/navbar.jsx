import '../components/style.css';
import { State } from "../App";
import React, { useContext, useState } from "react";
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { DropdownItem } from './Utils/dropdown';
// import { Route, Routes } from "react-router-dom";

const Navbar = () => {
    let { user, setUser } = useContext(State);
    const [dropDwnOpen, setDropDwnOpen] = useState(false)

    const firebaseSignout = (logoutLinkClickEvent) => {
        signOut(auth).then(() => {
            console.log(`User Signed Out`, logoutLinkClickEvent);
            localStorage.removeItem(`user`);
            setUser(undefined);
        }).catch((error) => {
            console.log(`Sign Out Error`, error);
        });
    }

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
                        <a href="./search" className="">Search</a> 
                    </li>
                    <li> 
                        <a href="./about" className="">About</a> 
                    </li>


                   

                    {user === undefined ? <>
                        <li> 
                            <a href="/signup" className="authLinks">Sign-Up</a> 
                        </li>
                        <li> 
                            <a href="/login" className="authLinks">Log-In</a> 
                        </li>
                    </> : <>
                        <li>
                            <p>Welcome, {user?.email}</p> 
                        </li>
                    </>}
                </ul>
                {
                    user === undefined ? <>

                    </> : <>
                    <div className='menuContainer'>
                        <div className="dropdownTrigger" onClick={() => {setDropDwnOpen(!dropDwnOpen)}}>
                            <button className='dropBtn'></button>
                        </div>
                    <div className={`dropdown ${dropDwnOpen? `active` : `inactive`}`}>
                        <ul className='dropdownNavList'>
                            <DropdownItem profile = {user} text = {"Profile"}/>
                            <DropdownItem drpSettings = {user} settings = {"settings"}/>
                            <DropdownItem drpInventory = {user} inventory = {"inventory"}/>
                            <DropdownItem drpTeams = {user} teams = {"teams"}/>
                            <li>
                            <a role={`button`} href={`/`} rel={`noreferrer`} onClick={(logoutLinkClickEvent) => firebaseSignout(logoutLinkClickEvent)} className={`authLinks`}><button className='formBtn logoutBtn'>Log-Out</button></a>
                            </li>
                        </ul>
                    </div>
                    </div>
                    </>
                }
                
            </div>
        </>
    )
}

export default Navbar;