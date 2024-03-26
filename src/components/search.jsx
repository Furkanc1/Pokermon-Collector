import React, { useState } from "react";
// import { Form, Container } from "react-bootstrap";

const Search = (props) => {
    const [search, setSearch] = useState('')

    return(
        <>
        <h1>{search}</h1>
        <form className="authForm pokeSearchForm">
            <input type="search" id="pokeSearch" name="pokeSearch" placeholder="Enter Pokemon Name..." value={search} onChange={(e) => setSearch(e.target.value)}/>
            
            <button type="submit" id="pokeSearchBtn" className="formBtn" onClick={(e) => {
                e.preventDefault();
                props.getSearchedPokemon(search)
            }}>Search</button>
        </form>
        </>
    )
}

export default Search;