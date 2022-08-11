import React from "react";
import CounterClicker from "./cpsCounter";
import "../../../scss/cps.scss";

function CpsCounter(){
    return(
        <>
            <h1>Clicker counter</h1><br></br>
            <div className="divCps" id="blockCps">
                <div className="divCpsBorder" id="divCpsBor">
                    <CounterClicker />
                </div>
            </div>
        </>
    )
}

export default CpsCounter;