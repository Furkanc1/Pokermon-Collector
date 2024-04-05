import axios from "axios";
const pokeApiUrl = 'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0'
const cacheKey = 'allPokemon'

// Function to fetch and cache Pokémon data
export const fetchAndCachePokemonData = async() => {

    try {
      const response = await axios.get(pokeApiUrl);
      const data = response.data;
      // Store data in local storage
      localStorage.setItem(cacheKey, JSON.stringify(data));
      console.log('Pokémon data cached successfully');
    } catch (error) {
      console.log('Error caching Pokémon data:', error);
    }
  }
  
  // Function to check if cached Pokémon data is available and valid
  export const getCachedPokemonData = () => {
    const cachedData = localStorage.getItem(cacheKey);
    if (cachedData) {
      const parsedData = JSON.parse(cachedData);
      // Check if cached data is still valid (e.g., not outdated)
      // may need to implement a mechanism to determine data freshness
      return parsedData;
    }
    return null;
  }
  
  // Example usage
  const cachedPokemonData = getCachedPokemonData();
  if (cachedPokemonData) {
    // Use cached data
    console.log('Using cached Pokémon data:', cachedPokemonData);
  } else {
    // Fetch fresh data from the API and cache it
    fetchAndCachePokemonData();
  }
  