
const baseURL = 'https://pokeapi.co/api/v2';
const pokeQuery = {
    pokemon: 'pokemon'
}
export default async function gettingPokemon
(pokemon) {
    console.log(`${baseURL}/${pokeQuery.pokemon}/${pokemon}`)
    return fetch(`${baseURL}/${pokeQuery.pokemon}/${pokemon}`)
}