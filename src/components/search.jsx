import React from "react";
// import { Form, Container } from "react-bootstrap";

const Search = (props) => {
    // const searchSubmit = (enteredSearch) => {
    //     console.log(enteredSearch)
    // }
    return(
        <>
        <form className="authForm pokeSearchForm">
            <input type="search" id="pokeSearch" name="pokeSearch" placeholder="Enter Pokemon Name..."/>
            
            <button type="submit" id="pokeSearchBtn" className="formBtn">Search</button>
        </form>
        </>
    )
}

export default Search;