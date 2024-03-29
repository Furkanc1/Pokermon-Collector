
import React, { useState } from "react";
// import { Form, Container } from "react-bootstrap";

const Search = (props) => {
    const [search, setSearch] = useState('')

    return(
        <>
        {/* <h1>{search}</h1> */}

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










// ATTEMPT AT ADDDING ERROR HANDLING BELOW CLEARLY DIDNT  WORK



// import React, { useState } from "react";
// // import { Form, Container } from "react-bootstrap";

// const Search = (props) => {
//     const [search, setSearch] = useState('')
//     // const [error, setError] = useState('')

//     // const handleSearch = (userSearchEvent) => {
//     //     const searchedValue = userSearchEvent.target.value.toLowerCase();
//     //     setSearch(searchedValue)

//     //     const isValidPokemon = isValidPokemonName(searchedValue);

//     //     if (!isValidPokemon && searchedValue.trim() !== '') {
//     //         setError("invalid pokemon name");
//     //     } else {
//     //         setError('')
//     //     }
//     // };

//     // const handleSubmit = (e) => {
//     //     e.preventDefault();
//     //     if (error === '') {
//     //         props.getSearchedPokemon(search)
//     //     }
//     // }

//     // const isValidPokemonName = async(pokemonName) => {
//     //     try {
//     //         const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`)
//     //         if (!response.ok) {
//     //         // if the response is not successful, pokemon doesnt exist(false)
//     //             return false;
//     //         } else {
//     //             const data = await response.json()
//     //             // will return data if pokemon does exist
//     //             return !!data
//     //         }
//     //     } catch (error) {
//     //         console.error("error validating pokemon name", error)
//     //         return false;
//     //     }
//     // }

//     return(
//         <>
//         {/* <h1>{search}</h1> */}

//         <form className="authForm pokeSearchForm">
//             <input type="search" id="pokeSearch" name="pokeSearch" placeholder="Enter Pokemon Name..." value={search} onChange={(e) => Search(e.target.value)}/>
            
//             <button type="submit" id="pokeSearchBtn" className="formBtn" onClick={(e) => {
//                 e.preventDefault();
//                 props.getSearchedPokemon(search)
//             }}>Search</button>
//         </form>
//         </>
//     )
// }

// export default Search;