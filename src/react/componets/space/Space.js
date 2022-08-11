import React from "react";
import NavBar from "../navBar/navBar";
import TimeBar from "../navBar/timeBar";
import Header from "../navBar/header";
import CpsSpace from "./spaceItem";
import TextSpace from "./spaceText";
import "../../../scss/style.scss";

function SpaceBar(){
    document.title = "Spacebar counter - Test your spacebar clicking speed";
    return (
        <>
            <Header path={"space"} />
            <div className="navItems" id="navItem" >
                <NavBar path={"space"}/>
                <TimeBar path={"spaceCps"}/>
            </div>
            <div className="divCenter">
                <CpsSpace />
            </div>
            <div className="divText">
                <TextSpace />          
            </div>
        </>
    )
}

export default SpaceBar;