import React from "react";
import Card from "./Card";
import Pokeinfo from "./Pokeinfo";
import '../components/style.css';

const Main = () => {
    return(
        <>
            <div className="container">
                <div className="left-content">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <div className="btnContainer">
                        <button>Previous</button>
                        <button>Next</button>
                    </div>
                </div>
                <div className="right-content">
                    <Pokeinfo />
                </div>
            </div>
        
        </>
    )
}

export default Main;