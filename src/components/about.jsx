import React from "react";
import '../components/style.css';

const About = () => {
    return(
        <>
        <div className="landingPageContainer">
        <div className="welcomeText">
            <h2>
                <p className="importantText"> About This Project!:</p>
                <p>
                    When I began creating this projet, I started off by initially watching youtube videos of similar project. Seeing the similarities between many different web-developers (thought and coding-process) I was able to get a better grasp on React and its power, as well as a better understanding of implementing / using data from an API. 
                    <br></br>
                    <br></br>
                    <p className=" listText">My Process:</p>
                    <br></br>
                        <p className="importantText">Creating Pokedex</p>
                        
                    The production build started with the creation of the Pokedex page. This was the big chunk of my program and tackling it first allowed me more time to really go in a fine tune my website on the User-Interface side.
                        <p className="importantText">Styling Website:</p>
                        
                    As production went on and I was able to now see data on my screen, whether that be on my card components or my pokeDataDisplay component, I began styling the general look of my website
                        <p className="importantText">Creating Search-Bar</p>
                        
                    Coming closer to finalization, I still have to create and implement a search bar
                        <p className="importantText">Creating Search-Filter</p>
                        
                    Once I create the search bar, i will have a dropdown to add on or delete filters which will most likley be (type) di
                </p>
            </h2>
        </div>
        </div>
        </>
    )
}

export default About;