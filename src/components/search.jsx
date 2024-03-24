import React from "react";
// import { Form, Container } from "react-bootstrap";

const Search = (props) => {
    return(
        <>
        <form class="authForm signInForm">
            <input type="search" id="pokeSearch" name="pokeSearch" placeholder="Enter Pokemon Name..."/>
            
            <button type="submit" id="pokeSearchBtn" class="pokeSearchBtn">Search</button>
        </form>
        </>
    )
}

export default Search;