import React from "react";
import NavBar from "../navBar/navBar";
import Header from "../navBar/header";
import HistItem from "./historyItem";
import "../../../scss/style.scss";

function History(){
    document.title = "History";
    return (
        <>
            <Header path={"history"} />
            <div className="navItems" id="navItem">
                <NavBar path={"history"}/>
            </div>
            <div className="divCenter">
                <HistItem />
            </div>
        </>
    )
}

export default History;