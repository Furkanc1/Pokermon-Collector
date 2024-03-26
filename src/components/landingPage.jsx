import React from "react";
// import Card from "./Card";
// import Pokeinfo from "./Pokeinfo";
import "../components/style.css";

const Landing = () => {
  return (
    <>
    <div className="landingPageContainer">
        <div className="welcomeText">
            <h2>
                Welcome to Pokérmon-Collector, a personal project harnessing the power of the PokeAPI! 
                <p className="hideOnMobile">
                    This website serves as a comprehensive resource for all things Pokémon, allowing users to delve into the vast world of Pokémon and explore their abilities, types, and stats. 
                </p>
                <br></br>
                <br></br>
                <p className="importantText">
                Want to embark on a journey of discovery? Simply 
                click on the Pokéball icon in the navigation bar to access our Pokémon search page.
                </p>
                <br></br>
                <br></br>
                <p className="hideOnMobile">
                    Exciting developments are underway as I work towards integrating this platform into a larger Pokémon collecting and trading website. Stay tuned for updates as I evolve this project into a dynamic React app, bringing the magic of Pokémon to life in new and exciting ways!
                </p>
            </h2>
        </div>
        <div className="split-content">
            <div className="newsFeed hideOnMobile" >
                <h1 className="importantTextAlt">News!</h1>
                <h3>
                    Attention Pokémon Trainers! Exciting developments are underway in the world of Pokémon, as reports from the Galar region indicate a surge in Dynamax energy. Trainers are flocking to the Wild Area to test their skills in thrilling Max Raid Battles and encounter Gigantamax forms of beloved Pokémon. Leading the charge in these epic battles are none other than Zacian and Zamazenta, the legendary heroes of Galar, known for their unparalleled strength and awe-inspiring abilities. These majestic Pokémon have become the cornerstone of many top-tier strategies, captivating audiences with their legendary prowess.
                    <br></br>
                    <br></br>
                    But the excitement doesn't stop there. In the Sinnoh region, whispers of Arceus, the creator of all Pokémon, have resurfaced, sparking debates among scholars and trainers alike. With the power to shape the very fabric of reality, Arceus remains a force to be reckoned with, its presence casting a shadow over the competitive landscape. Meanwhile, in the Alola region, Solgaleo and Lunala continue to captivate trainers with their celestial might, revered as emissaries of the sun and moon.
                </h3>
            </div>
        </div>
    </div>
    </>
  );
};

export default Landing;
