// import React, { useEffect, useState } from "react";
// import Card from "./Card";
// import { usePokemonData } from "./PokemonDataContext";

// // import axios from "axios";

// const TestingMainWithCache = () => {
//   const cachedPokemonData = usePokemonData();
//   const [loading, setLoading] = useState(true);
// //   const [nextUrl, setNextUrl] = useState();
// //   const [previousUrl, setPreviousUrl] = useState();

//   useEffect(() => {
//     setLoading(false); // Assuming that the cached data is immediately available
//     // Additional logic to handle pagination or other data manipulation
//   }, [cachedPokemonData]);

//   // Render loading state if data is still loading
//   if (loading) {
//     return <h1>Loading...</h1>;
//   }

//   return (
//     <>
//       <div className="container">
//         <div className="left-content cardContainer">
//           {cachedPokemonData.map((pokemon) => (
//             <Card key={pokemon.id} pokemon={pokemon} />
//           ))}
//           {/* Additional pagination buttons if needed */}
//         </div>
//         {/* Other components or elements */}
//       </div>
//     </>
//   );
// };

// export default TestingMainWithCache;
