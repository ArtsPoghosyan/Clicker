import React from "react";
import NavBar from "../navBar/navBar";
import TimeBar from "../navBar/timeBar";
import Header from "../navBar/header";
import CpsAim from "./cpsAim";
import TextAim from "./aimText";
import "../../../scss/style.scss";

function AimTrainer(){
    document.title = "Aim Trainer - Improve your skills in FPS games";
    return (
        <>
            <Header path={"space"} />
            <div className="navItems" id="navItem" >
                <NavBar path={"aim"}/>
                <TimeBar path={"aim"}/>
            </div>
            <div className="divCenter">
                <CpsAim />
            </div>
            <div className="divText">
                <TextAim />   
            </div>
        </>
    )
}

export default AimTrainer;