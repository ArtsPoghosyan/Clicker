import React from "react";
import NavBar from "../navBar/navBar";
import TimeBar from "../navBar/timeBar";
import Header from "../navBar/header";
import TextCounter from "./counterText";
import CpsCounter from "./counterItem";
import "../../../scss/style.scss";

function CounterBar(){
    document.title = "Clicker counter - Increment, Decrement, reset";
    return (
        <>
            <Header path={"count"} />
            <div className="navItems" id="navItem">
                <NavBar path={"count"}/>
            </div>
            <div className="divCenter" id="blockCps">
                <CpsCounter />
            </div>
            <div className="divText" id="divTxt">
                <TextCounter />          
            </div>
        </>
    )
}

export default CounterBar;