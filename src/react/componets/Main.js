import React from "react";
import NavBar from "./navBar/navBar";
import TimeBar from "./navBar/timeBar";
import Header from "./navBar/header";
import Cps from "./cps/cpsItem";
import TextCps from "./cps/cpsText";
import "../../scss/style.scss";

function Main(){
    document.title = "CPS test - Check your clicks per second";
    return (
        <>
            <Header path={"cps"}/>
            <div className="navItems" id="navItem">
               <NavBar path={"cps"}/>
               <TimeBar path={"cps"}/>
            </div>
            <div className="divCenter">
               <Cps />
            </div>
            <div className="divText">
                <TextCps />          
            </div>
        </>
    )
}

export default Main;